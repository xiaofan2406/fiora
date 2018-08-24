import React from 'react';
import { render, fireEvent, waitForElement, wait } from 'react-testing-library';
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
  it('validates username when the input is changed', async () => {
    const { getByTestId } = render(<SignUp />);
    const inputEl = getByTestId('usernameInput');

    fireEvent.change(inputEl, { target: { value: 'n' } });
    await waitForElement(() => getByTestId('usernameError'));
    expect(getByTestId('usernameError').innerHTML).toMatch(
      'Username should be as least 5 characters'
    );

    fireEvent.change(inputEl, { target: { value: 'new username' } });
    try {
      getByTestId('usernameError');
    } catch (err) {
      expect(err.message).toMatch(
        'Unable to find an element by: [data-testid="usernameError"]'
      );
    }
  });

  it('shows required error only when input is cleared, but not initially', async () => {
    const { getByTestId } = render(<SignUp />);
    const inputEl = getByTestId('usernameInput');

    try {
      getByTestId('usernameError');
    } catch (err) {
      expect(err.message).toMatch(
        'Unable to find an element by: [data-testid="usernameError"]'
      );
    }

    fireEvent.change(inputEl, { target: { value: 'fiora2018' } });
    fireEvent.change(inputEl, { target: { value: '' } });

    await waitForElement(() => getByTestId('usernameError'));
    expect(getByTestId('usernameError').innerHTML).toMatch(
      'Username is required'
    );
  });
});

describe('password input', () => {
  it('validates password when the input is blured', async () => {
    const { getByTestId } = render(<SignUp />);
    const inputEl = getByTestId('passwordInput');

    fireEvent.blur(inputEl);
    await waitForElement(() => getByTestId('passwordError'));
    expect(getByTestId('passwordError').innerHTML).toMatch(
      'Password is required'
    );

    fireEvent.change(inputEl, { target: { value: '12345' } });
    fireEvent.blur(inputEl);
    await wait(() =>
      expect(getByTestId('passwordError').innerHTML).toMatch(
        'Password should be as least 6 characters'
      )
    );

    fireEvent.change(inputEl, { target: { value: '123456789' } });
    fireEvent.blur(inputEl);
    try {
      getByTestId('passwordError');
    } catch (err) {
      expect(err.message).toMatch(
        'Unable to find an element by: [data-testid="passwordError"]'
      );
    }
  });
});
