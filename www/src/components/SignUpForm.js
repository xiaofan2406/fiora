import React from 'react';
import createFiora from 'fiora';

const { Form, Field } = createFiora();

const SignUpForm = () => (
  <Form>
    <Field>{({ value }) => <input type="text" value={value} />}</Field>
  </Form>
);

export default SignUpForm;
