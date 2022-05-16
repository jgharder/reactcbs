import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatStackNavigator from './ChatStackNavigator';
import HomeNavigator from './HomeStackNavigator';
import ProfileScreen from '../../screens/ProfileScreen';
import ProfileStackNavigator from './ProfileStackNavigator';

const Tabnavigator = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        
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