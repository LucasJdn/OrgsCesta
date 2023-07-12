import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import pepino from '../../assets/frutas/Pepino.png';
import batata from '../../assets/frutas/Batata.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo:{
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
    },

    button: {
        butao: "Comprar",
    },

    itens: {
        titulo: "Itens da cesta",
        lista: [{
            nome: "Tomate",
            imagem: tomate
        },
        {
            nome: "Brócolis",
            imagem: brocolis
        },
        {
            nome: "Pepino",
            imagem: pepino
        },
        {
            nome: "Batata",
            imagem: batata
        },
        {
            nome: "Abóbora",
            imagem: abobora
        },
    ]
    }


}

export default cesta;