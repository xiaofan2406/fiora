import React from 'react';
import { mount } from 'enzyme';
import Field, { Component, initialize, mapState } from '../src/Field';
import {
  createField,
  updateFieldValue,
  startValidatingField,
  finishValidatingField,
  updateFieldError,
} from '../src/actions';
import * as selectors from '../src/selectors';

let props;
beforeEach(() => {
  props = {
    name: 'username',
    initialValue: 'superuser',
    onValidate: jest.fn(),
    value: 'admin',
    error: 'Invalid',
    formName: 'login',
    dispatch: jest.fn(),
    children: jest.fn(() => ''),
  };
});

test('Field (enhanced component) has default onValidate prop resolve null', async () => {
  const wrapper = mount(<Field name="username">{() => ''}</Field>, {
    context: {
      fiora: { formName: 'login', setValidateFunc: () => {} },
      store: {
        subscribe: () => {},
        dispatch: () => {},
        getState: () => ({
          fiora: { forms: {}, fields: { 'username@login': { value: '' } } },
        }),
      },
    },
  });
  const result = await wrapper.props().onValidate();
  expect(result).toEqual(null);
});

describe('children render function', () => {
  test('value and error are passed', () => {
    const wrapper = mount(<Component {...props} />);
    const { children, value, error } = wrapper.props();
    const params = children.mock.calls[0][0];
    expect(children).toHaveBeenCalledTimes(1);
    expect(params.value).toEqual(value);
    expect(params.error).toEqual(error);
  });

  test('handleChange updates the value', () => {
    const wrapper = mount(<Component {...props} />);
    const { dispatch, children, formName, name } = wrapper.props();
    const { handleChange } = children.mock.calls[0][0];
    expect(dispatch).toHaveBeenCalledTimes(0);

    handleChange('superuser');
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(
      updateFieldValue(formName, name, 'superuser')
    );
  });

  test('handleValidate triggers onValidate prop', async () => {
    const wrapper = mount(<Component {...props} />);
    const { onValidate, children, value } = wrapper.props();
    const { handleValidate } = children.mock.calls[0][0];
    expect(onValidate).toHaveBeenCalledTimes(0);

    await handleValidate();
    expect(onValidate).toHaveBeenCalledTimes(1);
    expect(onValidate).toHaveBeenCalledWith(value);
  });

  test('handleValidate updates validations states', async () => {
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

  test('handleValidate returns true and updates error if there is error', async () => {
    props.onValidate = jest.fn(async () => 'invalid');
    const wrapper = mount(<Component {...props} />);
    const {
      dispatch,
      onValidate,
      children,
      formName,
      name,
      value,
    } = wrapper.props();
    const { handleValidate } = children.mock.calls[0][0];
    expect(onValidate).toHaveBeenCalledTimes(0);
    expect(dispatch).toHaveBeenCalledTimes(0);

    const result = await handleValidate();
    expect(onValidate).toHaveBeenCalledTimes(1);
    expect(onValidate).toHaveBeenCalledWith(value);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenCalledWith(
      updateFieldError(formName, name, 'invalid')
    );
    expect(result).toBe(true);
  });

  test('handleValidate returns false and does not update error if no error', async () => {
    props.onValidate = jest.fn(async () => null);
    const wrapper = mount(<Component {...props} />);
    const { dispatch, onValidate, children, value } = wrapper.props();
    const { handleValidate } = children.mock.calls[0][0];
    expect(onValidate).toHaveBeenCalledTimes(0);
    expect(dispatch).toHaveBeenCalledTimes(0);

    const result = await handleValidate();
    expect(onValidate).toHaveBeenCalledTimes(1);
    expect(onValidate).toHaveBeenCalledWith(value);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result).toBe(false);
  });
});

describe('withFiora initialize function', () => {
  const context = {
    store: {
      subscribe: () => {},
      getState: () => {},
    },
    fiora: { formName: 'login' },
  };
  beforeEach(() => {
    context.store.dispatch = jest.fn();
    context.fiora.setValidateFunc = jest.fn();
  });

  it('triggers createField', () => {
    expect(context.store.dispatch).toHaveBeenCalledTimes(0);

    initialize(props, context);
    expect(context.store.dispatch).toHaveBeenCalledTimes(1);
    expect(context.store.dispatch).toHaveBeenCalledWith(
      createField(context.fiora.formName, props.name, props.initialValue)
    );
  });

  it('sets validation function in context', () => {
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
});

test('mapState returns correct result using selectors', () => {
  selectors.getFieldValue = jest.fn();
  selectors.getFieldError = jest.fn();
  selectors.getIsFieldValidating = jest.fn();
  selectors.getIsFieldTouched = jest.fn();
  expect(selectors.getFieldValue).toHaveBeenCalledTimes(0);
  expect(selectors.getFieldError).toHaveBeenCalledTimes(0);
  expect(selectors.getIsFieldValidating).toHaveBeenCalledTimes(0);
  expect(selectors.getIsFieldTouched).toHaveBeenCalledTimes(0);

  mapState({}, props);
  expect(selectors.getFieldValue).toHaveBeenCalledTimes(1);
  expect(selectors.getFieldError).toHaveBeenCalledTimes(1);
  expect(selectors.getIsFieldValidating).toHaveBeenCalledTimes(1);
  expect(selectors.getIsFieldTouched).toHaveBeenCalledTimes(1);
});
