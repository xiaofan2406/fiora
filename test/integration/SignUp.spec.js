import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import SignUp from './SignUp';

it('matches snapshot', () => {
  const { container } = render(<SignUp />);
  expect(container.firstChild).toMatchSnapshot();
});

it('has 3 inputs with not initial values', () => {
  const { getByTestId } = render(<SignUp />);
  expect(getByTestId('usernameInput').value).toBe('');
  expect(getByTestId('passwordInput').value).toBe('');
  expect(getByTestId('passwordRepeatInput').value).toBe('');
});

it('updates value when input onChange is triggered', () => {
  const { getByTestId } = render(<SignUp />);

  const usernameInput = getByTestId('usernameInput');
  const passwordInput = getByTestId('passwordInput');
  const passwordRepeatInput = getByTestId('passwordRepeatInput');
  fireEvent.change(usernameInput, { target: { value: 'new username' } });
  fireEvent.change(passwordInput, { target: { value: '1234567' } });
  fireEvent.change(passwordRepeatInput, { target: { value: '1' } });

  expect(usernameInput.value).toBe('new username');
  expect(passwordInput.value).toBe('1234567');
  expect(passwordRepeatInput.value).toBe('1');
});

describe('username input', () => {
  it('does not have any error initially', () => {
    const { getByTestId } = render(<SignUp />);
    try {
      getByTestId('usernameError');
    } catch (err) {
      expect(err.message).toMatch(
        'Unable to find an element by: [data-testid="usernameError"]'
      );
    }
  });

  it('validates username whenever the input is changed', async () => {
    const { getByTestId, getByText } = render(<SignUp />);

    fireEvent.change(getByTestId('usernameInput'), { target: { value: 'n' } });
    await waitForElement(() => getByTestId('usernameError'));

    expect(getByText(/^error:/).innerHTML).toMatch(
      'Username should be as least 5 characters'
    );

    fireEvent.change(getByTestId('usernameInput'), {
      target: { value: 'new username' },
    });

    try {
      getByTestId('usernameError');
    } catch (err) {
      expect(err.message).toMatch(
        'Unable to find an element by: [data-testid="usernameError"]'
      );
    }
  });

  it('validates username whenever the input is changed', async () => {
    const { getByTestId, getByText } = render(<SignUp />);

    fireEvent.change(getByTestId('usernameInput'), { target: { value: 'n' } });
    await waitForElement(() => getByTestId('usernameError'));

    expect(getByText(/^error:/).innerHTML).toMatch(
      'Username should be as least 5 characters'
    );
  });
});
