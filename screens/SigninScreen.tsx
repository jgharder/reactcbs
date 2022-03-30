import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signin, signup } from "../store/actions/user.actions";
import { StackParamList } from "../typings/navigations";
import { Image } from "react-native";
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
      <Image style={styles.tinyLogo} source={require("../logo.png")} />
      <Text style={styles.text}>Log in </Text>

      <TextInput
        style={styles.inputField}
        value={email}
        placeholder="email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.inputField}
        value={password}
        placeholder="password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Pressable
        style={styles.submitBtn}
        onPress={() => dispatch(signin(email, password))}
      >
        <Text style={styles.btnText}>Log in</Text>
      </Pressable>

      <Button
        title="Don't have an account yet?"
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
    padding: 10,
  },
  tinyLogo: {
    width: 114,
    height: 114,
    margin: 30,
    marginTop: -50
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
  inputField: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    backgroundColor: "#fff",
    height: 70,
  },
  text: {
    color: "#32305D",
    marginBottom: 20,
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: 26,
  },
});
