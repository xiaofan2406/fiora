export const getFormValues = (state: FormState) =>
  Object.keys(state.fields).reduce(
    (reduced, fieldName) => ({
      ...reduced,
      [fieldName]: state.fields[fieldName].value,
    }),
    {}
  );

export const getFieldValue = (fieldName: string, state: FormState) =>
  state.fields[fieldName] ? state.fields[fieldName].value : undefined;

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

// TODO cleanup
export function updateFormErrors(errors: FormErrors) {
  return (state: FormState) => {
    if (!errors) {
      return null;
    }
    let hasFormError = false;
    let partial: Partial<FormState> = {
      fields: { ...state.fields },
    };

    if (errors.form) {
      hasFormError = true;
      partial.error = errors.form || null;
    }

    let hasFieldError = false;

    const keys = Object.keys(errors).filter(
      name => name !== 'form'
    ) as (keyof FormState)[];

    if (keys.length > 0) {
      partial = {
        ...partial,
        fields: { ...state.fields },
      };
    }

    keys.forEach(name => {
      hasFieldError = true;
      partial.fields![name] = { ...state.fields[name] };
      // @ts-ignore
      partial = updateFieldError(name, errors[name])(partial);
    });

    return hasFieldError || hasFormError
      ? (partial as Pick<FormState, keyof FormState>)
      : null;
  };
}

export function updateFormStatus(name: keyof FormState, status: boolean) {
  return (state: FormState): Pick<FormState, keyof FormState> | null =>
    // @ts-ignore
    state[name] !== status ? { [name as keyof FormState]: status } : null;
}

export function formHasError(state: FormState) {
  return (
    state.error ||
    Object.keys(state.fields).some(fieldName => state.fields[fieldName].error)
  );
}
