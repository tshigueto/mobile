import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const TelaAtt = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./LogoRentEnergy.png')} />
      </View>
      <Text style={styles.title}>Central de Atendimento</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Contrato: \n\nFULANO, portador do CPF N°XXXXXXXXX, declaro estar ciente e de acordo no aluguel do carro Y, pelo período iniciando-se no dia xx/xx/xxxx, até o dia xx/xx/xxxx.')}
      >
        <Text style={styles.buttonText}>Ver Contrato</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Informações Pessoais: \n\nNome: Fulano ciclano de Beltrano \nRG: XXXXXXXXXX \nCPF: YYY.YYY.YYY-YY')}
      >
        <Text style={styles.buttonText}>Informações pessoais</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Fale conosco: \n\nLigue nas nossas centrais de atendimento: \n\n0800-999999999 ou 0800-888888888')}
      >
        <Text style={styles.buttonText}>Fale conosco</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Atendimento Presencial: \n\nEndereço: Av. Eng. Eusébio Stevaux, 823 \nSanto Amaro, São Paulo - SP \nCEP 04696-000')}
      >
        <Text style={styles.buttonText}>Atendimento Presencial</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => navigation.navigate('Tela')}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'green',
  },
  button: {
    width: '80%',
    padding: 16,
    backgroundColor: 'green',
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TelaAtt;