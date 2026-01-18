import React from "react";
import { List } from "react-native-paper";
import MusicText from "./MusicText";

const PlayerList = ({ titulo, onPress}) => {
  return (
    <List.Item
      title={<MusicText variant="subheader">{titulo}</MusicText>}
      description={<MusicText variant="base"> 0 cacnciones</MusicText>}
      left={(props) => <List.Icon {...props} icon="folder" />}
      onPress= {onPress}
    />
  );
};

export default PlayerList;
