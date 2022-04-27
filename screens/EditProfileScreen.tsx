import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';
import Input from '../components/input';
import { RootState } from '../App';

function EditProfileScreen() {
    const user = useSelector((state: RootState) => state.user.loggedInUser);

  return (
      <SafeAreaView style={styles.container}>
            <Input title="What is your email?" inputValue={user.email}/>
            <Input title= "hi again"/>

      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    });




export default EditProfileScreen