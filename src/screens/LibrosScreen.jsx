// src/screens/LibrosScreen.jsx
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import * as Haptics from 'expo-haptics'; // 👈 Importar Haptics
import LibroCard from "../components/LibroCard";

const LibrosScreen = () => {
  const [libros, setLibros] = useState([]);
  const [categoria, setCategoria] = useState("Todas");

  useEffect(() => {
    fetch("https://mock.apidog.com/m1/879682-861157-default/libros")
      .then((res) => res.json())
      .then((data) => setLibros(data));
  }, []);

  const categorias = [
    "Todas",
    ...new Set(libros.map((libro) => libro.categoria)),
  ];

  const filtrados =
    categoria === "Todas"
      ? libros
      : libros.filter((libro) => libro.categoria === categoria);

  const handleCategoriaPress = (cat) => {
    Haptics.selectionAsync(); // 👈 Activa haptic feedback
    setCategoria(cat);
  };

  return (
    <ScrollView className="bg-[#F2F2F2] px-6 py-6">
      <Text className="text-3xl font-extrabold text-[#90A686] mb-6">
        Catálogo de Libros
      </Text>

      <View className="flex-row flex-wrap gap-2 mb-6">
        {categorias.map((cat, idx) => {
          const isSelected = categoria === cat;
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => handleCategoriaPress(cat)} // 👈 Usa la función con Haptics
              className={`px-4 py-2 rounded-full border ${
                isSelected
                  ? "bg-[#90A686] border-[#90A686]"
                  : "bg-white border-gray-300"
              }`}
            >
              <Text
                className={`${isSelected ? "text-white" : "text-gray-800"}`}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View className="flex-row flex-wrap justify-between gap-y-4">
        {filtrados.map((libro) => (
          <LibroCard key={libro.id} libro={libro} />
        ))}
      </View>
    </ScrollView>
  );
};

export default LibrosScreen;
