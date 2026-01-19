import React from "react";
import { Avatar, Card } from "react-native-paper";
import MusicText from "./MusicText";
import theme from "../../themes/theme";

const AppCard = ({ text, icon, onPress }) => {
  return (
    <Card
      style={{
        margin: "2%",
        width: "42%",
        height: "auto",
        alignItems: "center",
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.outline,
        borderWidth: 1,
        borderRadius: 20,
        elevation: 7,
      }}
      onPress={onPress}
    >
      <Card.Content>
        <Avatar.Icon
          icon={icon}
          color={theme.colors.primary} // Color del icono (Cian)
          style={{ backgroundColor: "transparent" }}
          size={50}
        />
        <MusicText variant="base">{text}</MusicText>
      </Card.Content>
    </Card>
  );
};

export default AppCard;
