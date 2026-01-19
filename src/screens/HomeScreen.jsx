import { ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../themes/theme";
import AppCard from "../components/ui/AppCard";
import PlayerList from "../components/ui/PlayerList";
import MusicText from "../components/ui/MusicText";
import MusicIcon from "../components/ui/MusicIcon";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <AppCard
          onPress={() => navigation.navigate("Musica")}
          text={"Múscia"}
          icon={"music"}
        />
        <AppCard
          onPress={() => navigation.navigate("Albums")}
          text={"Albums"}
          icon={"album"}
        />
        <AppCard
          onPress={() => navigation.navigate("Artistas")}
          text={"Artistas"}
          icon={"account"}
        />
        <AppCard
          onPress={() => navigation.navigate("Genero")}
          text={"Género"}
          icon={"headphones"}
        />
      </View>

      <View
        style={{
          paddingHorizontal: "5%",
          paddingTop: "2%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <MusicText variant="subheader"> PlayLists </MusicText>
        <MusicIcon />
      </View>

      <ScrollView>
        <View style={{ margin: "5%", justifyContent: "center" }}>
          <PlayerList
            titulo="Favoritos"
            onPress={() => navigation.navigate("Favoritos")}
          />
          <PlayerList
            titulo="Favoritos"
            onPress={() => navigation.navigate("Favoritos")}
          />
          <PlayerList
            titulo="Favoritos"
            onPress={() => navigation.navigate("Favoritos")}
          />
          <PlayerList
            titulo="Favoritos"
            onPress={() => navigation.navigate("Favoritos")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
