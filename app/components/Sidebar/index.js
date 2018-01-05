import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import cn from 'classnames';
import isNaN from 'lodash/isNaN';

import injectReducer from 'utils/injectReducer';

import { changeSearchInput, loadWeather, loadWeatherError } from 'actions/AppActions';
import { makeSelectSearch, makeSelectData, makeSelectError } from 'selectors';

import reducer from 'reducers/FormReducer';

import './sidebar.scss';

export class Sidebar extends React.PureComponent {

  render() {
    const { search, onChangeSearchInput, onHandlerClickButton, error } = this.props;
    const classNameSplit = cn('input', {
      'input-error': error,
    });

    return (
      <sidebar>
        <form>
          <div>
            <label htmlFor="field-search">
              <span className="label">Search City</span>
              <input
                className={classNameSplit}
                id="field-search"
                type="text"
                placeholder="mumbai"
                value={search}
                onChange={onChangeSearchInput}
              />
            </label>
          </div>
          <div className="error">{ error }</div>
          <button className="field-btn" onClick={onHandlerClickButton}>
            <span>GO!</span>
          </button>
        </form>
      </sidebar>
    );
  }
}

Sidebar.propTypes = {
  onChangeSearchInput: PropTypes.func,
  onHandlerClickButton: PropTypes.func,
  search: PropTypes.string,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  search: makeSelectSearch(),
  result: makeSelectData(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeSearchInput: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(changeSearchInput(evt.target.value));
    },
    loadWeatherInfo: (name) =>
      dispatch(loadWeather(name)),
    loadWeatherError: (name) =>
      dispatch(loadWeatherError(name)),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, stateProps, ownProps, dispatchProps, {
    onHandlerClickButton: (evt) => {
      evt.preventDefault();
      const value = stateProps.search;
      const pattern = /^[\s]+$/;
      if (!value || pattern.test(value) || !isNaN(+value)) {
        dispatchProps.loadWeatherError('please input correct value');
        return;
      }
      if (stateProps.result.get(value.toLowerCase())) {
        dispatchProps.loadWeatherError('please input another city');
        return;
      }
      dispatchProps.loadWeatherInfo(value);
    },
  });
}

const withConnect = connect(mapStateToProps, mapDispatchToProps, mergeProps);

const withReducer = injectReducer({ key: 'forms', reducer });

export default compose(
  withConnect,
  withReducer,
)(Sidebar);
