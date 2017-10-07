import React from 'react';
import { shallow } from 'enzyme';
import withFiora from '../src/withFiora';

const Wrapped = () => <div>wrapped</div>;
const context = {
  store: {
    dispatch: () => {},
    subscribe: () => {},
    getState: () => {}
  },
  fiora: { formName: 'login' }
};

it('triggers additional initialize function when given', () => {
  const options = { initialize: jest.fn() };
  const Component = withFiora(options)(Wrapped);
  const props = { isPassed: true };
  shallow(<Component {...props} />, { context });
  expect(options.initialize).toHaveBeenCalledTimes(1);
  expect(options.initialize).toHaveBeenCalledWith(props, context);
});

it('sets the correct displayName', () => {
  let Component = withFiora()(Wrapped);
  expect(Component.displayName).toBe('withFiora(Wrapped)');

  Wrapped.displayName = 'BetterWrapped';
  Component = withFiora()(Wrapped);
  expect(Component.displayName).toBe('withFiora(BetterWrapped)');
});

it('injects formName prop by default', () => {
  const Component = withFiora()(Wrapped);
  const wrapper = shallow(<Component />, { context });
  expect(wrapper.prop('formName')).toBe('login');
});

it('passes along all props to the wrapped component', () => {
  const Component = withFiora()(Wrapped);
  const props = { isPassed: true, name: 'username' };

  const wrapper = shallow(<Component {...props} />, { context });
  expect(wrapper.find(Wrapped).prop('isPassed')).toBe(true);
  expect(wrapper.find(Wrapped).prop('name')).toBe('username');
});
