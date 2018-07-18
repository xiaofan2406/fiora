import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Form from '../src/Form';

afterEach(cleanup);

test('works', () => {
  const { container } = render(<Form />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild.innerHTML).toBe('Hello');
});
