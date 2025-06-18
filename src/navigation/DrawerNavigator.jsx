import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import PerfilScreen from '../screens/PerfilScreen';
import AutoresScreen from '../screens/AutoresScreen';
import HomeScreen from '../screens/HomeScreen';
import AutoresStack from './AutoresStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#90A686' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerActiveTintColor: '#90A686',
      }}
    >
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Catálogo" component={StackNavigator} />
      <Drawer.Screen name="Autores" component={AutoresStack} />
      <Drawer.Screen name="Perfil" component={PerfilScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
