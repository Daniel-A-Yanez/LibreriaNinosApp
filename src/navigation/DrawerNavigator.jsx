import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import PerfilScreen from '../screens/PerfilScreen';
import AutoresScreen from '../screens/AutoresScreen';
import HomeScreen from '../screens/HomeScreen';
import AutoresStack from './AutoresStack';
import StackHome from './StackHome';
import StackPerfil from './StackPerfil'
import ContactoStack from './ContactoStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#DB6B39' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerActiveTintColor: '#DB6B39',
      }}
    >
      <Drawer.Screen name="Inicio" component={StackHome} />
      <Drawer.Screen name="Catálogo" component={StackNavigator} />
      <Drawer.Screen name="Autores" component={AutoresStack} />
      <Drawer.Screen name="Contacto" component={ContactoStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
