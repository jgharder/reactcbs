import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signin, signup } from "../store/actions/user.actions";
import { StackParamList } from "../typings/navigations";
type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "signinScreen"
>;

export default function SigninScreen() {
  const navigation = useNavigation<ScreenNavigationType>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: any) => state.user.loggedInUser);
  const token = useSelector((state: any) => state.user.idToken);

  return (
    <View style={styles.container}>
      <Text>Sign in here </Text>

      <TextInput
        value={email}
        placeholder="email"
        onChangeText={setEmail}
      />
      <TextInput
        
        value={password}
        placeholder="password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        title="Sign in"
        onPress={() => dispatch(signin(email, password))}
      />

      <Button
        title="Go to signup"
        onPress={() => navigation.navigate("signupScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
