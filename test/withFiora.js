import React from 'react';
import { shallow } from 'enzyme';
import withFiora from '../src/withFiora';

const formName = 'login';
let Wrapped;
let context;

beforeEach(() => {
  Wrapped = () => <div>wrapped</div>;
  context = {
    store: {
      dispatch: () => {},
      subscribe: () => {},
      getState: () => {}
    },
    fiora: { formName, handleSubmit: () => {} }
  };
});

it('triggers the initialize function when given', () => {
  const props = {};
  const options = { initialize: jest.fn() };
  const Component = withFiora(options)(Wrapped);
  shallow(<Component {...props} />, { context });
  expect(options.initialize).toHaveBeenCalledTimes(1);
  expect(options.initialize).toHaveBeenCalledWith(props, context);
});

it('sets the correct displayName', () => {
  expect(withFiora()(Wrapped).displayName).toBe('withFiora(Wrapped)');

  Wrapped.displayName = 'BetterWrapped';
  expect(withFiora()(Wrapped).displayName).toBe('withFiora(BetterWrapped)');
});

it('injects formName prop by default', () => {
  const Component = withFiora()(Wrapped);
  const wrapper = shallow(<Component />, { context });
  expect(wrapper.props().formName).toBe(formName);
});

it('injects handleSubmit prop if withHandleSubmit is true', () => {
  const Component = withFiora({ withHandleSubmit: true })(Wrapped);
  const wrapper = shallow(<Component />, { context });
  expect(wrapper.props().handleSubmit).toEqual(context.fiora.handleSubmit);
});

it('passes along all props to the wrapped component', () => {
  const Component = withFiora()(Wrapped);
  const wrapper = shallow(<Component name="username" isValid />, { context });
  expect(wrapper.find(Wrapped).prop('isValid')).toBe(true);
  expect(wrapper.find(Wrapped).prop('name')).toBe('username');
});
