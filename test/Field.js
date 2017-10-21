import React from 'react';
import { mount } from 'enzyme';
import { Component, initialize, mapStateToProps } from '../src/Field';
import {
  createField,
  updateFieldValue,
  startValidatingField,
  finishValidatingField,
  updateError
} from '../src/actions';
import * as selectors from '../src/selectors';

let props;
beforeEach(() => {
  props = {
    name: 'username',
    onValidate: jest.fn(),
    value: 'admin',
    error: 'Invalid',
    formName: 'login',
    dispatch: jest.fn(),
    children: jest.fn(() => '')
  };
});

describe('Presentational Field', () => {
  test('default onValidate prop resolve null', async () => {
    props.onValidate = undefined;
    const wrapper = mount(<Component {...props} />);
    const result = await wrapper.props().onValidate();
    expect(result).toEqual(null);
  });

  test('value and error are passed to children render function', () => {
    const wrapper = mount(<Component {...props} />);
    const { children } = wrapper.props();
    expect(children).toHaveBeenCalledTimes(1);
    const params = children.mock.calls[0][0];
    expect(params.value).toEqual(props.value);
    expect(params.error).toEqual(props.error);
  });

  test('handleChange updates field value', () => {
    const newValue = 'superuser';
    const wrapper = mount(<Component {...props} />);
    const { dispatch, children } = wrapper.props();
    const { handleChange } = children.mock.calls[0][0];
    expect(dispatch).toHaveBeenCalledTimes(0);

    handleChange(newValue);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(
      updateFieldValue(props.formName, props.name, newValue)
    );
  });

  test('handleValidate triggers onValidate prop', async () => {
    const wrapper = mount(<Component {...props} />);
    const { onValidate, children } = wrapper.props();
    const { handleValidate } = children.mock.calls[0][0];
    expect(onValidate).toHaveBeenCalledTimes(0);

    await handleValidate();
    expect(onValidate).toHaveBeenCalledTimes(1);
    expect(onValidate).toHaveBeenCalledWith(props.value);
  });

  test('handleValidate dispatch actions for validation meta', async () => {
    const wrapper = mount(<Component {...props} />);
    const { dispatch, children, formName, name } = wrapper.props();
    const { handleValidate } = children.mock.calls[0][0];
    expect(dispatch).toHaveBeenCalledTimes(0);

    await handleValidate();
    expect(dispatch).toHaveBeenCalledWith(startValidatingField(formName, name));
    expect(dispatch).toHaveBeenCalledWith(
      finishValidatingField(formName, name)
    );
  });

  test('handleValidate returns true and updates error if any', async () => {
    const error = 'Invalid';
    props.onValidate = jest.fn(async () => error);
    const wrapper = mount(<Component {...props} />);
    const {
      dispatch,
      onValidate,
      children,
      formName,
      name,
      value
    } = wrapper.props();
    const { handleValidate } = children.mock.calls[0][0];
    expect(onValidate).toHaveBeenCalledTimes(0);
    expect(dispatch).toHaveBeenCalledTimes(0);

    const result = await handleValidate();
    expect(onValidate).toHaveBeenCalledTimes(1);
    expect(onValidate).toHaveBeenCalledWith(value);
    expect(dispatch).toHaveBeenCalledWith(updateError(formName, name, error));
    expect(result).toBe(true);
  });

  test('handleValidate returns false and does not update error if no error', async () => {
    props.onValidate = jest.fn(async () => null);
    const wrapper = mount(<Component {...props} />);
    const { onValidate, children, value } = wrapper.props();
    const { handleValidate } = children.mock.calls[0][0];
    expect(onValidate).toHaveBeenCalledTimes(0);

    const result = await handleValidate();
    expect(onValidate).toHaveBeenCalledTimes(1);
    expect(onValidate).toHaveBeenCalledWith(value);
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
