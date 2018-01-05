import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectData, makeSelectError } from 'selectors';
import { cities } from 'mocks';
import CityList from 'components/CityList';
import Sidebar from 'components/Sidebar';

import { loadWeather } from 'actions/AppActions';

import reducer from 'reducers/AppReducer';
import saga from 'saga';

import './home.scss';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (cities) {
      cities.map((cityName) => this.props.loadWeatherInfo(cityName));
    }
  }

  render() {
    const { result } = this.props;
    return (
      <div className="wrap">
        <Sidebar />
        <CityList {...{ result }} />
      </div>
    );
  }
}

HomePage.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  loadWeatherInfo: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadWeatherInfo: (name) =>
      dispatch(loadWeather(name)),
  };
}

const mapStateToProps = createStructuredSelector({
  result: makeSelectData(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
