import React from 'react';
import PropTypes from 'prop-types';

import './list.scss';

export default function List({ component: ComponentToRender, items }) {
  let content = (<div></div>);

  if (items) {
    content = items.keySeq().map((key) => (
      <ComponentToRender key={`item-${key}`} itemName={key} />
    ));
  } else {
    content = (<ComponentToRender />);
  }

  return (
    <main>
      {content}
    </main>
  );
}

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.object,
};
