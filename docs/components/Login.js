import * as React from 'react';

import { Form, Field } from 'fiora';

class Login extends React.Component {
  state = {
    text: 'dd',
  };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState(prev => ({
              text: `${prev.text}dd`,
            }));
          }}
        >
          {this.state.text}
        </button>
        <Form name="login">
          <Field />
          <>
            <Field />
          </>
        </Form>
      </>
    );
  }
}

export default Login;
