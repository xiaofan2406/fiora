import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Location } from '@reach/router';

const TutorialNavigation = () => (
  <StaticQuery
    query={graphql`
      query PathNameQuery {
        allSitePage(filter: { path: { regex: "/tutorial./" } }) {
          edges {
            node {
              path
            }
          }
        }
      }
    `}
  >
    {({ allSitePage }) => {
      const paths = allSitePage.edges
        .map(edge => {
          console.log(edge.node.path);
          return edge.node.path.split('/')[2];
        })
        .sort();
      console.log(paths);
      return (
        <Location>
          {({ location }) => {
            const currentStep = paths.indexOf(
              location.pathname.split('/')[2] || ''
            );
            const nextStep = paths[currentStep + 1];
            const prevStep = paths[currentStep - 1];

            return (
              <>
                {currentStep ? (
                  <Link to={`/tutorial/${prevStep}`}>Previous</Link>
                ) : null}
                <Link to={`/tutorial/${nextStep}`}>Next</Link>
              </>
            );
          }}
        </Location>
      );
    }}
  </StaticQuery>
);

export default TutorialNavigation;
