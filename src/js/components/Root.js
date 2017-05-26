import React from 'react';
import { Provider } from 'react-redux';
import AppRoute from './AppRoute';

import configureStore from '../redux/configureStore'

const Root = (props) => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default Root;
