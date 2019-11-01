import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import CameraPermission from '~/pages/cameraPermission';
import Main from '~/pages/Main';
import Products from '~/pages/Products';

const Routes = createAppContainer(
  createSwitchNavigator(
    {CameraPermission, Main, Products},
    {initialRouteName: 'CameraPermission', backBehavior: 'initialRoute'},
  ),
);

export default Routes;
