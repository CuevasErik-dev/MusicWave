import React from "react";
import { Button } from "react-native-paper";

const AppButton = ({title,nameIcon}) => {
  return (
    <Button
      style={{ width: 130, height: 70, margin:5}}
      icon={nameIcon}
      mode="contained"
      onPress={() => console.log("Pressed")}
    >
      {title}
    </Button>
  );
};

export default AppButton;
