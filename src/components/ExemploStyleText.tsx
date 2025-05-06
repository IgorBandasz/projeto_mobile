import React from "react";
import { StyleSheet, Text } from "react-native";

const ExemploStylesText = () => {
    return (
        <>
            <Text style={styles_local.texto1}>Texto 1</Text>
            <Text style={styles_local.texto2}>Texto 2</Text>
            <Text style={styles_local.texto3}>Texto 3</Text>
            <Text style={styles_local.texto4}>Texto 4</Text>
            <Text style={styles_local.texto5}>Texto 5</Text>
            <Text style={[styles_local.titulo, styles_local.negrito]}>Texto 6</Text>
            <Text style={[styles_local.texto5, styles_local.texto1]}>Texto 7</Text>
        </>
    );
}

export default ExemploStylesText;

const styles_local = StyleSheet.create({
    texto1: {
        //cor
        color: 'blue'
    },
    texto2: {
        //cor
        color: '#00BFFF'
    },
    texto3: {
        //espessura do texto
        fontWeight: '900',
        //tamanho da fonte
        fontSize: 50,
    },
    texto4: {
        //estilo da fonte
        fontStyle: 'italic'
    },
    texto5: {
        //cor
        color: 'black',
        //criando sombra para o texto
        textShadowOffset: { width: -20, height: 5 },
        //cor da sombra do texto
        textShadowColor: 'red',
        //embaçar a sombra
        textShadowRadius: 20,
        //tamanho da fonte do texto
        fontSize: 100,
    },
    negrito: {
        //espessura do texto
        fontWeight: 'bold',
    },
    titulo: {
        //tamanho da fonte do texto
        fontSize: 30,
        fontWeight: '100',
    },
});
