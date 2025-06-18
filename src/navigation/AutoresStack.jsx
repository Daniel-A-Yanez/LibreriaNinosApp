import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetalleAutor from '../screens/DetalleAutor';
import AutoresScreen from '../screens/AutoresScreen';

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
    <Stack.Screen name="AutoresScreen" component={AutoresScreen} options={{ title: 'Autores'}}/>
    <Stack.Screen
    name="DetalleAutor"
    component={DetalleAutor}
    options={{title: 'Detalle del Autor'}}
    />
  </Stack.Navigator>
);

export default StackNavigator;
