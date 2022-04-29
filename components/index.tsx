import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import SignInStackNavigator from "./navigators/SignInStackNavigator";
import Tabnavigator from "./navigators/Tabnavigator";

const Index = () => {
  const user = useSelector((state: any) => state.user.loggedInUser);

  return <>{user ? <Tabnavigator /> : <SignInStackNavigator />}</>;
};

export default Index;

const styles = StyleSheet.create({});
