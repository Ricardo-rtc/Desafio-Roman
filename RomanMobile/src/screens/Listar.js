import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
    Image,
    FlatList,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Listar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaProjetos: [],
        };
    }

    buscarProjetos = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            const resposta = await api.get('/projetos', {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });

            if (resposta.status === 200) {
                const dadosDaApi = resposta.data;
                this.setState({ listaProjetos: dadosDaApi });
            }
        } catch (error) {
            console.warn(error);
        }
    };

    componentDidMount() {
        this.buscarProjetos();
    }

    render() {
        return (
            <View style={styles.overlay}>
                <ImageBackground
                    source={require('../../assets/img/background.png')}
                    style={StyleSheet.absoluteFillObject}
                />
                    <View style={styles.main}>
                        <Image
                            source={require('../../assets/img/logo.png')}
                            style={styles.mainImgLogin}
                        />
                        <View style={styles.Container}>

                            <View style={styles.Box_tiutlo}>
                                <Text style={styles.Titulo}>
                                    {'Projetos'.toUpperCase()}
                                </Text>
                            </View>

                            <FlatList
                                data={this.state.listaProjetos}
                                keyExtractor={item => item.idProjeto}
                                renderItem={this.renderItem}
                            />
                        </View>
                    </View>
            </View>
        );
    }

    renderItem = ({ item }) => (
        <View>
            <View style={styles.ListarDiv}>
                <View style={styles.Box_Projeto}>
                    <Text style={styles.ListagemNome}>
                        {item.nomeProjeto.toUpperCase()}
                    </Text>
                </View>

                <Text style={styles.ListagemTema}>
                    {'Tema: ' + item.idTemaNavigation.nomeTema}
                </Text>

                <Text style={styles.ListagemDescricao}>
                    {'Descrição: ' + item.escopo}
                </Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainBodyContent: {
        backgroundColor: "#440793",
        width: 300,
        height: 320,
        borderRadius: 20,
        marginTop: 30,
        marginBottom: 300,
    },

    Box_tiutlo: {
        alignItems: 'center',
        color: "white"
    },

    Fundo: {
        flex: 1,
        backgroundColor: '#E0EDF5'
    },

    Container: {
        flex: 1,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 35
    },

    Titulo: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 36,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    },

    Listagem: {
        color: "white",
        borderColor: '#440793',
        fontWeight: 'bold'
    },

    Box_Projeto: {
        alignItems: 'flex-end',
        // backgroundColor
        backgroundColor: '#440793'
    },

    ListagemNome: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 8,
        margin: 3
    },

    ListagemTema: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 8,
        marginTop: 8
    },

    ListagemDescricao: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 8,
        marginTop: 18,
        marginBottom: 10
    },

    ListagemExemplo: {
        color: 'black',
        marginLeft: 10,
        fontSize: 12,
        marginBottom: 32
    },

    ListarDiv: {
        borderColor: '#440793',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 20
        // alignItems: 'flex-end'
    },


    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(68, 7, 147, 1)',
    },

    main: {
        // flex: 1,
        //backgroundColor: '#F1F1F1', retirar pra nao ter conflito.
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    mainImgLogin: {
        margin: 30, //espacamento em todos os lados,menos pra cima.
        marginBottom: 10, // tira espacamento pra cima
    },

    // listarTitle: {
    //     fontFamily: 'Roboto',
    //     fontSize: 48,
    //     color: '#FFFFFF'
    // },

    // linha: {
    //     backgroundColor: '#FFFFFF',
    //     width: 300,
    //     height: 1,
    //     marginTop: 10
    // }

});