import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import useAutores from '../hooks/useAutores';

const AutoresScreen = () => {
  const { autoresData, loading, error } = useAutores();

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="mt-2">Cargando autores...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-red-600 text-center">{error}</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View className="bg-white p-4 mb-4 rounded-lg shadow items-center mx-4">
      <Image source={{ uri: item.foto }} className="w-24 h-24 rounded-full mb-2" />
      <Text className="text-xl font-bold">{item.nombre_autor}</Text>
      <Text>Edad: {item.edad}</Text>
      <Text>Número de libros: {item.numero_libros}</Text>
      <Text>País: {item.nacionalidad}</Text>
      <Text className="text-center">Biografía: {item.biografia}</Text>
    </View>
  );

  return (
    <FlatList
      data={autoresData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ paddingVertical: 20 }}
    />
  );
};

export default AutoresScreen;