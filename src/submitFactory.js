/* @flow */
import * as React from 'react';

export default (formName: string, Consumer: ContextConsumer) =>
  class Submit extends React.Component<SubmitProps> {
    render() {
      const { children } = this.props;
      return (
        <Consumer>
          {({ submitForm }) =>
            children({
              handleSubmit: submitForm,
            })
          }
        </Consumer>
      );
    }
  };
