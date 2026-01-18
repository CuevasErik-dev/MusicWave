import * as React from "react";
import { Appbar } from "react-native-paper";
import MusicText from "./MusicText";
import theme from "../../themes/theme";

const MyNavbar = () => {
  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      <Appbar.Content
        title={
          <MusicText variant="header" style={{ color: theme.colors.text }}>
            WaveMusic
          </MusicText>
        }
      />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default MyNavbar;
