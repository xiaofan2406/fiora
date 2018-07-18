/* @flow */
import * as React from 'react';

type AsyncLoadState = {
  Component: React.ComponentType<any> | null,
};

type AsyncLoadOptions = {
  importer: () => Promise<{ default: React.ComponentType<any> }>,
};

const asyncLoad = ({ importer }: AsyncLoadOptions): React.ComponentType<any> =>
  class AsyncLoad extends React.Component<{}, AsyncLoadState> {
    unmounted: boolean = false;

    state = {
      Component: null,
    };

    componentDidMount() {
      importer()
        .then(({ default: Component }) => {
          if (!this.unmounted) {
            this.setState({ Component });
          }
        })
        .catch(console.error);
    }

    componentWillUnmount() {
      this.unmounted = true;
    }

    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };

export default asyncLoad;
