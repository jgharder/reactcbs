import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, TextInput } from 'react-native'


const Input = (props: any) => {
const [text, setText] = useState(props.inputValue);

  return (
      <SafeAreaView style={styles.container}>
            <Text>
                {props.title}
            </Text>
            <TextInput value={text} onChangeText={setText} />
            {text=== ""? <Text>{props.error}</Text>: <Text></Text>}
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


export default Input


