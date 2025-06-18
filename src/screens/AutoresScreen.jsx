import { View, Text, Image } from 'react-native';

const AutoresScreen = ({ autor }) => {
  return (
    <View className="mb-4 items-center justify-center">
      <View className="bg-white rounded-lg shadow-md w-11/12 p-4">
        <Image
          className="w-36 h-36 rounded-full self-center mb-4"
          source={{ uri: autor.foto }}
        />
        <View className="items-center">
          <Text className="text-2xl font-bold mb-2">{autor.nombre_autor}</Text>
          <Text className="text-lg mb-2">Edad: {autor.edad}</Text>
          <Text className="text-base text-center">
            <Text className="font-bold">Número de libros:</Text> {autor.numero_libros}
          </Text>
          <Text className="text-base text-center">
            <Text className="font-bold">País:</Text> {autor.nacionalidad}
          </Text>
          <Text className="text-base text-center">
            <Text className="font-bold">Biografía:</Text> {autor.biografia}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AutoresScreen;