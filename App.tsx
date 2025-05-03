import { Montserrat_400Regular, useFonts } from '@expo-google-fonts/montserrat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import HomeScene from './scenes/HomeScene/HomeScene';

const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
  });

  useEffect(() => {
    if(fontsLoaded || error){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if(!fontsLoaded && !error){
    return null;
  };

  return (
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScene} />
          </Tab.Navigator>
        </NavigationContainer>
  );
}