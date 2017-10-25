import React from 'react';
import styled from 'react-emotion';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'configs';
import { theme, variables } from 'styles';

const StyledNavLink = styled(NavLink)`
  color: ${theme.inverseColor};
  text-decoration: none;
  padding: 0 0.5em;
  display: inline-block;
  line-height: ${variables.Layout.headerHeight}px;
  height: ${variables.Layout.headerHeight}px;
  &:hover {
    background-color: ${theme.bgAccentColor};
  }
  &.active {
    border-bottom: 2px solid ${theme.primaryColor};
  }
`;

function Navigation() {
  return (
    <div>
      {Object.values(ROUTES).map(route => (
        <StyledNavLink
          activeClassName="active"
          key={route.path}
          exact={route.exact}
          to={route.path}
        >
          {route.name}
        </StyledNavLink>
      ))}
    </div>
  );
}

export { Navigation as Component };

export default Navigation;
