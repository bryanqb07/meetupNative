import React, { Component } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

class ProfileScreen extends Component {
  // state = {}

  static navigationOptions = {
    tabBarIcon: () => <MaterialIcons name="account-circle" size={25} />
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

export default ProfileScreen;
