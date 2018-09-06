import React from 'react';

class Button extends React.Component {
  state = {
    count: 1,
  };

  render() {
    const { children } = this.props;
    const { count } = this.state;
    return (
      <button>
        {children} {count}
      </button>
    );
  }
}

export default Button;
