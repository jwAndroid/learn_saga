/**
 * @format
 */

import React, {memo} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import TestScreen from './src/screens/TestScreen';

const App = () => {
  return (
    <Provider store={store}>
      <TestScreen />
    </Provider>
  );
};

export default memo(App);
