import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ContactoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contáctanos</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/foto_contacto.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.whatsappButton}
          onPress={() => Linking.openURL('#')}
        >
          <FontAwesome name="whatsapp" size={37} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        ¿Tienes dudas o sugerencias? ¡Escríbenos y síguenos en nuestras redes sociales!
      </Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('#')}>
          <FontAwesome name="facebook-square" size={40} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('#')}>
          <FontAwesome name="twitter-square" size={40} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('#')}>
          <FontAwesome name="instagram" size={40} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#065C53' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 90, color: '#fff' },
  imageContainer: {
    width: 320,
    height: 320,
    marginBottom: 90,
    borderRadius: 10,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  whatsappButton: {
    position: 'absolute',
    left: '44%',
    bottom: -28,
    transform: [{ translateX: -28 }],
    backgroundColor: '#25D366',
    borderRadius: 58,
    width: 96,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: { fontSize: 16, textAlign: 'center', marginBottom: 30, color: '#fff' },
  socialContainer: { flexDirection: 'row', justifyContent: 'center' },
  icon: { marginHorizontal: 10 },
});