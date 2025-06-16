// src/screens/DetalleLibroScreen.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const DetalleLibroScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;

  const [libro, setLibro] = useState(null);
  const [relacionados, setRelacionados] = useState([]);

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/879682-861157-default/libros')
      .then(res => res.json())
      .then(data => {
        const libroActual = data.find(l => l.id === id);
        setLibro(libroActual);

        const rel = data
          .filter(l => l.categoria === libroActual?.categoria && l.id !== libroActual.id)
          .slice(0, 5);
        setRelacionados(rel);
      });
  }, [id]);

  if (!libro) return <Text className="text-center mt-10">Cargando libro...</Text>;

  return (
    <ScrollView className="p-4 bg-[#F2F2F2]">
      <View className="bg-white p-4 rounded shadow mb-6">
        <Image
          source={{ uri: libro.imagen }}
          className="w-full h-80 rounded-xl mb-4"
          resizeMode="cover"
        />
        <Text className="text-2xl font-bold text-[#90A686] mb-2">{libro.titulo}</Text>
        <Text className="text-base mb-1"><Text className="font-bold">Categoría:</Text> {libro.categoria}</Text>
        <Text className="text-base mb-1"><Text className="font-bold">Autor:</Text> {libro.autor}</Text>
        <Text className="text-base mb-1"><Text className="font-bold">Año:</Text> {libro.anio}</Text>
        <Text className="text-sm text-gray-600 mt-4">{libro.resumen}</Text>
        <TouchableOpacity className="mt-5 bg-[#D9967E] py-3 px-4 rounded">
          <Text className="text-white text-center font-bold">AÑADIR AL CARRITO</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-xl font-bold text-[#B9BF8E] mb-4">Libros Relacionados</Text>
      <View className="flex-row flex-wrap gap-4 justify-between">
        {relacionados.map(rel => (
          <TouchableOpacity
            key={rel.id}
            onPress={() => navigation.push('DetalleLibro', { id: rel.id })}
            className="w-[45%] bg-white p-3 rounded shadow"
          >
            <Image
              source={{ uri: rel.imagen }}
              className="w-full h-40 rounded mb-2"
              resizeMode="cover"
            />
            <Text className="font-semibold text-sm text-[#90A686]">{rel.titulo}</Text>
            <Text className="text-xs text-gray-600">{rel.autor}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default DetalleLibroScreen;
