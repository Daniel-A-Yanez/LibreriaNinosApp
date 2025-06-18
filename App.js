import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import LoginRegisterScreen from './src/screens/LoginRegisterScreen';
import { AuthProvider, AuthContext } from './src/context/AuthContext';

function MainApp() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {user ? <DrawerNavigator /> : <LoginRegisterScreen />}
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-ExtraBold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}