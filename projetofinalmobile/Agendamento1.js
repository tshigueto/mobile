import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Agendamento = ({ navigation }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSelecionarDatas = () => {
    console.log('Data de Início:', startDate);
    console.log('Data de Término:', endDate);

    navigation.navigate('Cadastro');
  };

  const handleVoltarCatalogo = () => {
    navigation.navigate('Catalogo');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('./LogoRentEnergy.png')} />
        </View>

        <View style={{ marginBottom: 20, marginTop: 150, width: '80%' }}>
          <Text>Data de Início: {startDate}</Text>
          <Calendar
            onDayPress={(day) => {
              setStartDate(day.dateString);
            }}
          />
        </View>

        <View style={{ marginBottom: 20, width: '80%' }}>
          <Text>Data de Término: {endDate}</Text>
          <Calendar
            onDayPress={(day) => {
              setEndDate(day.dateString);
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={handleVoltarCatalogo} title="Voltar" color="gray" />
          <Button onPress={handleSelecionarDatas} title="Confirmar Datas" color="green" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  logo: {
    width: 200,
    height: 70,
    top: 60,
    right: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '57%',
    marginBottom: 1,
  },
});

export default Agendamento;
