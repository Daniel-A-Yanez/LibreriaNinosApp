import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const PerfilScreen = () => {
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

 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Perfil</Text>
    </View>

}

export default PerfilScreen;
