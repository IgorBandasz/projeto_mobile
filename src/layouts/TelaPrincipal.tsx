import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
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

//Componente chamado TelaPrincipal que recebe 
//PrincipalProps 
//como parametro e constrói uma View com o componente 
//HelloWorld e Exemplo1 dentro

// let prod1 = { nome: 'Bola', codigoBarras: '7894561234560', preco: 20.50 } as Produto;
//     let prod2 = { nome: 'Chiclet', codigoBarras: '78945612', preco: 0.40 } as Produto;
//     let prod3 = { nome: 'Maionese', codigoBarras: '78912365434560', preco: 15.99 } as Produto;
//     let prod4 = { nome: 'Refrigerante', codigoBarras: '7894561239874', preco: 9.99 } as Produto;

//     let listaProdutos = [prod1, prod2, prod3, prod4] as Produto[];

const TelaPrincipal = (props: PrincipalProps) => {

  let listaPessoas = ['Cláudio', 'Ana', 'João', 'Vitória'] as string[];

  let animal1 = { nome: 'Dã', especie: 'Cachorro' } as Animal;
  let animal2 = { nome: 'Entony', especie: 'Gato' } as Animal;
  let animal3 = { nome: 'Merilou', especie: 'Galinha' } as Animal;
  let animal4 = { nome: 'Jack', especie: 'Papagaio' } as Animal;

  let listaAnimais = [animal1, animal2, animal3, animal4] as Animal[];


  let prod1 = { nome: 'Bola', codigoBarras: '7894561234560', preco: 20.50 } as Produto;
  let prod2 = { nome: 'Chiclet', codigoBarras: '78945612', preco: 0.40 } as Produto;
  let prod3 = { nome: 'Maionese', codigoBarras: '78912365434560', preco: 15.99 } as Produto;
  let prod4 = { nome: 'Refrigerante', codigoBarras: '7894561239874', preco: 9.99 } as Produto;

  let listaProdutos = [prod1, prod2, prod3, prod4] as Produto[];

  return (
    <View
      style={[styles.tela]}>

      <Pressable
        style={{ backgroundColor: 'green' }}
        onPress={() => { props.navigation.goBack() }}>
        <Text style={{ fontSize: 40 }}>Voltar</Text>
      </Pressable>

      <Text style={{ fontSize: 50 }}>
        {props.route.params.texto}
      </Text>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.navigate('TelaMenuComponentes') }}>
        <Text style={{ fontSize: 30 }}>Componentes Exemplo</Text>
      </Pressable>

    </View>
  );
}

//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
