import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { css } from 'react-emotion';
import { MDXProvider } from '@mdx-js/tag';

import Meta from './Meta';
import Sidebar from './Sidebar';
import PreComponent from './PreComponent';

const cssLayout = css``;

const cssMain = css`
  width: 864px;
  margin-left: 240px;
  padding: 24px 96px 96px 96px;
`;

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteMetaQuery {
          site {
            siteMetadata {
              title
              description
              keywords
            }
          }
        }
      `}
      render={({ site }) => (
        <>
          <Meta metadata={site.siteMetadata} />
          <div className={cssLayout}>
            <Sidebar siteTitle={site.siteMetadata.title} />
            <main className={cssMain}>
              <MDXProvider components={{ pre: PreComponent }}>
                {children}
              </MDXProvider>
            </main>
          </div>
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
