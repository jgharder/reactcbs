import React from "react";
import { Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import Input from "../components/Input";
import { RootState } from "../App";
import { refreshIdToken, updateEmail } from "../store/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";

const EditProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.loggedInUser);
  const [email, setEmail] = React.useState(user.email);

  
  
  async function handleUpdateEmail(email: string) {
    console.log("handleUpdateEmail():", email, user);

    dispatch(refreshIdToken(email, user.refreshToken));

    // set timeout to wait for 500ms
    setTimeout(() => {
      dispatch(updateEmail(email, user.idToken, user.refreshToken));
      console.log("log after dispatch refrshIdToken():",user)

    }, 500);
  }

  function onChangeEmail(setter: any, event: any) {
    const value = event.nativeEvent.text;
    setter(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input
        title="What is your email?"
        value={email}
        onChange={(event) => {
          onChangeEmail(setEmail, event);
        }}
        errorMessage="Please enter your email"
      />
      <Text
        onPress={() => {
          handleUpdateEmail(email);
        }}
      >
        Confirm
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditProfileScreen;
