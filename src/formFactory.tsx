import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  defaultFormValidation,
  formHasError,
  getFieldValue,
  getFormValues,
  getInitialValues,
  updateFieldError,
  updateFieldValue,
  updateFormErrors,
  updateFormStatus,
} from './helpers';

function formFactory(Provider: ContextProvider) {
  return class Form extends React.Component<FormProps, FormState> {
    static defaultProps = {
      onValidate: defaultFormValidation,
    };
    // Keep tracks of what fields are mounted in the Form.
    // This is the source of truth for field names that belongs to the form.
    // At the moment, only contains `validator` function.
    mountedFields: Record<string, InternalFieldInfo> = {};

    unmounted = false;

    // shouldComponentUpdate(nextProps: FormProps, nextState: FormState) {
    //   (Object.keys(nextProps) as (keyof FormProps)[]).forEach(key => {
    //     if (nextProps[key] !== this.props[key]) {
    //       console.log(
    //         `[Form]: Props ${key}: ${this.props[key]} -> ${nextProps[key]}`
    //       );
    //     }
    //   });
    //   (Object.keys(nextState) as (keyof FormState)[]).forEach(key => {
    //     if (nextState[key] !== this.state[key]) {
    //       console.log(
    //         `[Form]: State ${key}: ${this.state[key]} -> ${nextState[key]}`
    //       );
    //     }
    //   });

    //   return true;
    // }

    /**
     * Register the mounted field in the Form.
     * @param {string} fieldName The name of the field.
     * @param {InternalFieldInfo} info The info to replace
     */
    registerField = (fieldName: string, info: InternalFieldInfo) => {
      this.mountedFields[fieldName] = info;
    };

    /**
     * Update the field to the given value in the Form.
     * @param {string} fieldName The name of the field.
     * @param {any} value The new value for the field.
     */
    updateValue = (fieldName: string, value: FieldValue) => {
      this.setState(updateFieldValue(fieldName, value));
    };

    /**
     * Validate the given field using on the validator registered.
     *
     * This function is here because React batches setState in event handlers.
     * In order for validate to work in the same event handler
     * where updateValue is called, need to use the functional setState here.
     * @param {string} fieldName The name of the field.
     */
    validateField = (fieldName: string) => {
      const { validator } = this.mountedFields[fieldName];

      this.setState(prevState => {
        const result = validator(getFieldValue(fieldName, prevState));

        if (result instanceof Promise) {
          // This promise always resolves
          result.then(error => {
            if (!this.unmounted) {
              this.setState(updateFieldError(fieldName, error));
            }
          });
          return null;
        }

        return updateFieldError(fieldName, result)(prevState);
      });
    };

    validateAllFields = async () => {
      const errors: FormErrors = {};
      const asyncValidations: [string, Promise<FieldError>][] = [];
      let hasAsync = false;

      Object.keys(this.mountedFields).forEach(fieldName => {
        const { validator } = this.mountedFields[fieldName];
        const result = validator(getFieldValue(fieldName, this.state));

        if (result instanceof Promise) {
          hasAsync = true;
          asyncValidations.push([fieldName, result]);
        } else {
          errors[fieldName] = result;
        }
      });

      if (hasAsync) {
        this.setState(updateFormStatus('isValidating', true));

        const results = await Promise.all(
          asyncValidations.map(entry => entry[1])
        );
        asyncValidations.forEach((entry, index) => {
          errors[entry[0]] = results[index];
        });
      }

      ReactDOM.unstable_batchedUpdates(() => {
        this.setState(
          updateFormErrors(errors, Object.keys(this.mountedFields))
        );
        const hasError = Object.values(errors).some(error => !!error);

        if (hasError) {
          this.setState(updateFormStatus('isValidating', false));
        }
      });
    };

    /**
     * Assumption: this func is triggered only via setState callback.
     *             as a result, allow `this.state` directly
     */
    submitForm = async () => {
      const { onSubmit } = this.props;
      if (!onSubmit) {
        return;
      }

      const hasError = formHasError(this.state);
      if (hasError) {
        return;
      }

      const result = onSubmit(getFormValues(this.state));

      if (!(result instanceof Promise)) {
        this.setState(
          updateFormErrors(result, Object.keys(this.mountedFields))
        );
        return;
      }

      this.setState(updateFormStatus('isSubmitting', true));

      let errors: FormErrors;
      try {
        errors = await result;
      } catch (err) {
        // TODO
        errors = { form: 'Error during submission' };
      } finally {
        if (!this.unmounted) {
          ReactDOM.unstable_batchedUpdates(() => {
            this.setState(
              updateFormErrors(errors, Object.keys(this.mountedFields))
            );
            this.setState(updateFormStatus('isSubmitting', false));
          });
        }
      }
    };

    /**
     * Submit the form.
     *
     * Assumption: this func is triggered via user interaction only.
     *             as a result, allow `this.state` directly
     *
     * It will proceed to do the following in the order:
     *    - Check if there is any error currently.
     *    - If there is any error then terminate else continue.
     *    - Run all the fields' validations
     *    - If there is any error then terminate else continue.
     *    - Run the form's validation.
     *    - If there is any error then terminate else continue.
     *    - Run the form's submission.
     * @param {React.FormEvent} event The onSubmit event of the HTML form.
     * @returns {boolean} Representing if there were any error.
     */
    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { onValidate } = this.props;

      const hasError = formHasError(this.state);
      if (hasError) {
        return;
      }

      await this.validateAllFields();

      const hasFieldErrors = formHasError(this.state);

      if (hasFieldErrors) {
        return;
      }

      const result = onValidate!(getFormValues(this.state));

      if (!(result instanceof Promise)) {
        this.setState(
          updateFormErrors(result, Object.keys(this.mountedFields)),
          this.submitForm
        );
        return;
      }

      this.setState(updateFormStatus('isValidating', true));

      let errors: FormErrors;
      try {
        errors = await result;
      } catch (err) {
        // TODO
        errors = { form: 'Error during validation' };
      } finally {
        if (!this.unmounted) {
          ReactDOM.unstable_batchedUpdates(() => {
            this.setState(
              updateFormErrors(errors, Object.keys(this.mountedFields))
            );
            this.setState(
              updateFormStatus('isValidating', false),
              this.submitForm
            );
          });
        }
      }
    };

    /**
     * Reset the form.
     * It will clear all fields' state and set values to initial values.
     */
    handleReset = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { initialValues, onReset } = this.props;

      this.setState({
        error: null,
        isValidating: false,
        isSubmitting: false,
        fields: getInitialValues(initialValues),
      });

      if (onReset) {
        onReset(event);
      }
    };

    state: FormState = {
      error: null,
      isValidating: false,
      isSubmitting: false,
      fields: getInitialValues(this.props.initialValues),
      updateValue: this.updateValue,
      registerField: this.registerField,
      validateField: this.validateField,
    };

    componentWillUnmount() {
      this.unmounted = true;
    }

    render() {
      const {
        children,
        onValidate,
        initialValues,
        onSubmit,
        onReset,
        ...rest
      } = this.props;
      // console.log('[Form]: render');

      return (
        <Provider value={this.state}>
          <form
            {...rest}
            onSubmit={this.handleSubmit}
            onReset={this.handleReset}
          >
            {children}
          </form>
        </Provider>
      );
    }
  };
}

export default formFactory;
