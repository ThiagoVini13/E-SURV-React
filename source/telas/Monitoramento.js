import React from 'react';
import {StyleSheet, View} from 'react-native';
import Texto from '../components/Texto';

export default function Monitoramento({titulo, RS, valorRS, kWh, valorkWh, tarifa, bandeira, corrente, potencia, tensao, valorC, valorP, valorT}){
    return <>
        <Texto style={estilos.titulo}> {titulo} </Texto>
        
        <View style={estilos.consumo}>
            <Texto style={estilos.RS}> {RS} </Texto>
            <Texto style={estilos.kWh}> {kWh} </Texto>
        </View> 

        <View style={estilos.valor}>
            <Texto style={estilos.valorRS}> {valorRS} </Texto>
            <Texto style={estilos.valorkWh}> {valorkWh} </Texto>
        </View>  

        <Texto style={estilos.tarifa}> {tarifa} </Texto>
        <Texto style={estilos.bandeira}> {bandeira} </Texto>

        <View style={estilos.sensores}>
            <Texto style={estilos.corrente}> {corrente} </Texto>
            <Texto style={estilos.tensao}> {tensao} </Texto>
        </View>

        <View style={estilos.valores}>
            <Texto style={estilos.valorC}> {valorC} </Texto>
            <Texto style={estilos.valorT}> {valorT} </Texto>
        </View>

        <Texto style={estilos.potencia}> {potencia} </Texto>
        <Texto style={estilos.valorP}> {valorP} </Texto>
    </>
    ;
}

const estilos = StyleSheet.create({
    titulo: {
        fontWeight: "bold",
        fontSize: 30,
        lineHeight: 50,
        textAlign: "center",
        width: "100%",
        color: "#FFFFFF",
        textShadowRadius: 3,
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        backgroundColor: "#6200ED"
    },
    RS: {
        paddingHorizontal: 20,
        fontSize: 25,
        lineHeight: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        fontWeight: "bold"
    },
    valorRS:{
        paddingHorizontal: 70,
        fontSize: 20
    },
    valorkWh: {
        paddingHorizontal: 80,
        fontSize: 20
    },
    kWh: {
        paddingHorizontal: 20,
        fontSize: 23,
        lineHeight: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        fontWeight: "bold"
    },
    tarifa: {
        width: "100%",
        textAlign: "center",
        fontSize: 25,
        lineHeight: 40,
        paddingTop: 50,
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
    },
    bandeira: {
        width: "100%",
        textAlign: "center",
        fontSize: 20
    }, 
    corrente:{
        paddingHorizontal: 70,
        fontSize: 25,
        lineHeight: 40,
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec"
    },
    tensao: {
        paddingHorizontal: 20,
        fontSize: 25,
        lineHeight: 40,
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec"
    },
    valorC: {
        paddingHorizontal: 95,
        fontSize: 20,
        lineHeight: 40
    },
    valorT: {
        paddingHorizontal: 50,
        fontSize: 20,
        lineHeight: 40
    },
    potencia: {
        width:"100%",
        textAlign: "center",
        fontSize: 25,
        lineHeight: 40,
        fontWeight: "bold",
        borderBottomWidth: 2,
        borderBottomColor: "#ececec",
        paddingTop: 50
    },
    valorP: {
        width: "100%",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 40
    },
    consumo: {
        flexDirection: "row",
        paddingTop: 40
    },
    sensores: {
        flexDirection: "row",
        paddingTop: 60
    },
    valor: {
        flexDirection: "row"
    },
    valores:{
        flexDirection: "row"
    }
});