import React from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';

// import BottomNavigatiom from '~/navigation/BottomNavigatiom';
import AuthNavigation from '~/navigation/AuthNavigation';

const App = () => (
  <Provider store={store}>
    <AuthNavigation />
  </Provider>
);

export default App;
