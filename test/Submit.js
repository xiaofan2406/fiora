import React from 'react';
import { mount } from 'enzyme';
import Submit, { Component } from '../src/Submit';

test('Component renders children function with handleSubmit', () => {
  const props = { handleSubmit: () => {}, children: jest.fn(() => '') };
  const wrapper = mount(<Component {...props} />);
  const { children, handleSubmit } = wrapper.props();
  expect(children).toHaveBeenCalledTimes(1);
  expect(children).toHaveBeenCalledWith({ handleSubmit });
});

test('Submit has handleSubmit injected from fiora context', () => {
  const wrapper = mount(<Submit>{() => ''}</Submit>, {
    context: { fiora: { formName: 'login', handleSubmit: () => {} } },
  });
  expect(wrapper.find(Component).props().handleSubmit).toEqual(
    wrapper.instance().context.fiora.handleSubmit
  );
});
