import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHappy } from '../store/actions/chat.actions';
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "Screen1"
>

export default function Screen1() {
    const navigation = useNavigation<ScreenNavigationType>()

    const isHappy = useSelector((state: any) => state.chat.isHappy)
    console.log("isHappy", isHappy);
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text>Screen 1</Text>
            <Button title="Go to screen 2" onPress={() => navigation.navigate("Screen2")} />
            <Text>{isHappy.toString()}</Text>
            <Button title="Toggle happy" onPress={() => dispatch(toggleHappy())} />

            <TextInput
             
            
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})