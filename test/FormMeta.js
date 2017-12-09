import React from 'react';
import { mount } from 'enzyme';
import FormMeta, { Component } from '../src/FormMeta';
import { getFormFieldKey } from '../src/helpers';

const formName = 'login';

test('Component renders children function with meta', () => {
  const props = {
    error: 'Invalid',
    isValidating: true,
    isSubmitting: false,
    children: jest.fn(() => ''),
  };
  const wrapper = mount(<Component {...props} />);
  const { children } = wrapper.props();
  expect(children).toHaveBeenCalledTimes(1);
  expect(children).toHaveBeenCalledWith({
    error: 'Invalid',
    isValidating: true,
    isSubmitting: false,
  });
});

describe('enhanced FormMeta Component', () => {
  const mountWithState = (props, storeState = {}) =>
    mount(<FormMeta {...props} />, {
      context: {
        fiora: { formName },
        store: {
          subscribe: () => {},
          dispatch: () => {},
          getState: () => ({
            fiora: {
              forms: {
                login: {
                  fields: ['username'],
                  isSubmitting: false,
                  isValidating: true,
                  error: 'invalid',
                  ...storeState,
                },
              },
              fields: {
                [getFormFieldKey(formName, 'username')]: {
                  value: null,
                  error: null,
                  isTouched: false,
                  isValidating: false,
                },
              },
            },
          }),
        },
      },
    });

  beforeEach(() => {
    jest.mock('../src/withFiora', () => ({
      default: C => C,
    }));
  });

  it('injects error store state if subscribed', () => {
    const props = { error: true, children: jest.fn(() => '') };
    const wrapper = mountWithState(props).find(Component);
    expect(wrapper.props().error).toBe('invalid');
    expect(wrapper.props()).not.toHaveProperty('isValidating');
    expect(wrapper.props()).not.toHaveProperty('isSubmitting');
    expect(wrapper.props()).not.toHaveProperty('isTouched');
    expect(wrapper.props()).not.toHaveProperty('hasError');
  });

  it('injects isValidating store state if subscribed', () => {
    const props = { isValidating: true, children: jest.fn(() => '') };
    const wrapper = mountWithState(props).find(Component);
    expect(wrapper.props().isValidating).toBe(true);
    expect(wrapper.props()).not.toHaveProperty('error');
    expect(wrapper.props()).not.toHaveProperty('isSubmitting');
    expect(wrapper.props()).not.toHaveProperty('isTouched');
    expect(wrapper.props()).not.toHaveProperty('hasError');
  });

  it('injects isSubmitting store state if subscribed', () => {
    const props = { isSubmitting: true, children: jest.fn(() => '') };
    const wrapper = mountWithState(props).find(Component);
    expect(wrapper.props().isSubmitting).toBe(false);
    expect(wrapper.props()).not.toHaveProperty('error');
    expect(wrapper.props()).not.toHaveProperty('isValidating');
    expect(wrapper.props()).not.toHaveProperty('isTouched');
    expect(wrapper.props()).not.toHaveProperty('hasError');
  });

  it('injects isTouched computed store state if subscribed', () => {
    const props = { isTouched: true, children: jest.fn(() => '') };
    const wrapper = mountWithState(props).find(Component);
    expect(wrapper.props().isTouched).toBe(false);
    expect(wrapper.props()).not.toHaveProperty('error');
    expect(wrapper.props()).not.toHaveProperty('isValidating');
    expect(wrapper.props()).not.toHaveProperty('isSubmitting');
    expect(wrapper.props()).not.toHaveProperty('hasError');
  });

  it('injects hasError computed store state if subscribed', () => {
    const props = { hasError: true, children: jest.fn(() => '') };
    const wrapper = mountWithState(props).find(Component);
    expect(wrapper.props().hasError).toBe(true);
    expect(wrapper.props()).not.toHaveProperty('error');
    expect(wrapper.props()).not.toHaveProperty('isValidating');
    expect(wrapper.props()).not.toHaveProperty('isSubmitting');
    expect(wrapper.props()).not.toHaveProperty('isTouched');
  });
});
