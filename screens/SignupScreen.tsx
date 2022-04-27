import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as SecureStorage from "expo-secure-store";
import { saveSecureStorageUser, signup } from "../store/actions/user.actions";
import { StackParamList } from "../typings/navigations";


type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "signupScreen"
>;

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();

  async function readPersistedUserInfo() {
    const token = await SecureStorage.getItemAsync('idToken');
    const userJson = await SecureStorage.getItemAsync('user');
    let user = null;
    if (userJson) {
        user = JSON.parse(userJson);
    }
    if (user) {
        // then we have a priv. login
        // restore the signup by updating the redux store based on usre and token.
        dispatch(saveSecureStorageUser(user, token!))
    }
}

useEffect(() => {
    readPersistedUserInfo();
}, [])
 

  return (
    <View style={styles.container}>
      <Image source={require("../logo.png")} style={styles.tinyLogo} />
      <Text style={styles.text}>Sign up to get access</Text>
      <TextInput
        style={styles.inputField}
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.inputField}
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.inputField}
        value={repeatPassword}
        placeholder="Repeat password"
        onChangeText={setRepeatPassword}
        secureTextEntry={true}
      />
      <Pressable
        style={styles.submitBtn}
        onPress={() => dispatch(signup(email, password))}
      >
        <Text style={styles.btnText}>Get access</Text>
      </Pressable>

      {password !== repeatPassword && (
        <Text style={styles.passwordMatch}>
          {" "}
          {"   "}
          Passwords don't match{" "}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    color: "#32305D",
    marginBottom: 20,
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: 26,
  },
  tinyLogo: {
    width: 114,
    height: 114,
    marginBottom: 30,
    marginTop: 0,
  },
  inputField: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    backgroundColor: "#fff",
    height: 70,
  },
  submitBtn: {
    marginTop: 20,
    backgroundColor: "#5050A5",
    borderRadius: 5,
    borderColor: "#EEEEEE",
    height: 61,
    width: 360,
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  passwordMatch: {
    color: "#B10024",
    fontWeight: "bold",
    alignSelf: "stretch",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#EEEEEE",
    textAlign: "center",
  },
});
