import React, { useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetalleAutor = ({ route }) => {
  const { autor } = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: autor.nombre_autor,
    });
  }, [navigation, autor.nombre_autor]);

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 24 }} className="px-4">
      <View className="bg-white rounded-lg shadow-md p-6 items-center">
        <Image source={{ uri: autor.foto }} className="w-32 h-32 rounded-full mb-4" />
        <Text className="text-2xl font-bold mb-2">{autor.nombre_autor}</Text>
        <Text className="text-lg mb-1">Edad: {autor.edad}</Text>
        <Text className="mb-1"><Text className="font-bold">Número de libros:</Text> {autor.numero_libros}</Text>
        <Text className="mb-1"><Text className="font-bold">País:</Text> {autor.nacionalidad}</Text>
        <Text className="text-center mt-4"><Text className="font-bold">Biografía:</Text> {autor.biografia}</Text>
      </View>
    </ScrollView>
  );
};

export default DetalleAutor;