import SignupScreen from "../../screens/SignupScreen";
import SigninScreen from "../../screens/SigninScreen";
import { StackParamList } from "../../typings/navigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


function SignInStackNavigator() {
  const Stack = createNativeStackNavigator<StackParamList>();

    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="signinScreen" component={SigninScreen} />
        <Stack.Screen name="signupScreen" component={SignupScreen} />
      </Stack.Navigator>
    );
  }

  export default SignInStackNavigator;