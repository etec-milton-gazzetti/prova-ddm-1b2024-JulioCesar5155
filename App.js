import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer, getStateFromPath } from '@react-navigation/native';
import icon from './img/espartaa.png'
import icon2 from './img/icon.png'
import icon3 from './img/perg.png'



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{textAlign: 'center', fontSize: 30, fontStyle: "italic", fontWeight: 'bold'}}>Batalha de Termópilas {'\n'}
                História</Text>
      <Image style={{ width: 200, height: 200 }} source={icon}></Image>
    
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('About')} style={{color: 'white',marginLeft: 15 }}>
        <Image source={icon3} style={{width: 80, height: 80}}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Histórico')} style={{ color: 'white', }}>
        <Image source={icon2} style={{width: 140, height: 80}}></Image>
      </TouchableOpacity>
      </View>
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre mim</Text>
      <TouchableOpacity  onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
function HistScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre mim</Text>
      <TouchableOpacity  onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
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