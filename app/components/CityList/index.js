import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import CityListItem from 'containers/CityListItem';

export default function CityList({ result }) {
  if (!result.isEmpty()) {
    return (
      <main>
        <List items={result} component={CityListItem} />
      </main>
    );
  }

  return null;
}

CityList.propTypes = {
  result: PropTypes.any,
};
