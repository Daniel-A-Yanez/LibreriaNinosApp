import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const success = await login(username, password);
    if (!success) setError('Usuario o contraseña incorrectos');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo o usuario"
        placeholderTextColor="#B0B0B0"
        value={username}
        onChangeText={setUsername}
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
      <TouchableOpacity>
        <Text style={styles.forgot}>Olvidé mi contraseña</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
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
  forgot: {
    color: '#8FA785',
    textAlign: 'right',
    marginVertical: 5,
    fontSize: 12,
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