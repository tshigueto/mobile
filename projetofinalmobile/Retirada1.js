import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [retirar, setRetirar] = useState('');
  const [devolver, setDevolver] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('Retirar:', retirar);
    console.log('Devolver:', devolver);
    navigation.navigate('Catalogo');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./LogoRentEnergy.png')} />
      </View>

      <Text style={styles.label}>Informe aonde deseja retirar o carro:</Text>
      <TextInput
        style={styles.input}
        value={retirar}
        onChangeText={(text) => setRetirar(text)}
      />

      <Text style={styles.label}>Informe aonde deseja devolver o carro:</Text>
      <TextInput
        style={styles.input}
        value={devolver}
        onChangeText={(text) => setDevolver(text)}
      />
      <View style={{ height: 40 }} />

      <Button title="Confirmar" onPress={handleSubmit} color="green" />
      <View style={{ height: 16 }} />
      <Button title="Voltar" onPress={() => navigation.goBack()} color="gray" />
    </View>
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
    position: 'absolute',
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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
