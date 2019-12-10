import { createStackNavigator } from "react-navigation-stack";
import HomeNavigator from './HomeNavigator';
import { createAppContainer } from "react-navigation";

const Navigator = createStackNavigator(
  {
    Home: HomeNavigator
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(Navigator); 

export default AppContainer;
