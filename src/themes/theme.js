import { View, Text } from "react-native";
import React from "react";
import { DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1ebce1",
    background: "#0b1220",
    surface: "#141b2d",
    onSurface: "#F0F2F5",
    onSurfaceVariant: "#9aa4bf",
    surfaceVariant: "#1e2947",
    outline: "#2f3a5a",
    error: "#ff5c5c",
  },
};

export default theme;
