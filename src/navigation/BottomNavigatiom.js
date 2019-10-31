/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import Products from '~/pages/Products';
import CamNavigation from '~/navigation/CamNavigation';
import Profile from '~/pages/Profile';
import Colors from '~/constants/Colors';

const CartScreen = () => <Products />;

const ScannerScreen = () => <CamNavigation />;

const ProfileScreen = () => <Profile />;

export default class BottomNavigator extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'cart', title: 'Carrinho', icon: 'shopping-cart'},
      {key: 'scanner', title: 'Escanear', icon: 'scanner'},
      {key: 'profile', title: 'Perfil', icon: 'person'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    cart: CartScreen,
    scanner: ScannerScreen,
    profile: ProfileScreen,
  });

  render() {
    return (
      <BottomNavigation
        style={{
          backgroundColor: 'white',
          
        }}
        barStyle={{
          backgroundColor: 'white',
        }}
        activeColor={Colors.primary}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
