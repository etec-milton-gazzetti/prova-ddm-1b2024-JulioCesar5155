import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, ScrollView} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer, getStateFromPath } from '@react-navigation/native';
import icon from './img/espartaa.png'
import icon2 from './img/icon.png'
import icon3 from './img/perg.png'
import icon4 from './img/60793.png'
import gatao from './img/gostoso.jpg'

function HomeScreen({ navigation }) {
  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 25 }}>
          <Text style={{ textAlign: 'center', fontSize: 30, fontStyle: "italic", fontWeight: 'bold',}}>Batalha de Termópilas {'\n'} História</Text>
          <Image style={{ width: 200, height: 200,}} source={icon}></Image>

          <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('About')} style={{ color: 'white', marginLeft: 15 }}>
              <Image source={icon3} style={{ width: 80, height: 80 }}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Histórico')} style={{ color: 'white', }}>
              <Image source={icon2} style={{ width: 140, height: 80 }}></Image>
            </TouchableOpacity>
          </View>
    </View>


  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
          style={{
            fontSize: 30,
            paddingBottom: 40,
            fontWeight: 'bold'
          }}>
          Sobre mim
        </Text>
        <Image source={gatao} style={{width: 300, height: 300, borderRadius: 50}} />
        <Text
          style={{
            fontSize: 20,
            paddingTop: 40,
            textAlign: 'center',
          }}>
          Julio Cesar {'\n'}
          Telefone: 18 99128-0446 {'\n'}
          RM: 788
        </Text>
      <TouchableOpacity  onPress={() => navigation.goBack()}>
        <Image source={icon4} style={{width: 50, height: 50, marginTop: 20}}></Image>
      </TouchableOpacity>
    </View>
  );
}
function HistScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', margin: 10}}>Histórico</Text>
      <Text style={{fontSize: 15, textAlign: 'justify', marginLeft: 40, marginRight: 40}}>A Batalha das Termópilas foi travada em 480 a.C., no período da Segunda Guerra Médica. O pequeno exército de Leônidas, rei e general de Esparta, batalhou incansavelmente contra o massivo exército persa durante três dias seguidos. É estimado que eram 300 soldados contra 1 milhão de combatentes.</Text>
      <Text style={{fontSize: 30, fontWeight: 'bold', margin: 10}}>Legado</Text>
      <Text style={{fontSize: 15, textAlign: 'justify', marginLeft: 40, marginRight: 40}}>Embora tenham sido derrotados, o sacrifício heroico dos espartanos e de seus aliados em Termópilas foi imortalizado na história e na cultura grega. A batalha tornou-se um símbolo de coragem, resistência e bravura contra a opressão. Ainda hoje é lembrada como um exemplo de heroísmo em face da adversidade.</Text>

      <TouchableOpacity  onPress={() => navigation.goBack()}>
        <Image source={icon4} style={{width: 50, height: 50, marginTop: 30}}></Image>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Histórico" component={HistScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});