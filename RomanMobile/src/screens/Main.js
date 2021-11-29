import React, { Component } from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();



class Main extends Component {

  render(){
    return (
      <View >
        <Text style={{color:"red", fontSize:22}}>Funciona</Text>
        
        {/* <bottomTab.Navigator>
            <bottomTab.Screen name="Convites"  />
            <bottomTab.Screen name="Eventos"  />
            <bottomTab.Screen name="Perfil"  />
          </bottomTab.Navigator> */}
      
      </View>
    );
  }
  
};

const styles = StyleSheet.create({

  overlay: {
    ...StyleSheet.absoluteFillObject, //todas as prop do styleShhet, e vamos aplica o abosluteFIL...
    backgroundColor: 'rgba(68, 7, 147, 1)', //rgba pq vamos trabalhar com transparencia.
  },
  Picker:{
    width:240,
    fontSize: 18,
    marginBottom: 40,
    color: '#FFF',
    // borderColor: 'rgba(68, 7, 147, 1)', //linha separadora
    // borderWidth: 2, //espessura.
    borderRadius: 25,
    backgroundColor: 'rgba(68, 7, 147, 1)'
  },

  // conteúdo da main
  main: {
    // flex: 1,
    //backgroundColor: '#F1F1F1', retirar pra nao ter conflito.
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  mainImgLogin: {
    margin: 60, //espacamento em todos os lados,menos pra cima.
    marginTop: 0, // tira espacamento pra cima
  },

  inputLogin: {
    width: 240, //largura mesma do botao
    marginBottom: 40, //espacamento pra baixo
    fontSize: 18,
    color: '#FFF',
    borderColor: 'rgba(68, 7, 147, 1)', //linha separadora
    borderWidth: 2, //espessura.
    borderRadius: 25,
    backgroundColor: 'rgba(68, 7, 147, 1)'
  },

  btnLoginText: {
    fontSize: 18, //aumentar um pouco
    fontFamily: 'Open Sans Light', //troca de fonte
    color: '#fff', //mesma cor identidade
   // letterSpacing: 6, //espacamento entre as letras
    textTransform: 'uppercase', //estilo maiusculo
  },
  btnLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    width: 240,
    // borderWidth: 1,
    shadowOffset: {height: 1, width: 1},
    borderColor: 'rgba(68, 7, 147, 1)', //linha separadora
    borderWidth: 2, //espessura.
    borderRadius: 25,
    backgroundColor: 'rgba(68, 7, 147, 1)'
  },
});

export default Main;