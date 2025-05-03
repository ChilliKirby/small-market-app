import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScene from './scenes/HomeScene/HomeScene';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScene} />
          </Tab.Navigator>
        </NavigationContainer>
  );
}