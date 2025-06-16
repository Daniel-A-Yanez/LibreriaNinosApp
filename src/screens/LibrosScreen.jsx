// src/screens/LibrosScreen.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import LibroCard from '../components/LibroCard';

const LibrosScreen = () => {
  const [libros, setLibros] = useState([]);
  const [categoria, setCategoria] = useState('Todas');

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/879682-861157-default/libros')
      .then(res => res.json())
      .then(data => setLibros(data));
  }, []);

  const categorias = [
    'Todas',
    ...new Set(libros.map((libro) => libro.categoria)),
  ];

  const filtrados =
    categoria === 'Todas'
      ? libros
      : libros.filter((l) => l.categoria === categoria);

  return (
    <ScrollView className="px-4 py-6 bg-[#F2F2F2]">
      <Text className="text-2xl font-bold text-[#90A686] mb-4">Catálogo de Libros</Text>

      <View className="flex-row flex-wrap gap-2 mb-4">
        {categorias.map((cat, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => setCategoria(cat)}
            className={`py-1 px-3 rounded-full border ${
              categoria === cat ? 'bg-[#90A686] text-white' : 'bg-white'
            }`}
          >
            <Text className={`${categoria === cat ? 'text-white' : 'text-gray-700'}`}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View className="flex flex-row flex-wrap gap-4 justify-between">
        {filtrados.map((libro) => (
          <LibroCard key={libro.id} libro={libro} />
        ))}
      </View>
    </ScrollView>
  );
};

export default LibrosScreen;
