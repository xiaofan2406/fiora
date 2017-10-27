import React from 'react';
import { mount } from 'enzyme';
import Fiora from '../src/Fiora';
import {
  createForm,
  updateFormError,
  startValidatingForm,
  finishValidatingForm,
  startSubmitting,
  finishSubmitting,
  updateFieldError,
  startValidatingField,
  finishValidatingField
} from '../src/actions';
import * as selectors from '../src/selectors';
import { DEFAULT_ERROR, FORM_ERROR_KEY } from '../src/helpers';

const formName = 'login';
let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Fiora name={formName} onSubmit={() => {}}>
      fiora
    </Fiora>,
    {
      context: {
        store: {
          dispatch: jest.fn(),
          subscribe: jest.fn(),
          getState: jest.fn()
        }
      }
    }
  );
});

describe('handleErrorsIfAny', () => {
  it('updates all the fields error with given error or default error', () => {
    const errors = {
      username: 'Invalid',
      email: undefined,
      password: ['Invalid']
    };
    const fields = ['username', 'email', 'password'];
    const { context, handleErrorsIfAny } = wrapper.instance();
    context.store.dispatch = jest.fn();
    expect(context.store.dispatch).toHaveBeenCalledTimes(0);

    handleErrorsIfAny(errors, fields);
    expect(context.store.dispatch).toHaveBeenCalledTimes(3);
    expect(context.store.dispatch).toHaveBeenCalledWith(
      updateFieldError(formName, 'username', 'Invalid')
    );
    expect(context.store.dispatch).toHaveBeenCalledWith(
      updateFieldError(formName, 'email', DEFAULT_ERROR)
    );
    expect(context.store.dispatch).toHaveBeenCalledWith(
      updateFieldError(formName, 'password', ['Invalid'])
    );
  });

  it('updates the form error if the form error is given', () => {
    const errors = { [FORM_ERROR_KEY]: 'Invalid' };
    const fields = [];
    const { context, handleErrorsIfAny } = wrapper.instance();
    context.store.dispatch = jest.fn();
    expect(context.store.dispatch).toHaveBeenCalledTimes(0);

    handleErrorsIfAny(errors, fields);
    expect(context.store.dispatch).toHaveBeenCalledTimes(1);
    expect(context.store.dispatch).toHaveBeenCalledWith(
      updateFormError(formName, 'Invalid')
    );
  });

  it('resets the form error if the form error key is present with no error', () => {
    const errors = { [FORM_ERROR_KEY]: undefined };
    const fields = [];
    const { context, handleErrorsIfAny } = wrapper.instance();
    context.store.dispatch = jest.fn();
    expect(context.store.dispatch).toHaveBeenCalledTimes(0);

    handleErrorsIfAny(errors, fields);
    expect(context.store.dispatch).toHaveBeenCalledTimes(1);
    expect(context.store.dispatch).toHaveBeenCalledWith(
      updateFormError(formName, DEFAULT_ERROR)
    );
  });

  it('runs without error if errors param is falsy', () => {
    const { handleErrorsIfAny } = wrapper.instance();
    expect(() => handleErrorsIfAny(undefined, [])).not.toThrow();
    expect(() => handleErrorsIfAny(null, [])).not.toThrow();
  });

  it('returns true if errors is not empty', () => {
    expect(
      wrapper.instance().handleErrorsIfAny({ username: 'Invalid' }, [])
    ).toBe(true);
  });

  it('returns false if errors is empty', () => {
    expect(wrapper.instance().handleErrorsIfAny({}, [])).toBe(false);
    expect(wrapper.instance().handleErrorsIfAny(undefined, [])).toBe(false);
  });
});

describe('runValidations', () => {
  describe('when fields validations has error', () => {
    let result;
    beforeEach(async () => {
      wrapper.setProps({ onValidate: jest.fn(() => null) });
      const { runValidations, fieldValidations } = wrapper.instance();
      wrapper.instance().handleErrorsIfAny = jest.fn(() => true);
      fieldValidations.username = jest.fn(async () => 'invalid');
      fieldValidations.password = jest.fn(async () => undefined);

      result = await runValidations({ username: 'admin', password: 'pass' });
    });

    it('runs all fieldValidations with their values', () => {
      const { fieldValidations } = wrapper.instance();
      expect(fieldValidations.username).toHaveBeenCalledTimes(1);
      expect(fieldValidations.username).toHaveBeenCalledWith('admin');
      expect(fieldValidations.password).toHaveBeenCalledTimes(1);
      expect(fieldValidations.password).toHaveBeenCalledWith('pass');
    });

    it('triggers handleErrorsIfAny with field errors and returns its result', () => {
      const { handleErrorsIfAny } = wrapper.instance();
      expect(handleErrorsIfAny).toHaveBeenCalledTimes(1);
      expect(handleErrorsIfAny).toHaveBeenCalledWith(
        {
          username: 'invalid',
          password: undefined
        },
        ['username', 'password']
      );
      expect(result).toBe(true);
    });

    it('skips onValidate prop', () => {
      expect(wrapper.props().onValidate).toHaveBeenCalledTimes(0);
    });
  });

  describe('when fields validations has no error', () => {
    let result;
    beforeEach(async () => {
      wrapper.setProps({
        onValidate: jest.fn(() => ({ password: 'invalid' }))
      });
      const { runValidations, fieldValidations } = wrapper.instance();
      wrapper.instance().handleErrorsIfAny = jest.fn(() => true);
      fieldValidations.username = jest.fn(async () => null);
      fieldValidations.password = jest.fn(async () => null);

      result = await runValidations({ username: 'admin', password: 'pass' });
    });

    it('runs all fieldValidations with their values', () => {
      const { fieldValidations } = wrapper.instance();
      expect(fieldValidations.username).toHaveBeenCalledTimes(1);
      expect(fieldValidations.username).toHaveBeenCalledWith('admin');
      expect(fieldValidations.password).toHaveBeenCalledTimes(1);
      expect(fieldValidations.password).toHaveBeenCalledWith('pass');
    });

    it('triggers onValidate prop with all the values', () => {
      const { onValidate } = wrapper.props();
      expect(onValidate).toHaveBeenCalledTimes(1);
      expect(onValidate).toHaveBeenCalledWith({
        username: 'admin',
        password: 'pass'
      });
    });

    it('triggers handleErrorsIfAny with onValidate result and returns its result', () => {
      const { handleErrorsIfAny } = wrapper.instance();
      expect(handleErrorsIfAny).toHaveBeenCalledTimes(1);
      expect(handleErrorsIfAny).toHaveBeenCalledWith({ password: 'invalid' }, [
        'username',
        'password'
      ]);
      expect(result).toBe(true);
    });
  });
});

describe('handleSubmit', () => {
  const state = { forms: {}, fields: {} };
  const formValues = { username: 'admin', password: 'pass' };

  beforeEach(() => {
    wrapper.instance().runValidations = jest.fn(async () => true);
    wrapper.instance().runSubmit = jest.fn();
    wrapper.instance().context.store.getState = jest.fn(() => state);
    selectors.getFormValues = jest.fn(() => formValues);
  });

  it('gets all the values form the store', async () => {
    const { context: { store: { getState } } } = wrapper.instance();
    expect(selectors.getFormValues).toHaveBeenCalledTimes(0);
    expect(getState).toHaveBeenCalledTimes(0);

    await wrapper.instance().handleSubmit();
    expect(selectors.getFormValues).toHaveBeenCalledTimes(1);
    expect(selectors.getFormValues).toHaveBeenCalledWith(state, { formName });
    expect(getState).toHaveBeenCalledTimes(1);
  });

  it('triggers runValidations with formValues', async () => {
    const { handleSubmit, runValidations } = wrapper.instance();
    expect(runValidations).toHaveBeenCalledTimes(0);

    await handleSubmit();
    expect(runValidations).toHaveBeenCalledTimes(1);
    expect(runValidations).toHaveBeenCalledWith(formValues);
  });

  it('sets the form validation status', async () => {
    const {
      context: { store: { dispatch } },
      handleSubmit
    } = wrapper.instance();
    await handleSubmit();
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenCalledWith(startValidatingForm(formName));
    expect(dispatch).toHaveBeenCalledWith(finishValidatingForm(formName));
  });

  describe('when runValidations return false', () => {
    beforeEach(() => {
      wrapper.setProps({
        onSubmit: jest.fn(async () => ({ password: 'invalid' }))
      });
      wrapper.instance().runValidations = jest.fn(async () => false);
      wrapper.instance().handleErrorsIfAny = jest.fn();
    });

    it('triggers onSubmit with formValues', async () => {
      const { onSubmit } = wrapper.props();
      const { handleSubmit } = wrapper.instance();
      expect(onSubmit).toHaveBeenCalledTimes(0);

      await handleSubmit();
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith(formValues);
    });

    it('sets the form submitting status', async () => {
      const {
        context: { store: { dispatch } },
        handleSubmit
      } = wrapper.instance();
      await handleSubmit();
      expect(dispatch).toHaveBeenCalledWith(startSubmitting(formName));
      expect(dispatch).toHaveBeenCalledWith(finishSubmitting(formName));
    });

    it('triggers handleErrorsIfAny with submit errors', async () => {
      const { handleErrorsIfAny, handleSubmit } = wrapper.instance();
      expect(handleErrorsIfAny).toHaveBeenCalledTimes(0);

      await handleSubmit();
      expect(handleErrorsIfAny).toHaveBeenCalledTimes(1);

      expect(handleErrorsIfAny).toHaveBeenCalledWith({ password: 'invalid' }, [
        'username',
        'password'
      ]);
    });
  });
});

describe('component lifecycle hooks and props', () => {
  it('triggers dispatch for creating the form during componentWillMount', () => {
    wrapper.instance().context.store.dispatch = jest.fn();
    const { dispatch } = wrapper.instance().context.store;
    expect(dispatch).toHaveBeenCalledTimes(0);

    wrapper.instance().componentWillMount();
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(createForm(formName));
  });

  it('sets the correct default onValidate prop', async () => {
    const result = await wrapper.props().onValidate();
    expect(result).toEqual(null);
  });

  it('sets the correct fiora formName context', () => {
    const { fiora } = wrapper.instance().getChildContext();
    expect(fiora.formName).toEqual(formName);
  });

  it('sets the correct fiora setValidateFunc context', async () => {
    const validationFunc = jest.fn(async () => 'invalid');
    const { setValidateFunc } = wrapper.instance().getChildContext().fiora;
    const {
      context: { store: { dispatch } },
      fieldValidations
    } = wrapper.instance();
    expect(fieldValidations).toEqual({});
    expect(dispatch).toHaveBeenCalledTimes(1);

    setValidateFunc('username', validationFunc);
    expect(fieldValidations).toHaveProperty('username');

    const result = await fieldValidations.username();
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenCalledWith(
      startValidatingField(formName, 'username')
    );
    expect(dispatch).toHaveBeenCalledWith(
      finishValidatingField(formName, 'username')
    );
    expect(result).toEqual('invalid');
  });

  it('sets the correct fiora handleSubmit context', () => {
    const childContext = wrapper.instance().getChildContext();
    expect(childContext.fiora.handleSubmit).toEqual(
      wrapper.instance().handleSubmit
    );
  });

  it('returns children', () => {
    expect(wrapper.text()).toEqual('fiora');

    wrapper.setProps({ children: <div>react</div> });
    expect(wrapper.text()).toEqual('react');
  });
});
