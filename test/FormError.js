import React from 'react';
import { mount } from 'enzyme';
import { Component, mapStateToProps } from '../src/FormError';
import * as selectors from '../src/selectors';
import { DEFAULT_ERROR } from '../src/helpers';

test('Component renders children function with formError', () => {
  const props = { error: 'Invalid', children: jest.fn(() => '') };
  const wrapper = mount(<Component {...props} />);
  const { children, error } = wrapper.props();
  expect(children).toHaveBeenCalledTimes(1);
  expect(children).toHaveBeenCalledWith({ formError: error });
  expect(children).toHaveBeenCalledWith({ formError: error });
});

test('Component has default error prop', () => {
  const wrapper = mount(<Component>{() => ''}</Component>);
  expect(wrapper.props().error).toEqual(DEFAULT_ERROR);
});

test('mapStateToProps returns correct result using selectors', () => {
  const props = { formName: 'login' };
  const error = 'Invalid';
  selectors.getError = jest.fn(() => error);
  expect(selectors.getError).toHaveBeenCalledTimes(0);

  const result = mapStateToProps({}, props);
  expect(selectors.getError).toHaveBeenCalledTimes(1);
  expect(result).toEqual({ error });
});
