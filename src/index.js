import React from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';

import BottomNavigatiom from '~/navigation/BottomNavigatiom';
import SwitchNavigator from '~/navigation/routes';

const App = () => (
  <Provider store={store}>
    <SwitchNavigator />
  </Provider>
);

export default App;
