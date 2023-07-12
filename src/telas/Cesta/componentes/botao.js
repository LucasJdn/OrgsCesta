import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Botao({ butao }){
    return <>
        <TouchableOpacity style={estilos.botao} onPress={() => {}}>
            <Text style={estilos.textoBotao}>{ butao }</Text>
        </TouchableOpacity>

    </>
}

const estilos=StyleSheet.create({
    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },

    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },



})