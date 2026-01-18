import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

import { useTheme } from "react-native-paper";

const Tab = createBottomTabNavigator();

const tabBarIcon =
  (IconName) =>
  ({ focused, color }) => (
    <MaterialCommunityIcons
      name={`${IconName}${focused ? "" : "-outline"}`}
      size={30}
      color={color}
    />
  );

function AppNavigation() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
      }}
    >
      <Tab.Screen
        name="Audio"
        component={HomeScreen}
        options={{
          tabBarIcon: tabBarIcon("music-circle"),
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={SettingsScreen}
        options={{
          tabBarIcon: tabBarIcon("cog"),
        }}
      />
    </Tab.Navigator>
  );
}
export default AppNavigation;
