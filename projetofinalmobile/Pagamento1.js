import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Pagamento = () => {
  const navigation = useNavigation();

  const [NumCartao, setNumCartao] = useState('');
  const [DatValid, setDatValid] = useState('');
  const [cvv, setCvv] = useState('');

  const pagament = () => {
    if (NumCartao && DatValid && cvv) {
      navigation.navigate('Validacao');
    } else {
      alert('Por favor, insira informações válidas do cartão.');
    }
  };

  const cancelar = () => {
    navigation.navigate('Tela');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Pagamento</Text>
      <View style={styles.cardInput}>
        <Text>Número do Cartão:</Text>
        <TextInput
          style={styles.input}
          placeholder="0000 1111 2222 3333"
          value={NumCartao}
          onChangeText={(text) => setNumCartao(text)}
        />
      </View>
      <View style={styles.cardInput}>
        <Text>Data de Validade:</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/AA"
          value={DatValid}
          onChangeText={(text) => setDatValid(text)}
        />
      </View>
      <View style={styles.cardInput}>
        <Text>CVV:</Text>
        <TextInput
          style={styles.input}
          placeholder="123"
          value={cvv}
          onChangeText={(text) => setCvv(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={pagament}>
        <Text style={styles.buttonText}>Pagar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={cancelar}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>

      <Image style={styles.logo} source={require('./LogoRentEnergy.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    position: 'absolute',
    top: 60,
    right: 10,
    width: 200,
    height: 70,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: 'green',
  },
  cardInput: {
    marginBottom: 27,
  },
  input: {
    width: 200,
    height: 34,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: 'red', 
  },
});

export default Pagamento;
