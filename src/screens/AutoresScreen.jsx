import React, { useLayoutEffect } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import useAutores from '../hooks/useAutores';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AutoresScreen = () => {
  const { autoresData, loading, error } = useAutores();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 0 }}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const verAutor = (autor) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // Haptic mediano
      navigation.navigate('DetalleAutor', { autor });
    };

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
      <Image source={{ uri: item.foto }} className="w-32 h-32 rounded-full mb-2" />
      <Text className="text-xl font-bold mb-2">{item.nombre_autor}</Text>
      <Text className="mb-1 mt-1"><Text className="text-bold">País: </Text> {item.nacionalidad}</Text>
      <Text>Número de libros: <Text className="text-bold">{item.numero_libros}</Text></Text>
      <TouchableOpacity
         onPress={() => verAutor(item)}
         className="mt-4 bg-[#D9967E] py-2 rounded-xl"
      >
      <Text className="text-white text-center text-sm font-semibold px-4">
                Ver autor
      </Text>
      </TouchableOpacity>
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