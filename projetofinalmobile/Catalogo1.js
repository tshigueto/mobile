import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {
  const navigateToCompactModelo = () => {
    navigation.navigate('CompactModelo');
  };

  const navigateToSedanModelo = () => {
    navigation.navigate('SedanModelo');
  };

  const navigateToSUVModelo = () => {
    navigation.navigate('SUVModelo');
  };

  return (
    <View style={Estilo.container}>
      <Image style={Estilo.logo1} source={require('./LogoRentEnergy.png')} />

      <ScrollView contentContainerStyle={Estilo.scrollViewContent}>
        <Text style={Estilo.paragraph}>Escolha o Modelo:</Text>

        <TouchableOpacity onPress={navigateToCompactModelo}>
          <Text style={Estilo.paragraph}>Compacto</Text>
          <Image style={Estilo.logo} source={require('./compacto.webp')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToSedanModelo}>
          <Text style={Estilo.paragraph}>Sedan</Text>
          <Image style={Estilo.logo} source={require('./sedan.jpg')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToSUVModelo}>
          <Text style={Estilo.paragraph}>SUV</Text>
          <Image style={Estilo.logo} source={require('./suv.jpg')} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const Estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  paragraph: {
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo1: {
    width: 200,
    height: 70,
    alignSelf: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 250,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
