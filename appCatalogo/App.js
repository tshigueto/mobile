import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    
    <View style={Estilo.container}>
    <Image style={Estilo.logo1} source={require('./Logo RentEnergy.png')} />
    
      <ScrollView contentContainerStyle={Estilo.scrollViewContent}>
        <Text style={Estilo.paragraph}>
          Escolha o Modelo:
        </Text>

        <Text style={Estilo.paragraph}>Compacto</Text>
        <Image style={Estilo.logo} source={require('./compacto.webp')} />

        <Text style={Estilo.paragraph}>Sedan</Text>
        <Image style={Estilo.logo} source={require('./sedan.jpg')} />

        <Text style={Estilo.paragraph}>SUV</Text>
        <Image style={Estilo.logo} source={require('./suv.jpg')} />
      </ScrollView>
    </View>
  );
}

const Estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  // Adicione esta linha para centralizar verticalmente
    backgroundColor: 'white',
    padding: 8,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',  // Adicione esta linha para centralizar verticalmente no ScrollView
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
    marginBottom: 30,  // Adicione margem inferior para separar as imagens
  },
  logo: {
    width: 250,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,  // Adicione margem inferior para separar as imagens
  },
});
