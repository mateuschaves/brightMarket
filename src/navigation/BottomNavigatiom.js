/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
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

class BottomNavigator extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'cart', title: 'Carrinho', icon: 'shopping-cart'},
      {key: 'scanner', title: 'Escanear', icon: 'scanner'},
      {key: 'profile', title: 'Perfil', icon: 'person'},
    ],
  };

  _handleIndexChange = async index => {
    await this.props.newScreen(index);
    this.setState({index: this.props.screen});
  };

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

const mapStateToProps = ({bottomNavigation}) => ({
  screen: bottomNavigation.screen,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({newScreen}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BottomNavigator);
