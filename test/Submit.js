import React from 'react';
import { shallow } from 'enzyme';
import Submit, { Component } from '../src/Submit';

test('Component renders children function with handleSubmit', () => {
  const props = { handleSubmit: () => {}, children: jest.fn(() => '') };
  expect(props.children).toHaveBeenCalledTimes(0);
  shallow(<Component {...props} />);
  expect(props.children).toHaveBeenCalledTimes(1);
  expect(props.children).toHaveBeenCalledWith({
    handleSubmit: props.handleSubmit
  });
});

test('Submit has handleSubmit injected from fiora context', () => {
  const wrapper = shallow(<Submit>{() => ''}</Submit>, {
    context: { fiora: { formName: 'login', handleSubmit: () => {} } }
  });
  expect(wrapper.find(Component).props().handleSubmit).toEqual(
    wrapper.instance().context.fiora.handleSubmit
  );
});
