import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { signout } from '../store/actions/user.actions';



export default function signoutBtn() {
  const dispatch = useDispatch();

  return (

    <Pressable
        style={styles.submitBtn}
        onPress={() => dispatch(signout())}
      ><Text
      style={styles.btnText}>Sign out</Text>
      </Pressable>
  )
}


const styles = StyleSheet.create({
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
submitBtn: {
    marginTop: 20,
    backgroundColor: "#5050A5",
    borderRadius: 5,
    borderColor: "#EEEEEE",
    height: 61,
    width: 360,
    justifyContent: "center",
  }
});

