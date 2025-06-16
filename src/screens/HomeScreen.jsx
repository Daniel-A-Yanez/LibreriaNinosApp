// src/screens/HomeScreen.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [libros, setLibros] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/879682-861157-default/libros')
      .then(res => res.json())
      .then(data => setLibros(data.slice(0, 3)));
  }, []);

  return (
    <ScrollView className="bg-white flex-1 px-4 py-6">
      <View className="mb-6">
        <Text className="text-3xl font-[Outfit-Bold] text-[#90A686]">
          Colecciones fantásticas
        </Text>
        <Text className="text-lg text-gray-600 mt-1">
          Libros para todas las edades
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Libros')}
          className="mt-4 bg-[#D9967E] px-4 py-2 rounded-full"
        >
          <Text className="text-white text-center font-[Outfit-Bold]">Ver todos los libros</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-6">
        <Text className="text-xl font-[Outfit-Bold] mb-2">👋 ¡Hola, explorador!</Text>
        <Text className="text-gray-600">
          Explora libros divertidos y educativos 📚{"\n"}
          Descubre historias mágicas mientras aprendes.
        </Text>
      </View>

      <View className="mb-4">
        <Text className="text-xl font-[Outfit-Bold] mb-4">Algunos de nuestros libros</Text>
        <View className="flex-row flex-wrap justify-between">
          {libros.map((libro) => (
            <View key={libro.id} className="bg-gray-100 w-[48%] rounded-xl mb-4 p-2">
              <Image
                source={{ uri: libro.imagen }}
                className="w-full h-36 rounded mb-2"
                resizeMode="cover"
              />
              <Text className="text-[#90A686] font-[Outfit-Bold]">{libro.titulo}</Text>
              <Text className="text-xs text-gray-500">{libro.categoria}</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetalleLibro', { id: libro.id })}
                className="mt-2 bg-[#D9967E] py-1 rounded"
              >
                <Text className="text-white text-center text-xs font-semibold">Ver más</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
