import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import Texto from '../components/Texto'

export default function Item ({item:{nome, imagem}}){
    return <>
        <View style={estilos.item} key={nome}>
            <Image style={estilos.imagem} source={imagem}/>
            <Texto style={estilos.nome}> {nome} </Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#515151",
        paddingVertical: 20,
        alignItems: "center"
    },
    nome:{
        fontSize: 18,
        color: "#464646",
        marginLeft: 15,
        lineHeight: 25
    },
    imagem:{
        marginLeft: 20,
        width: 50,
        height: 50
    }
})