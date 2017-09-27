import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Loader from '../Loader';

it('should match snapshot', () => {
  const component = mount(<Loader />);

  expect(toJson(component)).toMatchSnapshot();
});
