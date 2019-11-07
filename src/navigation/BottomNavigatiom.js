/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Products from '~/pages/Products';
import CamNavigation from '~/navigation/CamNavigation';
import Profile from '~/pages/Profile';
import Colors from '~/constants/Colors';

// Redux

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions

import {newScreen} from '~/store/actions/bottomNavigation';

const CartScreen = () => <Products />;

const ScannerScreen = () => <CamNavigation />;

const ProfileScreen = () => <Profile />;

export function BottomNavigator(props) {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'cart', title: 'Carrinho', icon: 'shopping-cart'},
    {key: 'scanner', title: 'Escanear', icon: 'scanner'},
    {key: 'profile', title: 'Perfil', icon: 'person'},
  ]);

  useEffect(() => {
    setIndex(props.screen);
    alert(props.screen);
  }, [props.screen]);

  async function handleIndexChange(s) {
    await props.newScreen(s);
    setIndex(s);
  }

  function renderScene() {
    return BottomNavigation.SceneMap({
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
      onIndexChange={handleIndexChange}
      renderScene={renderScene()}
    />
  );
}

const mapStateToProps = ({bottomNavigation}) => ({
  screen: bottomNavigation.screen,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({newScreen}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BottomNavigator);
