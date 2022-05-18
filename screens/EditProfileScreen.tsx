import React, { useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import Input from "../components/Input";
import { RootState } from "../App";
import {
  refreshIdToken,
  updateEmail,
  updateDisplayName,
} from "../store/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";

const EditProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.loggedInUser);

  const [email, setEmail] = React.useState(user.email);
  const [displayName, setDisplayName] = React.useState(user.displayName);

  useEffect(() => {
  dispatch(refreshIdToken(email, user.refreshToken, user.displayName));
  }, [])
  

  async function handleUpdateEmail(email: string) {
    console.log("handleUpdateEmail():", email, user);
    dispatch(updateEmail(email, user.refreshToken, user.idToken));
  }

  function handleUpdateDisplayName(displayName: string) {
    console.log("handleUpdateDisplayName():", displayName, user);
    dispatch(updateDisplayName(displayName, user.idToken, user.refreshToken));
  }

  

  function onChange(setter: any, event: any) {
    const value = event.nativeEvent.text;
    setter(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input
        title="Change your display name"
        value={displayName}
        onChange={(event) => {
          onChange(setDisplayName, event);
        }}
        errorMessage="Please enter a prefered display name"
      />

      <Text
        onPress={() => {
          handleUpdateDisplayName(displayName);
          // signOut();
        }}
      >
        Confirm
      </Text>

      <Input
        title="What is your email?"
        value={email}
        onChange={(event) => {
          onChange(setEmail, event);
        }}
        errorMessage="Please enter your email"
      />
      <Text
        onPress={() => {
          handleUpdateEmail(email);
          // signOut();
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
