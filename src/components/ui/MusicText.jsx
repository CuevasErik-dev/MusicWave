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
    fontSize:16,
    color:theme.colors.onSurface
  },
  header: {
    fontFamily:"OpenSans-Bold",
    fontSize: 24,
    color:theme.colors.onSurface
  },
  subheader: {
    fontFamily:"OpenSans-Medium",
    fontSize: 18,
    color:theme.colors.onSurface
  },
});
