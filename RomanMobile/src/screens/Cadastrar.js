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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import api from '../services/api';

const bottomTab = createBottomTabNavigator();



export default class Cadastrar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTema: '',
      descricao: '',
      nomeProjeto: '',
      idProfessor: 1
    };
  }

  cadastrar = async () => {
    
    console.warn(this.state.idTema + ' ' + this.state.descricao + ' ' + this.state.nomeProjeto + ' ' + this.state.idProfessor);
    
    const token = await AsyncStorage.getItem('userToken');
    const resposta = await api.post('/projetos', {
      idTema: this.state.idTema, 
      escopo: this.state.descricao,
      nomeProjeto: this.state.nomeProjeto,
      idProfessor: this.state.idProfessor 
    },{
      headers: {
        Authorization: 'Bearer ' + token,
      }});
      
      



    if (resposta.status == 201) {
      this.props.navigation.navigate('Listar');
    }

    // console.warn(error);

    //
  };

  render(){
    return (
      <View style={styles.overlay}>
        <ImageBackground
      source={require('../../assets/img/background.png')}
        style={StyleSheet.absoluteFillObject}>
        <View style={styles.main}>
          <Image
          source={require('../../assets/img/logo.png')}
          style={styles.mainImgLogin}
          />
          
          <TextInput
            style={styles.inputLogin}
            placeholder="Nome do projeto"
            placeholderTextColor="#FFF"
            keyboardType="default" //para default nao obrigatorio.
            onChangeText={nomeProjeto => this.setState({nomeProjeto})}
          />

          <Picker
        selectedValue={this.state.idTema}
        style={styles.Picker}
        onValueChange={(itemValue, itemIndex) => this.setState({
          idTema: itemValue
        })}
      >
        <Picker.Item label="Selecione um tema" value="undefined" disabled/>
        <Picker.Item label="HQ" value="1" />
        <Picker.Item label="Gestão" value="2" />
      </Picker>
          <TextInput
            style={styles.inputLogin}
            placeholder="Descrição"
            placeholderTextColor="#FFF"
            keyboardType="default" //para default nao obrigatorio.
            // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
            onChangeText={descricao => this.setState({descricao})}
          />

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={this.cadastrar}>
            <Text style={styles.btnLoginText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    borderColor: 'rgba(68, 7, 147, 1)', //linha separadora
    // borderWidth: 2, //espessura.
    borderRadius: 25,
    backgroundColor: 'rgba(68, 7, 147, 1)',
    
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

