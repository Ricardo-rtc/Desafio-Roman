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

export default class Cadastrar extends Component {

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
                >
                    <View style={styles.main}>
                        <Image
                            source={require('../../assets/img/logo.png')}
                            style={styles.mainImgLogin}
                        />
                        <Text style={styles.listarTitle}>
                            Listagem
                        </Text>
                        <View style={styles.linha}></View>
                        <View style={styles.mainBodyContent}>

                            <View style={styles.coluna}>
                                <View style={[styles.coluna1, styles.caixa]}>
                                    <Text style={[styles.fonte, styles.titulo]}>
                                        Nome do projeto
                                    </Text>
                                </View>

                                <View style={styles.caixa}>
                                    <Text style={[styles.fonte, styles.titulo]}>
                                        Tema
                                    </Text>
                                </View>
                            </View>

                            <FlatList
                                // contentContainerStyle={styles.mainBodyContent}
                                data={this.state.listaProjetos}
                                keyExtractor={item => item.idProjeto}
                                renderItem={this.renderItem}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }

    renderItem = ({ item }) => (
        <View style={styles.coluna}>
            <View style={[styles.coluna1, styles.caixa]}>
                <Text style={styles.fonte}>
                    {item.nomeProjeto}
                </Text>
            </View>

            <View style={styles.caixa}>
                <Text style={styles.fonte}>
                    {item.idTemaNavigation.nomeTema}
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
    },

    coluna: {
        flexDirection: 'row',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
    },

    coluna1: {
        borderRightWidth: 1,
        borderColor: '#FFFFFF',
    },

    caixa: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    fonte: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        margin: 10,
    },

    titulo: {
        fontWeight: 'bold',
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

    listarTitle: {
        fontFamily: 'Roboto',
        fontSize: 48,
        color: '#FFFFFF'
    },

    linha: {
        backgroundColor: '#FFFFFF',
        width: 300,
        height: 1,
        marginTop: 10
    }

});