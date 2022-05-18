import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData } from 'react-native'



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
            <Text>
                {title}
            </Text>
            <TextInput value={value} onChange={onChange} style={styles.textInput}/>
            {!value ? <Text style={{color: "red"}}>{errorMessage}</Text>: <Text></Text>}
        </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        padding: 10,
      },
      textInput: {
        borderColor: "black",
        padding: 10,
        borderWidth: 1

      }
    });


export default Input


