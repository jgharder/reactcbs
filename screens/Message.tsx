import React, { useEffect } from "react";
import {
  FlatList,
  Pressable,
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

const MessageScreen = (props: any) => {
  const dispatch = useDispatch();
  const [title, onChangeTitle] = React.useState("");
  const { id } = props.route.params;

  useEffect(() => {
    dispatch(fetchMessages(id));
  }, []);
  const user = useSelector((state: any) => state.user.loggedInUser);
  const chatMessages = useSelector((state: any) => state.chat.chatrooms).find(
    (room: Chatroom) => room.id == id
  ).messages;

  const handleAddMessage = () => {
    const message: Message = new Message(
      title,
      Status.UNREAD,
      new Date(),
      user
    );
    dispatch(addMessage(id, message));
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.messageUser}>{item.User?.displayName}</Text>
      <Text style={styles.textTitle}>{item.title}</Text>
      <Text style={styles.time}>
        {item.timestamp.getHours()}:
        {item.timestamp.getMinutes().toString().padStart(2, "0")}
      </Text>
      <Text style={styles.timeStamp}>
        {item.timestamp.getDate()}/{item.timestamp.getMonth()}/
        {item.timestamp.getFullYear()}
      </Text>
    </View>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.flatList}>
          <FlatList
            data={chatMessages}
            renderItem={renderMessage}
            keyExtractor={(item: any) => item.id}
          />
        </View>
        <View style={styles.textInputAndBtn}>
          <TextInput
            style={styles.messageInput}
            onChangeText={onChangeTitle}
            value={title}
            placeholder="Write new message"
          />
          <Pressable style={styles.messageInputBtn} onPress={handleAddMessage}>
            <Text>Send Message</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 6,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  messageContainer: {
    flex: 1,
    backgroundColor: "#5050A5",
    margin: 10,
    borderRadius: 5,
    minWidth: 100,
    minHeight: 50,
    maxWidth: 300,
    paddingVertical: 20,
  },

  messageUser: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 3,
    marginHorizontal: 10,
    maxWidth: "80%",
    lineHeight: 21,
  },

  textTitle: {
    fontSize: 16,
    marginVertical: 3,
    marginHorizontal: 10,
    maxWidth: "80%",
    lineHeight: 21,
  },

  timeStamp: {
    position: "absolute",
    opacity: 0.5,
    right: 0,
    bottom: 0,
    paddingBottom: 2,
    paddingRight: 4,
    fontSize: 10,
  },

  time: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingRight: 4,
    paddingTop: 2,
    opacity: 0.7,
    fontSize: 12,
  },

  textInputAndBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  messageInput: {
    paddingVertical: 10,
    textAlign: "center",
    borderTopWidth: 1,
    width: "100%",
  },

  messageInputBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "grey",
    marginBottom: 10,
  },
});

export default MessageScreen;
