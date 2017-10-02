import React from 'react';
import { mount } from 'enzyme';
import Fiora from '../src/Fiora';
import * as actions from '../src/actions';

const formName = 'login';
let store;
let withContext;
beforeEach(() => {
  store = {
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn()
  };
  withContext = component => mount(component, { context: { store } });
});

it('triggers dispatch for creating the form', () => {
  withContext(<Fiora name={formName}>{() => ''}</Fiora>);
  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(actions.createForm(formName));
});

it('sets the correct fiora formName context', () => {
  const wrapper = withContext(<Fiora name={formName}>{() => ''}</Fiora>);
  const childContext = wrapper.instance().getChildContext();
  expect(childContext.fiora).toHaveProperty('formName', formName);
});

it('sets the correct fiora setValidateFunc context', () => {
  const wrapper = withContext(<Fiora name={formName}>{() => ''}</Fiora>);
  const childContext = wrapper.instance().getChildContext();
  expect(wrapper.instance().fieldValidations).toEqual({});

  childContext.fiora.setValidateFunc('username', jest.fn());
  expect(wrapper.instance().fieldValidations).toHaveProperty('username');
});

describe('handleErrorsIfAny(errors)', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = withContext(<Fiora name={formName}>{() => ''}</Fiora>);
  });

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

describe('handleSubmit()', () => {
  it('triggers onValidate and handles its errors');
  it('triggers onSubmit if onValidate returns no error');
  it('handles submit error');
});

describe('render()', () => {
  it('returns children with handleSubmit', () => {
    const children = jest.fn(() => '');
    const wrapper = withContext(<Fiora name={formName}>{children}</Fiora>);
    expect(children).toHaveBeenCalledWith({
      handleSubmit: wrapper.instance().handleSubmit
    });
    expect(wrapper.text()).toEqual('');
  });
});
