import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('Nome:', nome);
    console.log('CPF:', cpf);
    console.log('Endereço:', endereco);
    console.log('Telefone:', telefone);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./LogoRentEnergy.png')} />
      </View>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={(text) => setEndereco(text)}
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
        keyboardType="phone-pad"
      />

      <Button title="Cadastrar" onPress={() => navigation.navigate('Pagamento')}  color="green" />
      <View style={{ height: 16 }} />
      <Button title="Voltar" onPress={() => navigation.navigate('Agendamento')}  color="gray" />
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
