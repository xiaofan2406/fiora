import React from 'react';
import { mount } from 'enzyme';
import Fiora from '../src/Fiora';
import * as actions from '../src/actions';
import { DEFAULT_ERROR, FORM_AS_FIELD_NAME } from '../src/helpers';

const formName = 'login';
const withStore = (component, store) =>
  mount(component, { context: { store } });
let wrapper;
let store;
beforeEach(() => {
  store = {
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn()
  };
  wrapper = withStore(<Fiora name={formName}>{() => ''}</Fiora>, store);
});

it('triggers dispatch for creating the form', () => {
  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(actions.createForm(formName));
});

it('sets the correct fiora formName context', () => {
  const childContext = wrapper.instance().getChildContext();
  expect(childContext.fiora).toHaveProperty('formName', formName);
});

it('sets the correct fiora setValidateFunc context', () => {
  const childContext = wrapper.instance().getChildContext();
  expect(wrapper.instance().fieldValidations).toEqual({});

  childContext.fiora.setValidateFunc('username', jest.fn());
  expect(wrapper.instance().fieldValidations).toHaveProperty('username');
});

describe('handleErrorsIfAny(errors)', () => {
  it('dispatch all the errors', () => {
    const errors = {
      username: 'Invalid',
      email: undefined,
      password: ['Invalid']
    };
    const { context, handleErrorsIfAny } = wrapper.instance();
    context.store.dispatch = jest.fn();
    handleErrorsIfAny(errors);
    expect(context.store.dispatch).toHaveBeenCalledTimes(3);
    expect(context.store.dispatch).toHaveBeenCalledWith(
      actions.updateError(formName, 'username', 'Invalid')
    );
    expect(context.store.dispatch).toHaveBeenCalledWith(
      actions.updateError(formName, 'email', undefined)
    );
    expect(context.store.dispatch).toHaveBeenCalledWith(
      actions.updateError(formName, 'password', ['Invalid'])
    );
  });

  it('return true if errors is not empty', () => {
    const errors = { username: 'Invalid' };
    expect(wrapper.instance().handleErrorsIfAny(errors)).toBe(true);
  });

  it('return false if errors is empty', () => {
    const errors = {};
    expect(wrapper.instance().handleErrorsIfAny(errors)).toBe(false);
    expect(wrapper.instance().handleErrorsIfAny()).toBe(false);
  });
});

describe('runFormValidation', () => {
  it('returns the result from the field validation function', async () => {
    const errors = { username: 'Invalid', form: 'Invalid' };
    const onValidate = jest.fn(async () => errors);
    wrapper = withStore(
      <Fiora name={formName} onValidate={onValidate}>
        {() => ''}
      </Fiora>,
      store
    );
    const values = { username: 'admin' };
    const result = await wrapper.instance().runFormValidation(values);
    expect(result).toEqual(errors);
    expect(wrapper.prop('onValidate')).toHaveBeenCalledTimes(1);
    expect(wrapper.prop('onValidate')).toHaveBeenCalledWith(values);
  });

  it('returns an default form error object if onValidate returns falsy value', async () => {
    const onValidate = jest.fn(async () => null);
    wrapper = withStore(
      <Fiora name={formName} onValidate={onValidate}>
        {() => ''}
      </Fiora>,
      store
    );
    const values = { username: 'admin' };
    const result = await wrapper.instance().runFormValidation(values);
    expect(result).toEqual({ [FORM_AS_FIELD_NAME]: DEFAULT_ERROR });
    expect(wrapper.prop('onValidate')).toHaveBeenCalledTimes(1);
    expect(wrapper.prop('onValidate')).toHaveBeenCalledWith(values);
  });

  it('returns an default form error object if onValidate does not contain form error', async () => {
    const onValidate = jest.fn(async () => ({ username: 'Invalid' }));
    wrapper = withStore(
      <Fiora name={formName} onValidate={onValidate}>
        {() => ''}
      </Fiora>,
      store
    );
    const values = { username: 'admin' };
    const result = await wrapper.instance().runFormValidation(values);
    expect(result).toEqual({
      username: 'Invalid',
      [FORM_AS_FIELD_NAME]: DEFAULT_ERROR
    });
    expect(wrapper.prop('onValidate')).toHaveBeenCalledTimes(1);
    expect(wrapper.prop('onValidate')).toHaveBeenCalledWith(values);
  });
});

describe('runFieldValidation', () => {
  it('returns the result from the field validation function', async () => {
    const error = 'Invalid';
    const fieldName = 'username';
    const value = 'admin';
    wrapper
      .instance()
      .getChildContext()
      .fiora.setValidateFunc(fieldName, jest.fn(async () => error));
    const validationFunc = wrapper.instance().fieldValidations[fieldName];
    const result = await wrapper
      .instance()
      .runFieldValidation(fieldName, value);
    expect(result).toEqual(error);
    expect(validationFunc).toHaveBeenCalledTimes(1);
    expect(validationFunc).toHaveBeenCalledWith(value);
  });

  it('returns the default error if the field validation return falsy value', async () => {
    const fieldName = 'username';
    const value = 'admin';
    wrapper
      .instance()
      .getChildContext()
      .fiora.setValidateFunc(fieldName, jest.fn(async () => undefined));
    const validationFunc = wrapper.instance().fieldValidations[fieldName];
    const result = await wrapper
      .instance()
      .runFieldValidation(fieldName, value);
    expect(result).toEqual(DEFAULT_ERROR);
    expect(validationFunc).toHaveBeenCalledTimes(1);
    expect(validationFunc).toHaveBeenCalledWith(value);
  });
});

describe('runValidations', () => {
  beforeEach(() => {
    wrapper.instance().runFormValidation = jest.fn(async values => {
      if (values.password === values.username) {
        return { password: 'Password cannot be username', form: DEFAULT_ERROR };
      }
      if (values.password === 'form') {
        return { form: 'form is invalid' };
      }
      return { form: DEFAULT_ERROR };
    });
    wrapper.instance().runFieldValidation = jest.fn(
      async (fieldName, value) =>
        value.length < 5 ? `${fieldName} is invalid` : null
    );
  });

  it('runs form validations with the form values', async () => {
    const formValues = { username: 'admin', password: '12345' };
    const { runFormValidation, runValidations } = wrapper.instance();
    await runValidations(formValues);
    expect(runFormValidation).toHaveBeenCalledTimes(1);
    expect(runFormValidation).toHaveBeenCalledWith(formValues);
  });

  it('runs all the field validations with its values', async () => {
    const formValues = { username: 'admin', password: '12345' };
    const { runFormValidation, runValidations } = wrapper.instance();
    await runValidations(formValues);
    expect(runFormValidation).toHaveBeenCalledTimes(1);
    expect(runFormValidation).toHaveBeenCalledWith(formValues);
  });

  it('returns all the errors from form and fields validtions', async () => {
    const formValues = { username: 'admi', password: 'form' };
    const result = await wrapper.instance().runValidations(formValues);
    expect(result).toEqual({
      username: 'username is invalid',
      password: 'password is invalid',
      form: 'form is invalid'
    });
  });

  it('returns results with form errors overwrite field validation', async () => {
    const formValues = { username: 'admi', password: 'admi' };
    const result = await wrapper.instance().runValidations(formValues);
    expect(result).toEqual({
      username: 'username is invalid',
      password: 'Password cannot be username',
      form: DEFAULT_ERROR
    });
  });
});

describe('handleSubmit()', () => {
  it('triggers onValidate and handles its errors');
  it('triggers onSubmit if onValidate returns no error');
  it('handles submit error');
});

describe('render()', () => {
  it('returns children with handleSubmit', () => {
    const children = jest.fn(() => '');
    wrapper = withStore(<Fiora name={formName}>{children}</Fiora>, store);
    expect(children).toHaveBeenCalledWith({
      handleSubmit: wrapper.instance().handleSubmit
    });
    expect(wrapper.text()).toEqual('');
  });
});
