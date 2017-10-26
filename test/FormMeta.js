import React from 'react';
import { mount } from 'enzyme';
import FormMeta, { Component, mapStateToProps } from '../src/FormMeta';
import * as selectors from '../src/selectors';

test('Component renders children function with meta', () => {
  const props = {
    error: 'Invalid',
    isValidating: true,
    isSubmitting: false,
    children: jest.fn(() => '')
  };
  const wrapper = mount(<Component {...props} />);
  const { children } = wrapper.props();
  expect(children).toHaveBeenCalledTimes(1);
  expect(children).toHaveBeenCalledWith({
    error: 'Invalid',
    isValidating: true,
    isSubmitting: false
  });
});

// test('Component has default error prop', () => {
//   const wrapper = mount(<Component>{() => ''}</Component>);
//   expect(wrapper.props().error).toEqual(DEFAULT_ERROR);
// });
const formName = 'login';
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
                  isSubmitting: false,
                  isValidating: true,
                  error: 'invalid',
                  ...storeState
                }
              }
            }
          })
        }
      }
    });

  beforeEach(() => {
    jest.mock('../src/withFiora', () => ({
      default: C => C
    }));
  });

  it('injects error store state if subscribed', () => {
    const props = { error: true, children: jest.fn(() => '') };
    const wrapper = mountWithState(props).find(Component);
    expect(wrapper.props().error).toBe('invalid');
    expect(wrapper.props()).not.toHaveProperty('isValidating');
    expect(wrapper.props()).not.toHaveProperty('isSubmitting');
  });

  it('injects isValidating store state if subscribed', () => {
    const props = { isValidating: true, children: jest.fn(() => '') };
    const wrapper = mountWithState(props).find(Component);
    expect(wrapper.props().isValidating).toBe(true);
    expect(wrapper.props()).not.toHaveProperty('error');
    expect(wrapper.props()).not.toHaveProperty('isSubmitting');
  });

  it('injects isSubmitting store state if subscribed', () => {
    const props = { isSubmitting: true, children: jest.fn(() => '') };
    const wrapper = mountWithState(props).find(Component);
    expect(wrapper.props().isSubmitting).toBe(false);
    expect(wrapper.props()).not.toHaveProperty('error');
    expect(wrapper.props()).not.toHaveProperty('isValidating');
  });
});

// test('mapStateToProps returns isValidating statue if isValidating is true', () => {
//   selectors.getFormMeta = jest.fn(() => 'invalid');
//   expect(selectors.getFormMeta).toHaveBeenCalledTimes(0);

//   const result = mapStateToProps({}, { formName: 'login' });
//   expect(selectors.getFormMeta).toHaveBeenCalledTimes(1);
//   expect(result).toEqual({ error: 'invalid' });
// });
