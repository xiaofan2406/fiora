import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import About from '../About';

it('should match snapshot', () => {
  const component = shallow(<About />);

  expect(toJson(component)).toMatchSnapshot();
});
