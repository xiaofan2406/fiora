import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Component } from '../Brand';

it('should match snapshot', () => {
  const props = { classes: {} };
  const component = shallow(<Component {...props} />);

  expect(toJson(component)).toMatchSnapshot();
});

it('should not update on props changes', () => {
  const renderSpy = jest.spyOn(Component.prototype, 'render');
  const props = { classes: {} };
  const component = shallow(<Component {...props} />);

  expect(renderSpy).toHaveBeenCalledTimes(1);

  component.setProps({
    classes: { someClass: {} }
  });

  expect(renderSpy).toHaveBeenCalledTimes(1);
});
