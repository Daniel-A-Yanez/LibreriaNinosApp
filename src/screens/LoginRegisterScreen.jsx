import React, { useState, useContext, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { AuthContext } from '../context/AuthContext';

const { width } = Dimensions.get('window');

export default function LoginRegisterScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { user } = useContext(AuthContext);

  React.useEffect(() => {
    if (user) navigation.replace('Main');
  }, [user]);

  const handleTab = (tab) => {
    setActiveTab(tab);
    Animated.spring(scrollX, {
      toValue: tab * width,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#065C53' }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={styles.tabBtn} onPress={() => handleTab(0)}>
            <Text style={[styles.tabText, activeTab === 0 && styles.tabTextActive]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn} onPress={() => handleTab(1)}>
            <Text style={[styles.tabText, activeTab === 1 && styles.tabTextActive]}>Register</Text>
          </TouchableOpacity>
        </View>
        {/* Línea debajo de tabs */}
        <View style={styles.tabLineContainer}>
          <Animated.View
            style={[
              styles.tabLine,
              { left: activeTab === 0 ? '0%' : '50%' }
            ]}
          />
        </View>
        {/* Contenido deslizable */}
        <Animated.View
          style={{
            flexDirection: 'row',
            width: width * 2,
            transform: [{ translateX: Animated.multiply(scrollX, -1 / width) }],
          }}
        >
          <View style={{ width }}>
            <LoginForm />
          </View>
          <View style={{ width }}>
            <RegisterForm setActiveTab={setActiveTab} />
          </View>
        </Animated.View>
        {/* Versión */}
        <Text style={styles.version}>Versión 1.0.0</Text>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
  },
  tabBtn: { flex: 1, alignItems: 'center' },
  tabText: { color: '#fff', fontSize: 16, fontWeight: '400' },
  tabTextActive: { color: '#FF4500', fontWeight: 'bold' },
  tabLineContainer: {
    height: 2,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 10,
    position: 'relative',
  },
  tabLine: {
    position: 'absolute',
    bottom: 0,
    width: '50%',
    height: 2,
    backgroundColor: '#FF4500',
  },
  version: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
});