/* @flow */
import * as React from 'react';

type FioraProps = {
  name: string,
  children: React.Node,
};

const isFragment = (a: any) => typeof a === 'object';

class Fiora extends React.Component<FioraProps> {
  componentDidMount() {}

  render() {
    const { children, name } = this.props;
    console.log('render Fiora');

    return (
      <form>
        {React.Children.map(
          children,
          child =>
            isFragment(child) ? (
              <>
                {React.Children.map(child.props.children, nested =>
                  React.cloneElement(nested, { formName: name })
                )}
              </>
            ) : (
              React.cloneElement(child, { formName: name })
            )
        )}
      </form>
    );
  }
}

export default Fiora;
