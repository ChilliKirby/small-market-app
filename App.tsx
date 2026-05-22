import { Montserrat_400Regular, useFonts } from '@expo-google-fonts/montserrat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import BusinessListScene from './scenes/BusinessListScene/BusinessListScene';
import HomeScene from './scenes/HomeScene/HomeScene';
import { RootTabParamList } from './scenes/navigationTypes';

const Tab = createBottomTabNavigator<RootTabParamList>();
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
          <Tab.Navigator screenOptions={{ headerShown: false,
                                        tabBarStyle:{
                                          backgroundColor: "#538a79",
                                        },
                                        tabBarActiveTintColor: "#ffffff",
                                        
           }} >
            <Tab.Screen name="HomeScene" component={HomeScene} />
            <Tab.Screen name='BusinessListScene' component={ BusinessListScene } />
          </Tab.Navigator>
        </NavigationContainer>
  );
}