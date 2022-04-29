import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, SafeAreaView, Button, StyleSheet } from "react-native";
import { StackParamList } from "../typings/navigations";
import  SignoutBtn from "../components/SignoutBtn";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "Profile"
>;

export default function ProfileScreen() {
  const navigation = useNavigation<ScreenNavigationType>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Edit profile"
        onPress={() => navigation.navigate("EditProfile")}
      ></Button>
      <SignoutBtn/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
