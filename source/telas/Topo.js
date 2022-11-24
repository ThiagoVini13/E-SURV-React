import React from 'react';
import {Image, SafeAreaView, StyleSheet, Dimensions, View} from 'react-native';

const tamanho = Dimensions.get('screen').width;

import Texto from '../../source/components/Texto.js';

export default function Topo ({nome, subNome, imagem}){
    return <>
     <SafeAreaView>
        <View style={estilos.textos}>
            <Image style={estilos.fundo} source={imagem}/> 
            <Texto style={estilos.nome}>{nome}</Texto> 
        </View>
        <Texto style={estilos.subNome}>{subNome}</Texto>
    </SafeAreaView>
    </>
    ;
}

const estilos = StyleSheet.create({
    fundo: {
        width: "100%",
        height: 450/1800 * tamanho
    },  
    nome: {
        color: "#0fc7be",
        position: "absolute",
        paddingHorizontal: 70,
        paddingVertical: 50,
        fontSize: 40,
        fontWeight: "bold",
        lineHeight: 10    
    },
    subNome: {
        fontSize: 20,
        position: "absolute",
        paddingHorizontal: 90,
        paddingVertical: 50,
        color: "#FFFFFF"
    },
    textos: {
        flexDirection: "row"
    }
});