import React, {Component} from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import Colors from './constants/Colors';

// import BottomNavigatiom from '~/navigation/BottomNavigatiom';
import AuthNavigation from '~/navigation/AuthNavigation';

import OneSignal from 'react-native-onesignal';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: '#f1c40f',
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('28d2e156-178e-4e22-868f-ad9403359ab8');
  }

  componentDidMount() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillMount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = data => {
    console.log(data);
  };

  onOpened = notification => {
    console.log(notification);
  };

  onIds = id => {
    console.log(id);
  };

  render() {
    return (
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <AuthNavigation />
        </Provider>
      </PaperProvider>
    );
  }
}
