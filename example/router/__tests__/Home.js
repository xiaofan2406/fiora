import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from '../Home';

it('should match snapshot', () => {
  const component = shallow(<Home />);

  expect(toJson(component)).toMatchSnapshot();
});
