import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import LecturaMagica from '../../assets/Lecturamagica.png';
import img1 from '../../assets/libro1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';

const { width } = Dimensions.get('window');
const imageWidth = width / 3 - 12;

const HomeScreen = () => {
  const [libros, setLibros] = useState([]);
  const navigation = useNavigation();
  const images = [img1, img2, img3, img4, img5, img6, img7];
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 0 }}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/879682-861157-default/libros')
      .then(res => res.json())
      .then(data => setLibros(data.slice(0, 3)));
  }, []);

  return (
    <ScrollView className="bg-white flex-1">
      {/* Banner */}
      <View className="relative w-full h-80 overflow-hidden">
        <Image
          source={LecturaMagica}
          className="absolute w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute inset-0 bg-black bg-opacity-40" />
        <View className="absolute inset-0 flex justify-end items-center px-5 py-16">
          <Text className="text-white text-2xl font-[Outfit-Bold] text-center mb-2 drop-shadow-md">
            Bienvenido al mundo de los libros
          </Text>
          <Text className="text-white text-sm text-center mb-5 drop-shadow-md">
            Historias mágicas y aventuras inolvidables te esperan 📚✨
          </Text>
          <TouchableOpacity
            className="bg-[#D9967E] px-6 py-2 rounded-full shadow-lg"
            onPress={() => navigation.navigate('Catálogo')}
          >
            <Text className="text-white font-semibold">Explora ahora</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Carrusel de imágenes */}
      <View className="mt-6 mb-6 ">
          <View className="mb-6">
          <Text className="text-3xl font-[Outfit-Bold] text-[#90A686] text-center">
            Colecciones fantásticas
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={imageWidth + 12}
          decelerationRate="fast"
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {images.map((img, index) => (
            <View key={index} style={{ marginRight: 12 }}>
              <Image
                source={img}
                style={{
                  width: imageWidth,
                  height: 120,
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Colecciones */}
      <View className=" px-6 py-7">
                <View className="mb-6">
          <Text className="text-3xl font-[Outfit-Bold] text-[#90A686] text-center">
            Libros populares
          </Text>
        </View>
        <View className="mb-4">
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
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
