import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Contact from '../Contact';

it('should match snapshot', () => {
  const component = shallow(<Contact />);

  expect(toJson(component)).toMatchSnapshot();
});
