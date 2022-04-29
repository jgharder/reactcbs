import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignoutBtn  from '../components/SignoutBtn';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home Screen</Text>
            
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