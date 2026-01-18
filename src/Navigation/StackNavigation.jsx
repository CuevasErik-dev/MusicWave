import { View, Text } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import AppNavigation from "./AppNavigation";
import MusicScreen from "../screens/MusicScreen";
import AlbumsScreen from "../screens/AlbumsScreen";
import ArtistsScreen from "../screens/ArtistsScreen";
import GeneroScreen from "../screens/GeneroScreen"
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
      <Stack.Screen name="Default" component={AppNavigation} />
      <Stack.Screen name="Musica" component={MusicScreen}/>
      <Stack.Screen name="Albums" component={AlbumsScreen}/>
      <Stack.Screen name="Artistas" component={ArtistsScreen}/>
      <Stack.Screen name="Genero" component={GeneroScreen}/>
      <Stack.Screen name="Favoritos" component={FavoritesScreen}/>
    </Stack.Navigator>
  );
};

export default StackNavigation;
