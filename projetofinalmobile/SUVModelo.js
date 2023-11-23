import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

export default function App({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./LogoRentEnergy.png')} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.carButton, { backgroundColor: 'gray' }]}
          onPress={() => handleNavigation('CompactModelo')}
        >
          <Text>Compacto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.carButton, { backgroundColor: 'gray' }]}A
          onPress={() => handleNavigation('SedanModelo')}
        >
          <Text>Sedan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.carButton, { backgroundColor: 'green' }]}
          onPress={() => handleNavigation('SUVModelo')}
        >
          <Text>SUV</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.carImage} source={require('./suv.jpg')} />

      <Text style={styles.text}>
        O SUV elétrico combina robustez e eficiência, impulsionado por um motor elétrico e baterias recarregáveis. Destaca-se pelo design espaçoso e imponente, oferecendo uma condução potente e versátil. Internamente, proporciona conforto e tecnologia avançada, promovendo uma experiência de direção moderna.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'gray', marginBottom: 10 }]}
          onPress={() => handleNavigation('Catalogo')}
        >
          <Text>Voltar Modelos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green', marginBottom: 10 }]}
          onPress={() => handleNavigation('Agendamento')}
        >
          <Text>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    position: 'relative',
    top: 0,
    right: 0,
    padding: 10,
    zIndex: 1,
  },
  logo: {
    width: 200,
    height: 70,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  carButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  carImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
