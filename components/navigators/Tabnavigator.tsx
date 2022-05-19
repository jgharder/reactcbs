import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatStackNavigator from './ChatStackNavigator';
import HomeNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabnavigator = () => {

  let iconName: string;

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {


        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Chat') {
          iconName = focused ? 'ios-chatbox' : 'ios-chatbox-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'ios-person' : 'ios-person-outline';
        }


        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#32305D',
      tabBarInactiveTintColor: 'gray',
    })}
    >

      <Tab.Screen name="Home" component={HomeNavigator} />
      {/* <Tab.Screen name="Discover" component={DiscoverScreen} /> */}
      <Tab.Screen name="Chat" component={ChatStackNavigator} />
      {/* <Tab.Screen name="Menu" component={MenuScreen} /> */}
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  )
}

export default Tabnavigator

const styles = StyleSheet.create({})