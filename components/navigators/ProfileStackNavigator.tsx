import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfileScreen from "../../screens/EditProfileScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { StackParamList } from "../../typings/navigations";

const Stack = createNativeStackNavigator<StackParamList>();

function ProfileStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}
    >
      <Stack.Screen name="YourProfile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;
