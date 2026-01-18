import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../themes/theme";
import AppCard from "../components/ui/AppCard";
import PlayerList from "../components/ui/PlayerList";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}>
        <AppCard
          onPress={() => navigation.navigate("Musica")}
          text={"Muscia"}
          icon={"music"}
        />
        <AppCard
          onPress={() => navigation.navigate("Albums")}
          text={"Albums"}
          icon={"disc"}
        />
        <AppCard
          onPress={() => navigation.navigate("Artistas")}
          text={"Artistas"}
          icon={"account"}
        />
        <AppCard
          onPress={() => navigation.navigate("Genero")}
          text={"Genero"}
          icon={"headphones"}
        />
      </View>

      <View style={{ margin: 10 }}>
        <PlayerList
          titulo="Favoritos"
           onPress={() => navigation.navigate("Favoritos")} 
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
