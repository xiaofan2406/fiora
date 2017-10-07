import React from 'react';
import { shallow, mount } from 'enzyme';
import { Component, mapStateToProps } from '../src/FormError';
import * as selectors from '../src/selectors';
import { DEFAULT_ERROR } from '../src/helpers';

test('FormError component renders children function', () => {
  const props = { error: 'Invalid', children: jest.fn(() => '') };
  expect(props.children).toHaveBeenCalledTimes(0);
  shallow(<Component {...props} />);
  expect(props.children).toHaveBeenCalledTimes(1);
  expect(props.children).toHaveBeenCalledWith({ formError: props.error });
});

test('default error props is set up', () => {
  const wrapper = mount(<Component>{() => ''}</Component>);
  expect(wrapper.prop('error')).toEqual(DEFAULT_ERROR);
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
