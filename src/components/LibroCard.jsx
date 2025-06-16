import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

const LibroCard = ({ libro }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    Haptics.selectionAsync(); // Pequeño feedback táctil
    navigation.navigate('DetalleLibro', { id: libro.id });
  };

  return (
    <View className="bg-white rounded-2xl p-4 shadow-md w-[48%]">
      <Image
        source={{ uri: libro.imagen }}
        className="w-full h-36 rounded-xl mb-3"
        resizeMode="cover"
      />
      <Text className="text-base font-[Outfit-Bold] text-[#90A686]">{libro.titulo}</Text>
      <Text className="text-xs text-gray-500 mt-1">{libro.categoria}</Text>
      <Text className="text-xs text-gray-500">{libro.autor}</Text>
      <Text className="text-xs text-gray-400">{libro.anio}</Text>

      {libro.sinopsis && (
        <Text className="text-xs text-gray-500 mt-2 italic">
          {libro.sinopsis.slice(0, 60)}...
        </Text>
      )}

      <TouchableOpacity
        onPress={handlePress}
        className="mt-4 bg-[#D9967E] py-2 rounded-xl"
      >
        <Text className="text-white text-center text-sm font-semibold font-[Outfit-Bold]">
          Ver más
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LibroCard;
