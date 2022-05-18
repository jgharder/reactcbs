import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { StackParamList } from '../typings/navigations';
import { useGetEvents } from '../hooks/UseEventData';

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "HomeScreen"
>;

export default function HomeScreen() {

    const navigation = useNavigation<ScreenNavigationType>();
    const { data } = useGetEvents();
    


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={data}
            renderItem={({item}) => (
                <Text>{item}</Text>
            )

            }
            keyExtractor={(item: any) => item.title}
          />
            <Pressable
                onPress={() => {navigation.navigate("CreateEvent")
                console.log(data)}}
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