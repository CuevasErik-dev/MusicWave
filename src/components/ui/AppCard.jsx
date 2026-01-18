import { View, Text } from "react-native";
import React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import MusicText from "./MusicText";

const AppCard = ({ text, icon, onPress }) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon={icon} />;
  return (
    <Card onPress={onPress}>
      <Card.Title left={LeftContent} />
      <Card.Content>
        <MusicText variant="base">{text}</MusicText>
      </Card.Content>
    </Card>
  );
};

export default AppCard;
