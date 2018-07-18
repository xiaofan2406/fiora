/* @flow */
import React from 'react';
import { css } from 'react-emotion';
import { Loader } from 'widgets';

const cssContact = css`
  text-align: center;
`;

const Contact = () => (
  <div className={cssContact}>
    <Loader size={120} />
  </div>
);

export default Contact;
