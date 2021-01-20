/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {Component, Fragment} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {SplashScreen } from './src/Componentes/splash_screen'; 
import { Chat } from './src/Componentes/chat'; 
import { PantallaInicial } from './src/Componentes/pantalla_inicial'; 
import { Usuarios } from './src/Componentes/usuarios'; 
import { Calendario } from './src/Componentes/calendario'; 
import { Viabilidad } from './src/Componentes/viabilidad'; 
import {ConsumoMensual } from './src/Componentes/consumo_mensual';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Stack = createStackNavigator();
console.disableYellowBox = true;


class MyStack extends Component {
 
 
  render(){ 

  return (
    <Stack.Navigator

      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>

      <Stack.Screen  options={{headerShown: false}} name="Atrás" component={SplashScreen}/>
      <Stack.Screen  name="Home" component={PantallaInicial}  />
      <Stack.Screen name="Clientes" component={Usuarios}  />
      <Stack.Screen name="Chat" component={Chat}  />
      <Stack.Screen name="Calendario" component={Calendario}  />
      <Stack.Screen  name="Potencia Kw" component={Viabilidad}  />
      <Stack.Screen options={{headerShown: false}} name="Consumo mensual" component={ConsumoMensual}  />


    </Stack.Navigator>
  )};


  
}


export default function App()  {
  return (

   <Fragment>
 
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>

    
    </Fragment>

   
  );
}




/*
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/