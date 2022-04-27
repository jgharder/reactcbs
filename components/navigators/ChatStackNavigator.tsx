import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "../../typings/navigations";
import Screen3 from "../../screens/Screen3";
import ChatroomScreen from "../../screens/Chatroom";
import MessageScreen from "../../screens/Message";

const Stack = createNativeStackNavigator<StackParamList>();

function ChatStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: ""
      }}
    >
      <Stack.Screen name="Chatroom" component={ChatroomScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
}

export default ChatStackNavigator;
