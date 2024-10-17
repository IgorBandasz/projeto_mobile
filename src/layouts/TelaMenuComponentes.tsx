import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MenuComponentesProps, PrincipalProps } from '../navigation/HomeNavigator';
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

const TelaMenuComponentes = (props: MenuComponentesProps) => {
  return (
    <View
      style={[styles.tela]}>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.navigate(
          'TelaComponentes', {tipoComponente: 1}) 
          }}>
        <Text style={{ fontSize: 40 }}>Exemplo Cálculo</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.navigate(
          'TelaComponentes', {tipoComponente: 2}) 
          }}>
        <Text style={{ fontSize: 40 }}>Exemplo Evento</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.navigate('TelaComponentes', {tipoComponente: 3}) }}>
        <Text style={{ fontSize: 40 }}>Exemplo State</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.navigate('TelaComponentes', {tipoComponente: 4}) }}>
        <Text style={{ fontSize: 40 }}>Exemplo Style View</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.navigate('TelaComponentes', {tipoComponente: 5}) }}>
        <Text style={{ fontSize: 40 }}>Exemplo Construção Condicional</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.goBack() }}>
        <Text style={{ fontSize: 40 }}>Voltar</Text>
      </Pressable>

    </View>
  );
}

export default TelaMenuComponentes;
