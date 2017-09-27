import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { selectors } from 'store/greet';
import { Component, mapStateToProps } from '../Greet';

const props = {
  message: 'World',
  setMessage: jest.fn(),
  times: 1,
  setTimes: jest.fn(),
  reset: jest.fn(),
  greeting: 'World'
};

test('snapshot is matching', () => {
  const component = shallow(<Component {...props} />);

  expect(toJson(component)).toMatchSnapshot();
});

test('mapStateToProps', () => {
  const mockState = { greet: {} };
  const getMessageSpy = jest.spyOn(selectors, 'getMessage');
  const getTimesSpy = jest.spyOn(selectors, 'getTimes');
  const getGreetingSpy = jest.spyOn(selectors, 'getGreeting');
  mapStateToProps(mockState);

  expect(getMessageSpy).toHaveBeenLastCalledWith(mockState);
  expect(getTimesSpy).toHaveBeenLastCalledWith(mockState);
  expect(getGreetingSpy).toHaveBeenLastCalledWith(mockState);
});

describe('prop: setMessage', () => {
  let component;
  let spy;

  beforeAll(() => {
    component = mount(<Component {...props} />);
    spy = jest.spyOn(props, 'setMessage');

    expect(spy).toHaveBeenCalledTimes(0);
  });

  test('called on the text input change event', () => {
    component
      .find('input[type="text"]')
      .simulate('change', { target: { value: '2' } });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('called with event value', () => {
    component
      .find('input[type="text"]')
      .simulate('change', { target: { value: 'Hey' } });

    expect(spy).toHaveBeenLastCalledWith('Hey');
  });
});

describe('prop: setTimes', () => {
  let component;
  let spy;

  beforeAll(() => {
    component = mount(<Component {...props} />);
    spy = jest.spyOn(props, 'setTimes');

    expect(spy).toHaveBeenCalledTimes(0);
  });

  test('called on the number input change event', () => {
    component
      .find('input[type="number"]')
      .simulate('change', { target: { value: '2' } });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('called with event value parsed as a number', () => {
    component
      .find('input[type="number"]')
      .simulate('change', { target: { value: '2' } });

    expect(spy).toHaveBeenLastCalledWith(2);
  });

  test('called with 0 when event value cannot be parsed to a number', () => {
    component.find('input[type="number"]').simulate('change', { target: {} });

    expect(spy).toHaveBeenLastCalledWith(0);
  });
});
