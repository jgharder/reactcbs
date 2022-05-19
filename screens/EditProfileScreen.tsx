import React, { useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, Pressable, View } from "react-native";
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

      <View style={styles.changeContainer}>
        <Input
          title="Change your display name"
          value={displayName}
          onChange={(event) => {
            onChange(setDisplayName, event);
          }}
          errorMessage="Please enter a prefered display name"
        />

        <Pressable
          style={styles.confirmBtn}
          onPress={() => {
            handleUpdateDisplayName(displayName);
            // signOut();
          }}
        >
          <Text style={styles.confirmBtnTxt}>Confirm</Text>
        </Pressable>
      </View>

      <View style={styles.changeContainer}>
        <Input
          title="What is your email?"
          value={email}
          onChange={(event) => {
            onChange(setEmail, event);
          }}
          errorMessage="Please enter your email"
        />
        <Pressable
          style={styles.confirmBtn}
          onPress={() => {
            handleUpdateEmail(email);
            // signOut();
          }}
        >
          <Text style={styles.confirmBtnTxt}>Confirm</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  changeContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  confirmBtn: {
    backgroundColor: "#5050A5",
    borderRadius: 5,
    borderColor: "#EEEEEE",
    height: 61,
    width: 90,
    justifyContent: "center",
    marginBottom: 20,
  },
  confirmBtnTxt: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default EditProfileScreen;
