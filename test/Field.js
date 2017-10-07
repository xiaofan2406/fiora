import React from 'react';
import { mount } from 'enzyme';
import { Component, initialize, mapStateToProps } from '../src/Field';
import { createField, updateFieldValue, updateError } from '../src/actions';
import * as selectors from '../src/selectors';

let props = {
  name: 'username',
  value: 'admin',
  error: 'Invalid',
  formName: 'login'
};

beforeEach(() => {
  props = {
    name: 'username',
    onValidate: jest.fn(),
    value: 'admin',
    error: 'Invalid',
    formName: 'login',
    dispatch: jest.fn()
  };
});

describe('Presentational Field', () => {
  let children;

  beforeEach(() => {
    children = jest.fn(() => '');
  });

  test('default onValidate prop resolve null', async () => {
    props.onValidate = undefined;
    const wrapper = mount(<Component {...props}>{children}</Component>);
    const result = await wrapper.prop('onValidate')();
    expect(result).toEqual(null);
  });

  test('value and error are passed to children render function', () => {
    mount(<Component {...props}>{children}</Component>);
    expect(children).toHaveBeenCalledTimes(1);
    const params = children.mock.calls[0][0];
    expect(params.value).toEqual(props.value);
    expect(params.error).toEqual(props.error);
  });

  test('handleChange updates field value', () => {
    const newValue = 'superuser';
    mount(<Component {...props}>{children}</Component>);
    const { handleChange } = children.mock.calls[0][0];
    expect(props.dispatch).toHaveBeenCalledTimes(0);

    handleChange(newValue);
    expect(props.dispatch).toHaveBeenCalledTimes(1);
    expect(props.dispatch).toHaveBeenCalledWith(
      updateFieldValue(props.formName, props.name, newValue)
    );
  });

  test('handleValidate triggers onValidate prop', async () => {
    mount(<Component {...props}>{children}</Component>);
    const { handleValidate } = children.mock.calls[0][0];
    expect(props.onValidate).toHaveBeenCalledTimes(0);

    await handleValidate();
    expect(props.onValidate).toHaveBeenCalledTimes(1);
    expect(props.onValidate).toHaveBeenCalledWith(props.value);
  });

  test('handleValidate returns true and updates error if any', async () => {
    const error = 'Invalid';
    props.onValidate = jest.fn(async () => error);
    mount(<Component {...props}>{children}</Component>);
    const { handleValidate } = children.mock.calls[0][0];
    expect(props.onValidate).toHaveBeenCalledTimes(0);
    expect(props.dispatch).toHaveBeenCalledTimes(0);

    const result = await handleValidate();
    expect(props.onValidate).toHaveBeenCalledTimes(1);
    expect(props.onValidate).toHaveBeenCalledWith(props.value);
    expect(props.dispatch).toHaveBeenCalledTimes(1);
    expect(props.dispatch).toHaveBeenCalledWith(
      updateError(props.formName, props.name, error)
    );
    expect(result).toBe(true);
  });

  test('handleValidate returns false and does not update error if no error', async () => {
    props.onValidate = jest.fn(async () => null);
    mount(<Component {...props}>{children}</Component>);
    const { handleValidate } = children.mock.calls[0][0];
    expect(props.onValidate).toHaveBeenCalledTimes(0);
    expect(props.dispatch).toHaveBeenCalledTimes(0);

    const result = await handleValidate();
    expect(props.onValidate).toHaveBeenCalledTimes(1);
    expect(props.onValidate).toHaveBeenCalledWith(props.value);
    expect(props.dispatch).toHaveBeenCalledTimes(0);
    expect(result).toBe(false);
  });
});

describe('initialize', () => {
  const context = {
    store: {
      subscribe: () => {},
      getState: () => {}
    },
    fiora: { formName: 'login' }
  };
  beforeEach(() => {
    context.store.dispatch = jest.fn();
    context.fiora.setValidateFunc = jest.fn();
  });

  test('createField is triggered', () => {
    expect(context.store.dispatch).toHaveBeenCalledTimes(0);

    initialize(props, context);
    expect(context.store.dispatch).toHaveBeenCalledTimes(1);
    expect(context.store.dispatch).toHaveBeenCalledWith(
      createField(context.fiora.formName, props.name)
    );
  });

  test('value is initialized when given', () => {
    props.initialValue = 'useradmin';
    expect(context.store.dispatch).toHaveBeenCalledTimes(0);

    initialize(props, context);
    expect(context.store.dispatch).toHaveBeenCalledTimes(2);
    expect(context.store.dispatch).toHaveBeenCalledWith(
      updateFieldValue(context.fiora.formName, props.name, props.initialValue)
    );
  });

  test('validation function is set correctly', () => {
    props.onValidate = jest.fn();
    expect(context.fiora.setValidateFunc).toHaveBeenCalledTimes(0);

    initialize(props, context);
    expect(context.fiora.setValidateFunc).toHaveBeenCalledTimes(1);
    const [name, onValidate] = context.fiora.setValidateFunc.mock.calls[0];
    expect(name).toBe(props.name);
    expect(props.onValidate).toHaveBeenCalledTimes(0);

    onValidate();
    expect(props.onValidate).toHaveBeenCalledTimes(1);
  });

  test('redux connect with correct mapStateToProps', () => {
    const valueSelectorSpy = jest.spyOn(selectors, 'getFieldValue');
    const errorSelectorSpy = jest.spyOn(selectors, 'getError');
    const state = { fiora: { fieldValue: {}, errors: {} } };
    expect(valueSelectorSpy).toHaveBeenCalledTimes(0);
    expect(errorSelectorSpy).toHaveBeenCalledTimes(0);

    mapStateToProps(state, props);
    expect(valueSelectorSpy).toHaveBeenCalledTimes(1);
    expect(errorSelectorSpy).toHaveBeenCalledTimes(1);
  });
});
