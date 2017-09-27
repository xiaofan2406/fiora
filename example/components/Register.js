import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/register';

class Register extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
  };
  handleUsernameChange = event => {
    this.props.setUsername(event.target.value);
  };
  handlePasswordChange = event => {
    this.props.setPassword(event.target.value);
  };

  handleSubmit = () => {
    const { username, password } = this.props;
    if (username && password) {
      console.log('good job');
    } else {
      console.log('error');
    }
  };

  render() {
    const { username, password } = this.props;
    return (
      <div>
        <form>
          <input
            name="username"
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
          />
          <button type="button" onClick={this.props.reset}>
            Clear
          </button>
          <button type="button" onClick={this.handleSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  username: selectors.getUsername(state),
  password: selectors.getPassword(state)
});

export default connect(mapStateToProps, {
  reset: actions.reset,
  setPassword: actions.setPassword,
  setUsername: actions.setUsername
})(Register);
