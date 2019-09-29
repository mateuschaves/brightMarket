import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Email from '~/pages/Login/email';
import Password from '~/pages/Login/password';
import BottomNavigatiom from '~/navigation/BottomNavigatiom';

const Routes = createAppContainer(
  createSwitchNavigator(
    {Email, Password, BottomNavigatiom},
    {initialRouteName: 'Password'},
  ),
);

export default Routes;
