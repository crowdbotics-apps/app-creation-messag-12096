import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen311461Navigator from '../features/BlankScreen311461/navigator';
import BlankScreen111418Navigator from '../features/BlankScreen111418/navigator';
import BlankScreen011415Navigator from '../features/BlankScreen011415/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen311461: { screen: BlankScreen311461Navigator },
BlankScreen111418: { screen: BlankScreen111418Navigator },
BlankScreen011415: { screen: BlankScreen011415Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
