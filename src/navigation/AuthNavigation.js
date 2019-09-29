import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Email from '~/pages/Login/email';
import Password from '~/pages/Login/password';
import Name from '~/pages/Login/name';
import BottomNavigatiom from '~/navigation/BottomNavigatiom';

const Routes = createAppContainer(
  createSwitchNavigator(
    {Email, Password, Name, BottomNavigatiom},
    {initialRouteName: 'Name'},
  ),
);

export default Routes;
