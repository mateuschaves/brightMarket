import React from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';

import BottomNavigatiom from '~/navigation/BottomNavigatiom';

const App = () => (
  <Provider store={store}>
    <BottomNavigatiom />
  </Provider>
);

export default App;
