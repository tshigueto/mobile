import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  const handleSubmit = () => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./LogoRentEnergy.png')} />
      </View>

      <Text style={styles.label1}>Validação</Text>
      <Text style={styles.label}> </Text>
      <Text style={styles.label}>FULANO, portador do CPF nº xxxxxxx, declaro estar de acordo no aluguel do carro SEDAN, pelo período iniciando-se do dia xx de xx de xxxx até o dia xx de xx de xxxx.</Text>
      <Text style={styles.label}>De acordo.</Text>
      <Text style={styles.label}> </Text>
      <Text style={styles.label}>contrato xx/xxxx</Text>
      <Text style={styles.label}> </Text>
      <Text style={styles.label2}>___________________</Text>
      <Text style={styles.label2}>FULANO</Text>
      <Text style={styles.label}> </Text>
      <Text style={styles.label}> </Text>

      <Button
        title="Confirmar"
        onPress={() => navigation.navigate('Contrato')}
        color="green"
      />
      <View style={{ height: 16 }} />
      <Button
        title="Voltar Pagamento"
        onPress={() => navigation.navigate('Pagamento')}
        color="gray"
      />
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
  label1: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 5,
  },
  label2: {
    fontSize: 16,
    textAlign: 'right',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});
