import React, { useEffect } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, fetchMessages } from "../store/actions/chat.actions";
import { Message, Status } from "../entities/Message";
import { Chatroom } from "../entities/Chatroom";

  const MessageScreen = (props: any) =>{
  const dispatch = useDispatch();
  const [title, onChangeTitle] = React.useState("");
  const [text, onChangeText] = React.useState("");

  const {id} = props.route.params;

  const chatMessages = useSelector((state: any) => state.chat.chatrooms).find((room:Chatroom) => room.id == id).messages;
  // console.log(id)
  //   console.log(chatMessages);
    console.log(useSelector((state: any) => state.chat.chatrooms).find((room:Chatroom)=>room.id === id))
  
  useEffect(() => {
    dispatch(fetchMessages(id));
  }, []);

  const handleAddMessage = () => {
    const message: Message = new Message(
      title, Status.UNREAD,text, new Date())
    dispatch(addMessage(id, message));
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <>
      <Text>{item.title}</Text>
      <Text>{item.status}</Text>
      <Text>
        {item.timestamp.getDate()}/{item.timestamp.getMonth()}/
        {item.timestamp.getFullYear()}
      </Text>
    </>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
      {chatMessages? <Text>No messages</Text>:  <FlatList
          data={chatMessages}
          renderItem={renderMessage}
          keyExtractor={(item:any) => item.id}
        />}
        <TextInput
          onChangeText={onChangeTitle}
          value={title}
          placeholder="Write new message"
        />
        <Button title="Submit" onPress={handleAddMessage} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MessageScreen;