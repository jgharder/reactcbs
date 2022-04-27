import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignoutBtn  from '../components/signoutBtn';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home Screen</Text>
            <SignoutBtn/>
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