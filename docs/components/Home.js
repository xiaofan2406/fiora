/* @flow */
import React from 'react';
import { css } from 'react-emotion';
import { spacing } from 'styles';
import { Anchor } from 'widgets';
import Greet from './Greet';

const cssHome = css`
  & > .title {
    font-size: 48px;
    text-align: center;
    margin-bottom: ${spacing.breath}px;
  }
  & > table {
    margin-top: ${spacing.breath}px;
    & td {
      padding: ${spacing.internal}px;
    }
  }
`;

const Home = () => (
  <div className={cssHome}>
    <div className="title">Hello world!</div>
    <Greet />
    <table>
      <tbody>
        <tr>
          <td>React</td>
          <td>
            <Anchor href="https://reactjs.org/docs/thinking-in-react.html">
              Docs
            </Anchor>
          </td>
          <td>
            <Anchor href="https://github.com/facebook/react/">Github</Anchor>
          </td>
        </tr>
        <tr>
          <td>React Router v4</td>
          <td>
            <Anchor href="https://reacttraining.com/react-router/web/example/basic">
              Docs
            </Anchor>
          </td>
          <td>
            <Anchor href="https://github.com/ReactTraining/react-router">
              Github
            </Anchor>
          </td>
        </tr>
        <tr>
          <td>Redux</td>
          <td>
            <Anchor href="https://redux.js.org/introduction/three-principles">
              Docs
            </Anchor>
          </td>
          <td>
            <Anchor href="https://github.com/reactjs/redux">Github</Anchor>
          </td>
        </tr>
        <tr>
          <td>Mobx</td>
          <td>
            <Anchor href="https://mobx.js.org/best/react-performance.html">
              Docs
            </Anchor>
          </td>
          <td>
            <Anchor href="https://github.com/mobxjs/mobx">Github</Anchor>
          </td>
        </tr>
        <tr>
          <td>Emotion</td>
          <td>
            <Anchor href="https://emotion.sh/docs/composition">Docs</Anchor>
          </td>
          <td>
            <Anchor href="https://github.com/emotion-js/emotion">Github</Anchor>
          </td>
        </tr>
        <tr>
          <td>Create React App</td>
          <td>
            <Anchor href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents">
              Docs
            </Anchor>
          </td>
          <td>
            <Anchor href="https://github.com/facebook/create-react-app/tree/next/packages/react-scripts">
              Github
            </Anchor>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Home;
