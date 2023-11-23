import { Text, StyleSheet, Button, View, Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Retirada from './Retirada1';
import Catalogo from './Catalogo1';
import CompactModelo from './CompactModelo';
import SedanModelo from './SedanModelo';
import SUVModelo from './SUVModelo';
import Agendamento from './Agendamento1';
//import Login from './Login1';
import Cadastro from './Cadastro1';
import Pagamento from './Pagamento1';
import Validacao from './Validacao1';
import Contrato from './Contrato1';
import AtendimentoCliente from './AtendimentoCliente1';

const Stack = createNativeStackNavigator();

const Tela = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image style={styles.logo} resizeMode='contain' source={require('./LogoRentEnergy.png')} />
      </View>

      <View>
        <Text style={styles.paragraph}>Maior empresa de aluguel de carros elétricos do Brasil!</Text>
      </View>
      <View>
        <Button onPress={() => navigation.navigate("Retirada")} title="Entrar" color="green" style={styles.button} />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela">
        <Stack.Screen name="Tela" component={Tela} />
        <Stack.Screen name="Retirada" component={Retirada} />
        <Stack.Screen name="Catalogo" component={Catalogo} />
        <Stack.Screen name="CompactModelo" component={CompactModelo} />
        <Stack.Screen name="SedanModelo" component={SedanModelo} />
        <Stack.Screen name="SUVModelo" component={SUVModelo} />
        <Stack.Screen name="Agendamento" component={Agendamento} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="Validacao" component={Validacao} />
        <Stack.Screen name="Contrato" component={Contrato} />
        <Stack.Screen name="AtendimentoCliente" component={AtendimentoCliente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    padding: 5,
  },
  logo: {
    width: 200,
    height: 100,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    width: 100, 
    height: 50, 
  },
});
