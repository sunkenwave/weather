import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');
const selectRoute = (state) => state.get('route');
const selectForms = (state) => state.get('forms');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectData = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('data')
);

const makeSelectSearch = () => createSelector(
  selectForms,
  (globalState) => globalState.get('search')
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectData,
  makeSelectLocation,
  makeSelectSearch,
};
