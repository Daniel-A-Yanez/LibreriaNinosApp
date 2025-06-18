import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PerfilScreen from '../screens/PerfilScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => (

  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#90A686',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      contentStyle: {
        backgroundColor: '#F2F2F2',
      },
    }}
  >
    <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil'}}/>
  </Stack.Navigator>
);

export default StackNavigator;
