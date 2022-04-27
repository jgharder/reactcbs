import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import SignInStackNavigator from "../components/navigators/SignInStackNavigator";
import Tabnavigator from "./navigators/Tabnavigator";

const index = () => {
  const user = useSelector((state: any) => state.user.loggedInUser);

  return <>{user ? <Tabnavigator /> : <SignInStackNavigator />}</>;
};

export default index;

const styles = StyleSheet.create({});
