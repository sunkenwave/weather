import React from 'react';
import PropTypes from 'prop-types';

import './listItem.scss';

export default function ListItem({ content }) {
  return (
    <div className="item">
      {content}
    </div>
  );
}

ListItem.propTypes = {
  content: PropTypes.any,
};
