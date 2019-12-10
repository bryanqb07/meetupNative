import { createBottomTabNavigator } from "react-navigation-tabs";

import { 
    HomeScreen,
    NotificationsScreen,
    ProfileScreen
} from '../screens/';

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Notifications: { screen: NotificationsScreen },
  Profile: { screen: ProfileScreen }
});


export default TabNavigator;