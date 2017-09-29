import React from 'react';
import { mount } from 'enzyme';
import Fiora from '../src/Fiora';
import * as actions from '../src/actions';

const store = {
  dispatch: jest.fn(),
  subscribe: jest.fn(),
  getState: jest.fn()
};
const withContext = component => mount(component, { context: { store } });

it('creates the form during construction', () => {
  const name = 'login';

  const fiora = new Fiora({ name }, { store });
  expect(fiora instanceof Fiora).toBe(true);
  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(actions.createForm(name));
});

it('sets formName in fiora child context', () => {
  const wrapper = withContext(<Fiora name="login">{() => ''}</Fiora>);
  const context = wrapper.instance().getChildContext();
  expect(context).toEqual({ fiora: { formName: 'login' } });
});

describe('handleErrorsIfAny(errors)', () => {
  it('dispatch all the errors');
  it('return true if errors is not empty');
  it('return false if errors is empty');
});

describe('handleSubmit()', () => {
  it('triggers onValidate and handles its errors');
  it('triggers onSubmit if onValidate returns no error');
  it('handles submit error');
});

describe('render()', () => {
  it('returns children with handleSubmit');
});
