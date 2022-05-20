import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  View,
  Platform,
} from "react-native";
import Input from "../components/Input";
import { useAddEvent } from "../hooks/UseEventData";
import { Event } from "../entities/Event";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSelector } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "CreateEvent"
>;

const CreateEvent = () => {
  const navigation = useNavigation<ScreenNavigationType>();
  const { mutate } = useAddEvent();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date(Date.now()));
  const [endDate, setEndDate] = useState(new Date(Date.now()));
  const token = useSelector((state: any) => state.user.loggedInUser.idToken);

  const onChangeCreateEvent = (setter: any, event: any) => {
    const value = event.nativeEvent.text;
    setter(value);
  };

  const handleUseAddEvent = ({
    title,
    description,
    startDate,
    endDate,
  }: {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
  }) => {
    mutate({ event: new Event(title, description, startDate, endDate), token });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input
        title="Enter event title"
        value={title}
        onChange={(event) => {
          onChangeCreateEvent(setTitle, event);
        }}
        errorMessage="Please enter a title"
      />
      <View style={styles.descriptionInput}>
        <Input
          title="Enter event description"
          value={description}
          onChange={(event) => {
            onChangeCreateEvent(setDescription, event);
          }}
          errorMessage="Please enter a description"
        />
      </View>
      <View style={styles.datePickerContainer}>
        <Text style={styles.datePickerHeadline}>Event start</Text>
        <DateTimePicker
          value={startDate}
          mode={Platform.OS === "ios" ? "datetime" : "date"}
          onChange={(value: any) => {
            setStartDate(value);
          }}
          style={styles.datePicker}
        />
      </View>

      <View style={styles.datePickerContainer}>
        <Text style={styles.datePickerHeadline}>Event end</Text>
        <DateTimePicker
          value={endDate}
          mode={Platform.OS === "ios" ? "datetime" : "date"}
          onChange={(value: any) => {
            setEndDate(value);
          }}
          style={styles.datePicker}
        />
      </View>
      <Pressable
        style={styles.createEventBtn}
        onPress={() => {
          handleUseAddEvent({ title, description, startDate, endDate });
          navigation.navigate("HomeScreen")
        }}
      >
        <Text style={styles.createEventBtnTxt}> Confirm </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  datePickerHeadline: {
    position: "absolute",
    top: 20,
    left: 70,
  },
  datePickerContainer: {
    flex: 1,
    alignItems: "center",
  },
  datePicker: {
    width: 215,
    height: 120,
  },
  descriptionInput: {
    height: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  createEventBtn: {
    marginTop: 20,
    backgroundColor: "#5050A5",
    borderRadius: 5,
    borderColor: "#EEEEEE",
    height: 61,
    width: 360,
    justifyContent: "center",
    marginBottom: 20,
  },
  createEventBtnTxt: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
