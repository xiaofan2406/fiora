import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import SignUp from './SignUp';

afterEach(() => {
  jest.restoreAllMocks();
});

it('matches snapshot', () => {
  const { container } = render(<SignUp />);

  expect(container.firstChild).toMatchSnapshot();
});

it('has 3 inputs with not initial values', () => {
  const { getByTestId } = render(<SignUp />);

  expect(getByTestId('usernameInput')).toHaveAttribute('value', '');
  expect(getByTestId('passwordInput')).toHaveAttribute('value', '');
  expect(getByTestId('passwordRepeatInput')).toHaveAttribute('value', '');
});

it('updates value when input onChange is triggered', () => {
  const { getByTestId } = render(<SignUp />);
  const usernameInput = getByTestId('usernameInput');
  const passwordInput = getByTestId('passwordInput');
  const passwordRepeatInput = getByTestId('passwordRepeatInput');

  fireEvent.change(usernameInput, { target: { value: 'new username' } });
  fireEvent.change(passwordInput, { target: { value: '1234567' } });
  fireEvent.change(passwordRepeatInput, { target: { value: '1' } });

  expect(usernameInput).toHaveAttribute('value', 'new username');
  expect(passwordInput).toHaveAttribute('value', '1234567');
  expect(passwordRepeatInput).toHaveAttribute('value', '1');
});

describe('username input', () => {
  it('validates username when the input is changed', async () => {
    const { getByTestId, queryByTestId } = render(<SignUp />);
    const inputEl = getByTestId('usernameInput');

    fireEvent.change(inputEl, { target: { value: 'n' } });
    await wait(() =>
      expect(queryByTestId('usernameError')).toHaveTextContent(
        'Username should be as least 5 characters'
      )
    );

    fireEvent.change(inputEl, { target: { value: 'new username' } });
    await wait(() =>
      expect(queryByTestId('usernameError')).not.toBeInTheDocument()
    );
  });

  it('shows required error only when input is cleared, but not initially', async () => {
    const { getByTestId, queryByTestId } = render(<SignUp />);
    const inputEl = getByTestId('usernameInput');

    expect(queryByTestId('usernameError')).not.toBeInTheDocument();

    fireEvent.change(inputEl, { target: { value: 'fiora2018' } });
    fireEvent.change(inputEl, { target: { value: '' } });
    await wait(() =>
      expect(getByTestId('usernameError')).toHaveTextContent(
        'Username is required'
      )
    );
  });
});

describe('password input', () => {
  it('validates password when the input is blurred', async () => {
    const { getByTestId, queryByTestId } = render(<SignUp />);
    const inputEl = getByTestId('passwordInput');

    fireEvent.blur(inputEl);
    await wait(() =>
      expect(getByTestId('passwordError')).toHaveTextContent(
        'Password is required'
      )
    );

    fireEvent.change(inputEl, { target: { value: '12345' } });
    fireEvent.blur(inputEl);
    await wait(() =>
      expect(getByTestId('passwordError')).toHaveTextContent(
        'Password should be as least 6 characters'
      )
    );

    fireEvent.change(inputEl, { target: { value: '123456789' } });
    fireEvent.blur(inputEl);
    await wait(() =>
      expect(queryByTestId('passwordError')).not.toBeInTheDocument()
    );
  });
});

describe('password repeat input', () => {
  it('validates password when the input is blurred', async () => {
    const { getByTestId } = render(<SignUp />);
    const inputEl = getByTestId('passwordRepeatInput');

    fireEvent.blur(inputEl);
    await wait(() =>
      expect(getByTestId('passwordRepeatError')).toHaveTextContent(
        'Password is required'
      )
    );

    fireEvent.change(inputEl, { target: { value: '12345' } });
    fireEvent.blur(inputEl);
    await wait(() =>
      expect(getByTestId('passwordRepeatError')).toHaveTextContent(
        'Password should be as least 6 characters'
      )
    );
  });

  it('validates the password repeat against password', async () => {
    const { getByTestId, queryByTestId } = render(<SignUp />);
    fireEvent.change(getByTestId('passwordInput'), {
      target: { value: '12345678' },
    });
    const inputEl = getByTestId('passwordRepeatInput');

    fireEvent.change(inputEl, { target: { value: '123456' } });
    fireEvent.blur(inputEl);
    await wait(() =>
      expect(getByTestId('passwordRepeatError')).toHaveTextContent(
        'Passwords do not match'
      )
    );

    fireEvent.change(inputEl, { target: { value: '12345678' } });
    fireEvent.blur(inputEl);
    await wait(() =>
      expect(queryByTestId('passwordRepeatError')).not.toBeInTheDocument()
    );
  });
});

describe('submission', () => {
  it('submits successfully when all data are valid', async () => {
    const { getByTestId } = render(<SignUp />);

    fireEvent.change(getByTestId('usernameInput'), {
      target: { value: 'fiora2018' },
    });
    fireEvent.change(getByTestId('passwordInput'), {
      target: { value: '1234567' },
    });
    fireEvent.change(getByTestId('passwordRepeatInput'), {
      target: { value: '1234567' },
    });
    fireEvent.click(getByTestId('submit'));

    await wait(() =>
      expect(getByTestId('response')).toHaveTextContent('Sign up successful!')
    );
  });

  it('validates the form first', async () => {
    const { getByTestId, queryByTestId } = render(<SignUp />);

    fireEvent.change(getByTestId('usernameInput'), {
      target: { value: 'admin' },
    });
    fireEvent.change(getByTestId('passwordInput'), {
      target: { value: 'password' },
    });
    fireEvent.change(getByTestId('passwordRepeatInput'), {
      target: { value: 'password' },
    });
    fireEvent.click(getByTestId('submit'));

    await wait(() => {
      expect(getByTestId('usernameError')).toHaveTextContent(
        'Username not allowed'
      );
      expect(getByTestId('passwordError')).toHaveTextContent(
        'Password is insecure'
      );
      expect(queryByTestId('response')).not.toBeInTheDocument();
    });
  });
});
