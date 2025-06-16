import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LibrosScreen from '../screens/LibrosScreen';
import DetalleLibroScreen from '../screens/DetalleLibroScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Libros" component={LibrosScreen} />
    <Stack.Screen name="DetalleLibro" component={DetalleLibroScreen} options={{ title: 'Detalles del Libro' }} />
  </Stack.Navigator>
);

export default StackNavigator;
