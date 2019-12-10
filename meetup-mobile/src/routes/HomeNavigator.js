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
    showLabel: false,
    inactiveTintColor: Colors.$blackBlueColor,
    activeTintColor: Colors.$redColor
  }
});


export default TabNavigator;