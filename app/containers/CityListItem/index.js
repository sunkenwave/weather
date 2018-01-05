/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { makeSelectData } from 'selectors';
import ListItem from 'components/ListItem';

import './list-item.scss';

export class RepoListItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { itemName, cityDesc } = this.props;

    const content = (
      <div className="list-item">
        <h2>{ itemName }</h2>
        <ol className="list-order">
          { cityDesc.map((item) =>
            <li key={`${itemName}-${item.id}`}>{item.description}</li>
          )}
        </ol>
      </div>
    );

    return (
      <ListItem key={`repo-list-item-${itemName}`} {...{ content }} />
    );
  }
}

RepoListItem.propTypes = {
  itemName: PropTypes.string,
  cityDesc: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => createSelector(
  makeSelectData(),
  (data) => ({
    cityDesc: data.get(ownProps.itemName),
  })
);

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(RepoListItem);
