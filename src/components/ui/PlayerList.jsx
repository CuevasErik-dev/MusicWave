import React from "react";
import { List } from "react-native-paper";
import MusicText from "./MusicText";
import theme from "../../themes/theme";

const PlayerList = ({ titulo, onPress }) => {
  return (
    <List.Item
      title={<MusicText variant="subheader">{titulo}</MusicText>}
      description={<MusicText variant="base"> 0 cacnciones</MusicText>}
      left={(props) => (
        <List.Icon {...props} icon="folder" color={theme.colors.primary} />
      )}
      onPress={onPress}
      style={{
        margin:"1%",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: theme.colors.outline,
      }}
    />
  );
};

export default PlayerList;
