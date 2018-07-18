/* @flow */
import * as React from 'react';

type AnchorProps = {
  href: string,
  children: React.Node,
};

const Anchor = ({ href, children, ...rest }: AnchorProps) => (
  <a rel="noopener noreferrer" target="_blank" href={href} {...rest}>
    {children}
  </a>
);

export default Anchor;
