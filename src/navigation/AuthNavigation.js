import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Email from '~/pages/Login/email';
import Password from '~/pages/Login/password';
import Name from '~/pages/Login/name';
import Home from '~/pages/Login/home';
import Planning from '~/pages/Planning';
import BottomNavigatiom from '~/navigation/BottomNavigatiom';

const Routes = createAppContainer(
  createSwitchNavigator(
    {Email, Password, Name, Home, Planning, BottomNavigatiom},
    {initialRouteName: 'BottomNavigatiom', backBehavior: 'initialRoute'},
  ),
);

export default Routes;
