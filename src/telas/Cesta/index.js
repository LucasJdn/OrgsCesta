import React from 'react';
import { Button, StyleSheet,View, FlatList, Text } from 'react-native';

import Texto from '../../componentes/text';

import Topo from './componentes/Top';
import Detalhes from './componentes/detalhes';
import Botao from './componentes/botao';
import Item from './componentes/item';



export default function Cesta( { topo, detalhes, button, itens } ){
    return <>
    <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={( {nome} ) => nome}
        ListHeaderComponent={() => {
           return <>
            <Topo {...topo}/>
            <View style={estilos.cesta}>
                <Detalhes {...detalhes}/>
                <Botao {...button} />
                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
             </View> 
            </>
        }}

    /> 



    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontFamily: "MontserratBold",
    },

});