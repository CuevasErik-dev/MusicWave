import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";
import theme from "../../themes/theme";

const MusicText = ({ style, children,variant = "", ...props }) => {
  return (
    <Text style={[styles.base, styles[variant], style]} {...props}>
      {children}
    </Text>
  );
};

export default MusicText;

const styles = StyleSheet.create({
  base: {
    fontFamily: "OpenSans-regular", 
    color:theme.colors.text
  },
  header: {
    fontFamily:"OpenSans-Bold",
    fontSize: 24,
  },
  subheader: {
    fontFamily:"OpenSans-Medium",
    fontSize: 18
  },
});
