import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ComponentesProps, MenuComponentesProps, PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import ExemploStylesText from '../components/ExemploStyleText';
import ExemploStylesView from '../components/ExemploStyleView';
import ExemploCalculo from '../components/ExemploCalculo';
import NomePersonalizado, { Batatinha } from '../components/ExemploParametro';
import ListaSimples from '../components/ListaSimples';
import { Produto } from '../types/Produto';
import ListaProdutos from '../components/ListaProdutos';
import ExemploState from '../components/ExemploState';
import { Animal } from '../types/Animal';
import ListaAnimais from '../components/ListaAnimais';
import ExemploEvento from '../components/ExemploEvento';
import ExemploConstrucaoCondicao from '../components/ExemploConstrucaoCondicao';

const TelaComponentes = (props: ComponentesProps) => {
  return (
    <View
      style={[styles.tela]}>

      {
        props.route.params.tipoComponente == 1 &&
        <ExemploCalculo valor1={2} valor2={3} />
      }

      {
        props.route.params.tipoComponente == 2 &&
        <ExemploEvento />
      }

      {
        props.route.params.tipoComponente == 3 &&
        <ExemploState />
      }

      {
        props.route.params.tipoComponente == 4 &&
        <ExemploStylesView/>
      }

      {
        props.route.params.tipoComponente == 5 &&
        <ExemploConstrucaoCondicao />
      }


      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.goBack() }}>
        <Text style={{ fontSize: 40 }}>Voltar</Text>
      </Pressable>

    </View>
  );
}

export default TelaComponentes;
