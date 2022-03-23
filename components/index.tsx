import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ChatStackNavigator from "../components/navigators/ChatStackNavigator";
import SignInStackNavigator from "../components/navigators/SignInStackNavigator";

const index = () => {
  const user = useSelector((state: any) => state.user.loggedInUser);

  return <> {user ? <ChatStackNavigator /> : <SignInStackNavigator />}</>;
};

export default index;

const styles = StyleSheet.create({});
