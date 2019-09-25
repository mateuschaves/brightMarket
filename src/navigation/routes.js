import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import Products from '~/pages/Products';

const Routes = createAppContainer(
  createSwitchNavigator({Main, Products}, {initialRouteName: 'Products'}),
);

export default Routes;
