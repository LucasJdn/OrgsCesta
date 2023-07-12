import React from 'react';
import { StyleSheet, Text } from 'react-native';
export default function texto ({ children, style }){
    let estilo = estilos.texto;

    if(style.fontweight == 'bold'){
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilos.texto]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
    },

    textoNegrito: {
        fontFamily: "MontserratBold",

    }

})