import React from "react";
import HomeScreen from "../../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "../../typings/navigations";
import CreateEvent from "../../screens/CreateEvent";

const Stack = createNativeStackNavigator<StackParamList>();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEvent} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
