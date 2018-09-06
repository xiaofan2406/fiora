import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function Meta({ metadata }) {
  return (
    <Helmet
      title={metadata.title}
      meta={[
        { name: 'description', content: metadata.description },
        {
          name: 'keywords',
          content: metadata.keywords.join(', '),
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
  );
}

Meta.propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.array.isRequired,
  }).isRequired,
};

export default Meta;
