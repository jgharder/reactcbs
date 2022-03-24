import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Chatroom, Status } from "../entities/Chatroom";
import { User } from "../entities/User";
import { addChatroom} from "../store/actions/chat.actions";
import { signup } from "../store/actions/user.actions";
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "Screen1"
>;

export default function Screen1() {
  const [title, onChangeTitle] = React.useState("");
  
  const isHappy = useSelector((state: any) => state.chat.isHappy); // subscribe to redux store and select attribute (isHappy)
  const chatrooms: Chatroom[] = useSelector(
    (state: any) => state.chat.chatrooms
  );
  const user: User = useSelector((state: any) => state.user.loggedInUser);

  const dispatch = useDispatch();

  const handleAddChatroom = () => {
    const chatroom: Chatroom = new Chatroom(
      title,
      Status.UNREAD,
      "",
      new Date()
    );
    dispatch(addChatroom(chatroom));
  };


  const renderChatroom = ({ item }: { item: any }) => <Text>{item.title}</Text>;

  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      
      <FlatList
        data={chatrooms}
        renderItem={renderChatroom}
        keyExtractor={(item) => item.title} // chatroom titles must be unique when I do this.
      />

      <TextInput
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Chatroom name"
      />
      <Button title="Create chatroom" onPress={handleAddChatroom} />

    </View>
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
