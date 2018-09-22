import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

const cssSidebar = css`
  position: fixed;
  left: 0;
  width: 240px;
  height: 100vh;
  background: #f04242;
  display: flex;
  flex-direction: column;
`;

const cssNav = css`
  flex: 1;
`;

const cssTitle = css`
  margin-top: 12px;
  font-size: 54px;
  color: #fff;
  text-align: center;
  cursor: default;
`;

const cssLink = css`
  color: #fff;
  display: block;
  font-size: 18px;
  font-weight: 200;
  padding: 4px 24px;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.24);
  }
`;

const activeLinkStyle = {
  backgroundColor: ' rgba(255, 255, 255, 0.24)',
};

function Sidebar({ siteTitle }) {
  return (
    <div className={cssSidebar}>
      <div className={cssNav}>
        <h1 className={cssTitle}>{siteTitle}</h1>
        <Link to="/" className={cssLink} activeStyle={activeLinkStyle}>
          Get Started
        </Link>
        <Link to="/tutorial" className={cssLink} activeStyle={activeLinkStyle}>
          Tutorial
        </Link>
        <Link to="/api" className={cssLink} activeStyle={activeLinkStyle}>
          API
        </Link>
      </div>
      <div>footer</div>
    </div>
  );
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Sidebar;
