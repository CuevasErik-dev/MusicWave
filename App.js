import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import theme from "./src/themes/theme";
import MyNavbar from "./src/components/ui/MyNavbar";
import { useEffect } from "react";
import StackNavigation from "./src/Navigation/StackNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [load] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Medium": require("./assets/fonts/OpenSans-Medium.ttf"),
  });

  useEffect(() => {
    if (load) {
      SplashScreen.hideAsync();
    }
  }, [load]);

  if (!load) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme} style={styles.container}>
        <NavigationContainer>
          <MyNavbar />
          <StackNavigation />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
