// src/components/LibroCard.jsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LibroCard = ({ libro }) => {
  const navigation = useNavigation();

  return (
    <View className="bg-white border rounded-lg p-5 mb-4 shadow-sm w-full max-w-xs">
      <Image
        source={{ uri: libro.imagen }}
        className="w-full h-40 rounded mb-2"
        resizeMode="cover"
      />
      <Text className="text-lg font-semibold text-[#90A686]">{libro.titulo}</Text>
      <Text className="text-sm text-gray-700">📘 {libro.categoria}</Text>
      <Text className="text-sm text-gray-600">✍️ {libro.autor}</Text>
      <Text className="text-sm text-gray-500">📅 {libro.anio}</Text>
      {libro.sinopsis && (
        <Text className="text-xs text-gray-500 mt-1">{libro.sinopsis.slice(0, 60)}...</Text>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('DetalleLibro', { id: libro.id })}
        className="mt-3 bg-[#D9967E] py-2 px-4 rounded"
      >
        <Text className="text-white text-center font-bold text-sm">Ver más detalles</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LibroCard;
