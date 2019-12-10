import { createBottomTabNavigator } from "react-navigation-tabs";

import { 
    HomeScreen,
    NotificationsScreen
} from '../screens/';

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Notifications: { screen: NotificationsScreen }
});


export default TabNavigator;