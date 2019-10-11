/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Products from '~/pages/Products';
import Scanner from '~/pages/Main';
import Profile from '~/pages/Profile';

import Colors from '~/constants/Colors';

const CartScreen = () => <Products />;

const ScannerScreen = () => <Scanner />;

const ProfileScreen = () => <Profile />;

export default function BottomNavigator() {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'cart', title: 'Carrinho', icon: 'shopping-cart'},
    {key: 'scanner', title: 'Escanear', icon: 'scanner'},
    {key: 'profile', title: 'Perfil', icon: 'person'},
  ]);

  function handleIndexChange(index) {
    setIndex(index);
  }

  function renderScene() {
    BottomNavigation.SceneMap({
      cart: CartScreen,
      scanner: ScannerScreen,
      profile: ProfileScreen,
    });
  }

  return (
    <BottomNavigation
      style={{
        backgroundColor: 'white',
      }}
      barStyle={{
        backgroundColor: 'white',
      }}
      activeColor={Colors.primary}
      navigationState={{index, routes}}
      onIndexChange={handleIndexChange()}
      renderScene={renderScene()}
    />
  );
}
