import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, fetchMessages } from "../store/actions/messages.actions";
import { Message, Status } from "../entities/Message";

export default function MessageSreen() {
  const dispatch = useDispatch();
const [title, onChangeTitle] = React.useState("title");
  const [text, onChangeText] = React.useState("text");
  const messages = useSelector((state: any) => state.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  const handleAddMessage = () => {
    const message: Message = new Message(
      title,
      Status.UNREAD,
      text,
      new Date()
    );
    dispatch(addMessage(message));
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <>
      <Text>{item.title}</Text>
      <Text>{item.text}</Text>
      <Text>
        {item.timestamp.getDate()}/{item.timestamp.getMonth()}/
        {item.timestamp.getFullYear()}
      </Text>
    </>
  );

  return (
    <>
      <View style={styles.container}>
        {/* render messages */}
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.title} // chatroom titles must be unique when I do this.
        />
      </View>
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
