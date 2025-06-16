// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from './src/navigation/StackNavigator';
import { useFonts } from 'expo-font';

export default function App()

{
  const [fontsLoaded] = useFonts({
    'Outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-ExtraBold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
  });
  
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigator />
    </NavigationContainer>
  );
}
