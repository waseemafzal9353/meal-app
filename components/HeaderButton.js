import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { HeaderButtons } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const HeaderButton = (props) => {
  return (
    <HeaderButtons
      {...props}
      IconComponent={Ionicons}
      iconSie={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
};

export default HeaderButton;
