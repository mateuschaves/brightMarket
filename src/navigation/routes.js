import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import Products from '~/pages/Products';
import Email from '~/pages/Login/email';
import BottomNavigatiom from '~/navigation/BottomNavigatiom';

const Routes = createAppContainer(
  createSwitchNavigator({Email, BottomNavigatiom}, {initialRouteName: 'Email'}),
);

export default Routes;
