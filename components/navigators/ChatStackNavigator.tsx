import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "../../typings/navigations";
import ChatroomScreen from "../../screens/Chatroom";
import MessageScreen from "../../screens/Message";

const Stack = createNativeStackNavigator<StackParamList>();

function ChatStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}
    >
      <Stack.Screen name="Chatroom" component={ChatroomScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
}

export default ChatStackNavigator;
