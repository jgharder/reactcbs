import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "../../typings/navigations";
import SignupScreen from "../../screens/SignupScreen";
import SigninScreen from "../../screens/SigninScreen";
import Screen2 from "../../screens/Screen2";
import Screen3 from "../../screens/Screen3";
import Screen1 from "../../screens/Chatroom";


const Stack = createNativeStackNavigator<StackParamList>();

function ChatStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
}

export default ChatStackNavigator;