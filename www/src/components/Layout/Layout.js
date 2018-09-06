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
  margin-left: 240px;
`;

const cssMainSection = css`
  margin: auto;
  width: 1020px;
  padding: 36px 72px 72px 72px;
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
    >
      {({ site }) => (
        <>
          <Meta metadata={site.siteMetadata} />
          <div className={cssLayout}>
            <Sidebar siteTitle={site.siteMetadata.title} />
            <main className={cssMain}>
              <MDXProvider components={{ pre: PreComponent }}>
                <section className={cssMainSection}>{children}</section>
              </MDXProvider>
            </main>
          </div>
        </>
      )}
    </StaticQuery>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
