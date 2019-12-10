import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import AppContainer from './src/routes/Navigator';
import { cachedFonts } from './helpers';
import { AppLoading } from "expo";
import "react-native-gesture-handler";

EStyleSheet.build(Colors);

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async _loadAssetsAsync(){
    const fontAssets = cachedFonts([
      {
        montserrat: require("./assets/fonts/Montserrat-Regular.ttf")
      },
      {
        montserratBold: require("./assets/fonts/Montserrat-Bold.ttf")
      },
      {
        montserratLight: require("./assets/fonts/Montserrat-Light.ttf")
      },
      {
        montserratMed: require("./assets/fonts/Montserrat-Medium.ttf")
      }
    ]);

    await Promise.all(fontAssets);
  }

  render(){
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ fontLoaded: true })}
          onError={console.warn}
        />
      );
    }
    return <AppContainer />;
  }
}