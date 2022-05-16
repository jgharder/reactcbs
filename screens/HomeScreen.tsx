import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StackParamList } from '../typings/navigations';

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "HomeScreen"
>;

export default function HomeScreen() {

    const navigation = useNavigation<ScreenNavigationType>();



    return (
        <SafeAreaView style={styles.container}>

            <Pressable
             onPress={() => navigation.navigate("CreateEvent")}
            >
                <Text>Create new event</Text>
            </Pressable>
            
        </SafeAreaView>
        
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