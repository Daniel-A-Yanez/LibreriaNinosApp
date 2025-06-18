import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterForm({ setActiveTab }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!username || !email || !password || password !== confirm) {
      setError('Verifica los campos');
      return;
    }
    setActiveTab(0);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu usuario"
        placeholderTextColor="#B0B0B0"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo"
        placeholderTextColor="#B0B0B0"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.label}>Confirmar contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirma tu contraseña"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>o</Text>
        <View style={styles.divider} />
      </View>
      <TouchableOpacity style={styles.socialBtn}>
        <Text style={styles.socialText}>Continuar con Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialBtn}>
        <Text style={styles.socialText}>Continuar con Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  label: {
    color: '#D8967E',
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D8967E',
    borderRadius: 20,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 15,
    color: '#222',
  },
  button: {
    backgroundColor: '#8FA785',
    borderRadius: 20,
    padding: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  divider: { flex: 1, height: 1, backgroundColor: '#B0B0B0' },
  dividerText: { marginHorizontal: 10, color: '#B0B0B0' },
  socialBtn: {
    backgroundColor: '#666',
    borderRadius: 20,
    padding: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  socialText: { color: '#fff' },
  error: { color: 'red', textAlign: 'center', marginVertical: 5 },
});