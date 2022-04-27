import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Chatroom, Status } from "../entities/Chatroom";
import { User } from "../entities/User";
import { addChatroom, fetchChatrooms } from "../store/actions/chat.actions";
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "Chatroom"
>;

export default function ChatroomScreen() {
  const navigation = useNavigation<ScreenNavigationType>();
  const [title, onChangeTitle] = React.useState("");

  const chatrooms: Chatroom[] = useSelector(
    (state: any) => state.chat.chatrooms
  );

  const user: User = useSelector((state: any) => state.user.loggedInUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatrooms());
  }, []);

  const handleAddChatroom = () => {
    const chatroom: Chatroom = new Chatroom(
      { text: "", title: title, status: Status.UNREAD, timestamp: new Date() },
      new Date()
    );
    dispatch(addChatroom(chatroom));
  };

  const renderChatroom = ({ item }: { item: Chatroom }) => (
    <>
      <Pressable
        style={styles.chatroomItemContainer}
        onPress={() => navigation.navigate("MessageScreen")}
      >
        <Text style={styles.chatroomItemTitle}>{item.message.title}</Text>
        <Text style={styles.chatroomItemMessage}>{item.message.text}</Text>
        <Text style={styles.chatroomItemTime}>
          {item.timestamp.getHours()}:{item.timestamp.getMinutes()}</Text>
        <Text style={styles.chatroomItemDate}>
          {item.timestamp.getDate()}/{item.timestamp.getMonth()}/
          {item.timestamp.getFullYear()}
        </Text>
      </Pressable>

      {/* <Pressable
       style={styles.deleteBtn}
        onPress={() => {
          dispatch(deleteChatroom());
        }}
      >
        <Text>Delete Chatroom</Text>
      </Pressable> */}
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chatrooms}
        renderItem={renderChatroom}
        keyExtractor={(item) => item.message.title} // chatroom titles must be unique when I do this.
      />

      <TextInput
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Chatroom name"
      />
      <Button title="Create chatroom" onPress={handleAddChatroom} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatroomItemContainer: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: 337,
    height: 60,
  },
  chatroomItemTitle: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
  },
  chatroomItemMessage: {},
  chatroomItemDate: {
    fontSize: 12,
    padding: 5,
    //position right bottom of the container
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  chatroomItemTime: {
    padding: 5,
    fontSize: 12,
    position: "absolute",
    bottom: 15,
    right: 0,

  },
  

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
function deleteChatroom(): any {
  return {
    type: "DELETE_CHATROOM",
  };
}

