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
import { Chatroom } from "../entities/Chatroom";
import { User } from "../entities/User";
import { addChatroom, fetchChatrooms } from "../store/actions/chat.actions";
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "Chatroom"
>;

const ChatroomScreen = (props: any) => {
  const navigation = useNavigation<ScreenNavigationType>();
  const [title, onChangeTitle] = React.useState("");

  const chat = useSelector(
    (state: any) => state.chat
  );

  const chatrooms: Chatroom[] = chat.chatrooms;

  const user: User = useSelector((state: any) => state.user.loggedInUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatrooms());
  }, []);

  const handleAddChatroom = () => {
    const chatroom: Chatroom = new Chatroom(title, [], new Date());

    dispatch(addChatroom(chatroom));
  };

  const renderChatroom = ({ item }: { item: Chatroom }) => (
    <>
      <Pressable
        style={styles.chatroomItemContainer}
        onPress={() => {
          {
            navigation.navigate("MessageScreen", { id: item.id })
          }
        }}
      >
        <Text style={styles.chatroomItemTitle}>{item.title}</Text>
        <Text style={styles.chatroomItemTime}>
          {item.timestamp.getHours()}:{item.timestamp.getMinutes().toString().padStart(2, '0')}
        </Text>
        <Text style={styles.chatroomItemDate}>
          {item.timestamp.getDate()}/{item.timestamp.getMonth()}/
          {item.timestamp.getFullYear()}
        </Text>
      </Pressable>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chatrooms}
        renderItem={renderChatroom}
        keyExtractor={(item: any) => item.title} // chatroom titles must be unique when I do this.
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Chatroom name"
      />
      <Pressable style={styles.createChatroomBtn} onPress={handleAddChatroom}>
        <Text style={styles.createChatroomBtnTxt}>Create chatroom</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  createChatroomBtnTxt: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  createChatroomBtn: {
    marginTop: 20,
    backgroundColor: "#5050A5",
    borderRadius: 5,
    borderColor: "#EEEEEE",
    height: 61,
    width: 360,
    justifyContent: "center",
    marginBottom: 20,
  },
  input: {
    borderColor: "#32305D",
    borderWidth: 1,
    width: 300,
    borderRadius: 10,
    textAlign: "center",
    minHeight: 25,
    maxHeight: 200,
  },
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


export default ChatroomScreen;
