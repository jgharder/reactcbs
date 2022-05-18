import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useQuery } from "react-query";
import { StackParamList } from "../typings/navigations";
import { useGetEvents } from "../hooks/UseEventData";
import { Event } from "../entities/Event";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "HomeScreen"
>;

export default function HomeScreen() {
  const navigation = useNavigation<ScreenNavigationType>();
  const {data}  = useGetEvents();

  const renderEvents = ({ item }: { item: Event }) => (
    <View style={styles.eventContainer}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.startDate}</Text>
      <Text>{item.endDate}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderEvents}
        keyExtractor={(item: any) => item.id}
        style={styles.eventList}
      />
      <Pressable
        onPress={() => {
          navigation.navigate("CreateEvent");
        }}
      >
        <Text>Create new event</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
    eventContainer: {

    flex: 1,
    width:  300,
    margin: 10,
    padding: 10,
    backgroundColor: "#5050A5",
    borderRadius: 5,
    },
    textTitle: {
    },
    eventList: {

    }
});
