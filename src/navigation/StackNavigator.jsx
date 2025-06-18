import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LibrosScreen from '../screens/LibrosScreen';
import DetalleLibroScreen from '../screens/DetalleLibroScreen';
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
    <Stack.Screen name="LibrosScreen" component={LibrosScreen} options={{ title: 'Catálogo de Libros' }} />
    <Stack.Screen
      name="DetalleLibro"
      component={DetalleLibroScreen}
      options={{ title: 'Detalles del Libro' }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
