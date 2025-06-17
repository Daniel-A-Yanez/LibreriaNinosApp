import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { AuthContext } from '../context/AuthContext';

export default function LoginRegisterScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useContext(AuthContext);

  React.useEffect(() => {
    if (user) navigation.replace('Main');
  }, [user]);

  return (
    <View style={{ flex: 1, backgroundColor: '#91A687' }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={styles.tabBtn} onPress={() => setActiveTab(0)}>
            <Text style={[styles.tabText, activeTab === 0 && styles.tabTextActive]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn} onPress={() => setActiveTab(1)}>
            <Text style={[styles.tabText, activeTab === 1 && styles.tabTextActive]}>Register</Text>
          </TouchableOpacity>
        </View>
        {}
        <View style={styles.tabLineContainer}>
          <View
            style={[
              styles.tabLine,
              { left: activeTab === 0 ? '0%' : '50%' }
            ]}
          />
        </View>
        {}
        {activeTab === 0 ? (
          <LoginForm />
        ) : (
          <RegisterForm setActiveTab={setActiveTab} />
        )}
        {}
        <Text style={styles.version}>Versión 1.0.0</Text>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 110,
    marginHorizontal: 20,
  },
  tabBtn: { flex: 1, alignItems: 'center' },
  tabText: { color: '#2D2D2D', fontSize: 16, fontWeight: '400' },
  tabTextActive: { color: '#fff', fontWeight: 'bold' },
  tabLineContainer: {
    height: 2,
    backgroundColor: '#2D2D2D',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
  },
  tabLine: {
    position: 'absolute',
    bottom: 0,
    width: '50%',
    height: 2,
    backgroundColor: '#fff',
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