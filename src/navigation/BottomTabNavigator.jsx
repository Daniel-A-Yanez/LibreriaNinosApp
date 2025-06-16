// src/navigation/BottomTabNavigator.jsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LibrosStackNavigator from './StackNavigator';
import AutoresScreen from '../screens/AutoresScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#90A686',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 6, height: 60 },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') iconName = 'home';
          if (route.name === 'Libros') iconName = 'book';
          if (route.name === 'Autores') iconName = 'people';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Libros" component={LibrosStackNavigator} />
      <Tab.Screen name="Autores" component={AutoresScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
