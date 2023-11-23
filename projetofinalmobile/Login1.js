import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Login1Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login1 Screen</Text>
    </View>
  );
}

function Cadastro1Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Cadastro1 Screen</Text>
    </View>
  );
}

export default function App() {
  const [logar, setLogar] = useState('');
  const [criarLogin, setCriarLogin] = useState('');

  const handleSubmit = () => {
    console.log('logar:', logar);
    console.log('criarLogin:', criarLogin);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {() => (
            <View style={styles.container}>
              <View style={styles.header}>
                <Image style={styles.logo} source={require('./LogoRentEnergy.png')} />
              </View>

              <Text style={styles.label}>Informe seu email:</Text>
              <TextInput
                style={styles.input}
                value={criarLogin}
                onChangeText={(text) => setCriarLogin(text)}
              />

              <Text style={styles.label}>Informe sua senha:</Text>
              <TextInput
                style={styles.input}
                value={logar}
                onChangeText={(text) => setLogar(text)}
              />

              <Button
                title="Entrar"
                onPress={() => navigation.navigate('Pagamento1')}
                color="green"
              />
              <View style={{ height: 16 }} />
              <Button
                title="Criar cadastro"
                onPress={() => navigation.navigate('Cadastro1')}
                color="gray"
              />
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Login1" component={Login1Screen} />
        <Stack.Screen name="Cadastro1" component={Cadastro1Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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
