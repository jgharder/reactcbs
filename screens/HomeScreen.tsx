import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import SignoutBtn  from '../components/SignoutBtn';
import { fetchUser } from '../store/actions/user.actions';

export default function HomeScreen() {

//     const dispatch = useDispatch();

//   const idToken = useSelector((state: RootState) => state.user.idToken);
  
//   useEffect(() => {
//     dispatch(fetchUser(idToken))
//   }, []);

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