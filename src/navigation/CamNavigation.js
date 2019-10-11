import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import CameraPermission from '~/pages/cameraPermission';
import Main from '~/pages/Main';

const Routes = createAppContainer(
  createSwitchNavigator(
    {CameraPermission, Main},
    {initialRouteName: 'CameraPermission', backBehavior: 'initialRoute'},
  ),
);

export default Routes;
