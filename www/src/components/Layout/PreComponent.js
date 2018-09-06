import React from 'react';
import PropTypes from 'prop-types';
import createFiora from 'fiora';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

class PreComponent extends React.Component {
  instance = createFiora();

  render() {
    const { children } = this.props;
    const showInteractive =
      children.props.props &&
      !children.props.props.className.endsWith('-static');

    return (
      <LiveProvider
        code={children.props.children}
        scope={this.instance}
        mountStylesheet={false}
      >
        <LiveEditor contentEditable={showInteractive} />
        {showInteractive ? <LiveError /> : null}
        {showInteractive ? <LivePreview /> : null}
      </LiveProvider>
    );
  }
}

PreComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreComponent;
