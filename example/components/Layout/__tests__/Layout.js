import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Component } from '../Layout';

it('should match snapshot', () => {
  const props = { classes: {}, children: '' };
  const component = shallow(<Component {...props} />);

  expect(toJson(component)).toMatchSnapshot();
});

it('should render children', () => {
  const Child = () => <div>child</div>;
  const props = { classes: {}, children: <Child /> };
  const component = shallow(<Component {...props} />);

  expect(toJson(component)).toMatchSnapshot();
  expect(component.find(Child).length).toBe(1);
});
