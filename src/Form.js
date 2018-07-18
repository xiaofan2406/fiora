/* @flow */
import * as React from 'react';

type FioraProps = {
  children: React.Node,
};

class Fiora extends React.Component<FioraProps> {
  componentDidMount() {}

  render() {
    const { children } = this.props;
    return <form>{children}</form>;
  }
}

export default Fiora;
