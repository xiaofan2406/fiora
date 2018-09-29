export const getFormValues = (state: FormState) =>
  Object.keys(state.fields).reduce(
    (reduced, fieldName) => ({
      ...reduced,
      [fieldName]: state.fields[fieldName].value,
    }),
    {}
  );

export const getFieldValue = (fieldName: string, state: FormState) =>
  state.fields[fieldName] ? state.fields[fieldName].value : '';

export function getInitialValues(initialValues?: FormValues) {
  return initialValues
    ? Object.keys(initialValues).reduce(
        (reduced, fieldName) => ({
          ...reduced,
          [fieldName]: {
            value: initialValues[fieldName],
          },
        }),
        {}
      )
    : {};
}

export function updateFieldError(fieldName: string, error: FieldError) {
  return (state: FormState) => {
    const validError = error || null;
    return !state.fields[fieldName] ||
      state.fields[fieldName].error !== validError
      ? {
          fields: {
            ...state.fields,
            [fieldName]: {
              ...state.fields[fieldName],
              error: validError,
              isTouched: true,
            },
          },
        }
      : null;
  };
}

export function updateFieldValue(fieldName: string, value: FieldValue) {
  return (state: FormState) => {
    return !state.fields[fieldName] || state.fields[fieldName].value !== value
      ? {
          fields: {
            ...state.fields,
            [fieldName]: {
              ...state.fields[fieldName],
              value,
              isTouched: true,
            },
          },
          // Clear form error whenever any field value change
          error: null,
        }
      : null;
  };
}

export function updateFormErrors(errors: FormErrors, validFields: string[]) {
  return (state: FormState) => {
    if (!errors) {
      return null;
    }
    let hasFormError = false;
    let updates: Partial<FormState> = {};

    if (errors.form) {
      hasFormError = true;
      updates.error = errors.form || null;
    }

    let hasFieldError = false;

    const names = Object.keys(errors)
      .filter(name => name !== 'form')
      .filter(name => validFields.includes(name));

    if (names.length > 0) {
      hasFieldError = true;

      updates = {
        ...updates,
        fields: {
          ...state.fields,
        },
      };

      names.forEach(name => {
        updates = {
          ...updates,
          ...updateFieldError(name, errors[name])(updates as FormState),
        };
      });
    }

    return hasFieldError || hasFormError
      ? (updates as Pick<FormState, keyof FormState>)
      : null;
  };
}

export function updateFormStatus(
  name: 'isSubmitting' | 'isValidating',
  status: boolean
) {
  return (state: FormState): Pick<FormState, keyof FormState> | null => {
    // @ts-ignore
    return state[name] !== status ? { [name]: status } : null;
  };
}

export function formHasError(state: FormState) {
  return (
    state.error ||
    Object.keys(state.fields).some(fieldName => state.fields[fieldName].error)
  );
}

export function defaultFormValidation() {
  return;
}
