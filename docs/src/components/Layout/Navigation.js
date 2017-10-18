import React from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'configs';
import { theme, variables } from 'styles';

const navLink = css`
  color: ${theme.inverseColor};
  text-decoration: none;
  padding: 0 0.5em;
  display: inline-block;
  line-height: ${variables.Layout.headerHeight}px;
  height: ${variables.Layout.headerHeight}px;
  &:hover {
    background-color: ${theme.bgAccentColor};
  }
`;

const navLinkActive = css`
  border-bottom: 2px solid ${theme.primaryColor};
`;

function Navigation() {
  return (
    <div>
      {Object.values(ROUTES).map(route => (
        <NavLink
          className={navLink}
          activeClassName={navLinkActive}
          key={route.path}
          exact={route.exact}
          to={route.path}
        >
          {route.name}
        </NavLink>
      ))}
    </div>
  );
}

export { Navigation as Component };

export default Navigation;
