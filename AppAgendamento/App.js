import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Calendar } from 'react-native-calendars';

const App = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisible(true);
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisible(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisible(false);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisible(false);
  };

  const handleStartDateConfirm = (date) => {
    setStartDate(date.toISOString());
    hideStartDatePicker();
  };

  const handleEndDateConfirm = (date) => {
    setEndDate(date.toISOString());
    hideEndDatePicker();
  };

  const handleSelecionarDatas = () => {
    // Lógica para lidar com as datas selecionadas
    console.log('Data de Início:', startDate);
    console.log('Data de Término:', endDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./Logo RentEnergy.png')} />
      </View>

      <View style={{ marginBottom: 20, marginTop: 190, width: '80%' }}>
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

      <Button onPress={handleSelecionarDatas} title="Selecionar Datas" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default App;
