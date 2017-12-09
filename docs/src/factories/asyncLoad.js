import React from 'react';

const asyncLoad = ({ importer }) =>
  class AsyncLoad extends React.Component {
    state = {
      Component: null,
    };

    componentWillMount() {
      importer()
        .then(({ default: Component }) => {
          this.setState({ Component });
        })
        .catch(console.error);
    }

    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };

export default asyncLoad;
