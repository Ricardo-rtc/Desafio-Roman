import React, { Component } from 'react';
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


import Cadastrar from '../screens/Cadastrar';
import Listar from '../screens/Listar';
import Perfil from '../screens/Perfil';



 class Main extends Component {

  render(){
    return (
   
      <View style={styles.main}>
        <StatusBar 
          hidden={false}
        />  
        
        <bottomTab.Navigator
        initialRouteName='Cadastrar'

        // versão 5.x do React Navigation
        // tabBarOptions={{
        //   showLabel: false,
        //   showIcon: true,
        //   activeBackgroundColor: '#B727FF',
        //   inactiveBackgroundColor: '#DD99FF',
        //   activeTintColor: 'red',
        //   inactiveTintColor: 'blue',
        //   style: { height: 50 }
        // }}
        
        screenOptions={ ({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Cadastrar') {
              return(
                <Image
                  source={require('../../assets/img/mais.png')}
                  style={styles.tabBarIcon}
                />
              )
            }
            if (route.name === 'Listar') {
              return(
                <Image
                  source={require('../../assets/img/calendar.png')}
                  style={styles.tabBarIcon}
                />
              )
            }
            if (route.name === 'Perfil') {
              return(
                <Image
                  source={require('../../assets/img/profile.png')}
                  style={styles.tabBarIcon}
                />
              )
             }
          },

          // React Navigation 6.x
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#B377FF',
          tabBarInactiveBackgroundColor: '#440793',
          // tabBarActiveTintColor: 'blue',
          // tabBarInactiveTintColor: 'red',
          tabBarStyle: { height: 50 }              
        }) }>

            <bottomTab.Screen name="Listar" component={Listar}  />
            <bottomTab.Screen name="Cadastrar" component={Cadastrar}  />
            <bottomTab.Screen name="Perfil" component={Perfil}  />
            
          </bottomTab.Navigator>
      
      </View>
    );
  }
  
};

const styles = StyleSheet.create({

  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  },

  // estilo dos ícones da tabBar
  tabBarIcon: {
    width: 22,
    height: 22
  }

});


export default Main;

