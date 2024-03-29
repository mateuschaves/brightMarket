import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Email from '~/pages/Login/email';
import Password from '~/pages/Login/password';
import Name from '~/pages/Login/name';
import Home from '~/pages/Login/home';
import Planning from '~/pages/Planning';
import CamNavigation from '~/navigation/CamNavigation';
import BottomNavigatiom from '~/navigation/BottomNavigatiom';
import ProductCard from '~/components/ProductCard';
import RegisterProduct from '~/pages/RegisterProduct';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Email,
      Password,
      Name,
      Home,
      Planning,
      CamNavigation,
      BottomNavigatiom,
      ProductCard,
      RegisterProduct
    },
    { initialRouteName: 'BottomNavigatiom', backBehavior: 'initialRoute' },
  ),
);

export default Routes;
