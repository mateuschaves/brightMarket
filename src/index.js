import React from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import Colors from './constants/Colors';

// import BottomNavigatiom from '~/navigation/BottomNavigatiom';
import AuthNavigation from '~/navigation/AuthNavigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: '#f1c40f',
  },
};

const App = () => (
  <PaperProvider theme={theme}>
    <Provider store={store}>
      <AuthNavigation />
    </Provider>
  </PaperProvider>
);

export default App;
