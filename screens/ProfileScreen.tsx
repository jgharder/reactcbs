import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { StackParamList } from "../typings/navigations";
import SignoutBtn from "../components/SignoutBtn";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../App";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "Profile"
>;

export default function ProfileScreen() {

  const navigation = useNavigation<ScreenNavigationType>();

  const user = useSelector((state: RootState) => state.user.loggedInUser);
  
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileWrapper}>
        <View style={styles.userWrapper}>
          <Text style={styles.displayName}>{user.displayName}</Text>

          <Text style={styles.email}>{user.email}</Text>
        </View>
        <TouchableOpacity
          style={styles.editProfileBtn}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={styles.btnText}>Edit Profile</Text>
        </TouchableOpacity>

        <View style={styles.signOutBtnWrap}>
          <SignoutBtn />
        </View>
      </View>
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
  editProfileBtn: {
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
  userWrapper: {
    flexDirection: "column",
  },
  displayName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#32305D",
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  signOutBtnWrap: {
    position: "absolute",
    bottom: 50,
  },
  profileWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
