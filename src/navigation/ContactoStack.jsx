import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactoScreen from '../screens/ContactoScreen';

const Stack = createNativeStackNavigator();

const ContactoStack = () => (
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
    <Stack.Screen name="Contacto" component={ContactoScreen} />
  </Stack.Navigator>
);

export default ContactoStack;