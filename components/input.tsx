import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native'



const Input = ({
  title,
  value,
  onChange,
  errorMessage
}: {
  title: string,
  value: string,
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  errorMessage: string
}) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        {title}
      </Text>
      <TextInput multiline={true} value={value} onChange={onChange} style={styles.textInput} />
      {!value ? <Text style={{ color: "red", paddingBottom: 10, }}>{errorMessage}</Text> : <Text></Text>}
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "#32305D",
    borderWidth: 1,
    width: 300,
    borderRadius: 10,
    textAlign: "center",
    minHeight: 25,
    maxHeight: 200,
  }
});


export default Input


