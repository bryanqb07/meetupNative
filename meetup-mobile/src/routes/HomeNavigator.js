import { createBottomTabNavigator } from "react-navigation-tabs";
import Colors from '../../constants/Colors';

import { 
    HomeScreen,
    NotificationsScreen,
    ProfileScreen
} from '../screens/';

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Notifications: { screen: NotificationsScreen },
  Profile: { screen: ProfileScreen }
}, {
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    inactiveTintColor: Colors.$blackBlueColor,
    activeTintColor: Colors.$redColor,
    style: {
      backgroundColor: Colors.$whiteColor
    }
  }
});


export default TabNavigator;