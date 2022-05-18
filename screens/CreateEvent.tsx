import React, { useState } from 'react'
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  View,
} from "react-native";
import Input from '../components/Input'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAddEvent } from '../hooks/UseEventData';
import { Event } from '../entities/Event';

const CreateEvent = () => {

  const { mutate } = useAddEvent();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  const onChangeCreateEvent = (setter: any, event: any) => {
    const value = event.nativeEvent.text;
    setter(value);
  }

  const handleUseAddEvent = ({ title, description, startDate, endDate }: { title: string, description: string, startDate: string, endDate: string }) => {
    mutate({ event: new Event(title, description, startDate, endDate) });
  }





  return (
    <SafeAreaView>
      <Input
        title="Enter event title"
        value={title}
        onChange={(event) => {
          onChangeCreateEvent(setTitle, event);
        }}
        errorMessage="Please enter a title"
      />

      <Input
        title="Enter event description"
        value={description}
        onChange={(event) => {
          onChangeCreateEvent(setDescription, event);
        }}
        errorMessage="Please enter a description"
      />
      <Input
        title="Enter event description"
        value={startDate}
        onChange={(event) => {
          onChangeCreateEvent(setStartDate, event);
        }}
        errorMessage="Please enter a description"
      />
      <Input
        title="Enter event description"
        value={endDate}
        onChange={(event) => {
          onChangeCreateEvent(setEndDate, event);
        }}
        errorMessage="Please enter a description"
      />
      {/* <DateTimePicker
        mode="date"
        value={startDate}
        onChange={(event: any) => { setStartDate(event.nativeEvent.timestamp) }}
      />

      <DateTimePicker
        mode="date"
        value={endDate}
        onChange={(event: any) => { setEndDate(event.nativeEvent.timestamp) }}
      /> */}

      <Text
        onPress={() => {

          handleUseAddEvent({ title, description, startDate, endDate })

        }}
      >
        Confirm
      </Text>

    </SafeAreaView>
  )
}

export default CreateEvent;

const styles = StyleSheet.create({
  datePickerStyle: {
    width: 230,
  }
});
