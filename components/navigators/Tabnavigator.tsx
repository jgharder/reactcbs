import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInStackNavigator from './SignInStackNavigator';
import ChatStackNavigator from './ChatStackNavigator';
import HomeNavigator from './HomeNavigator';

const Tabnavigator = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        
          <Tab.Screen name="Home" component={HomeNavigator} />
          {/* <Tab.Screen name="Discover" component={DiscoverScreen} /> */}
          <Tab.Screen name="Chat" component={ChatStackNavigator} />
          {/* <Tab.Screen name="Menu" component={MenuScreen} /> */}
        </Tab.Navigator>
  )
}

export default Tabnavigator

const styles = StyleSheet.create({})