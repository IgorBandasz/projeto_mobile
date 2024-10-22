import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';

//Componente chamado TelaPrincipal que recebe 
//PrincipalProps 
//como parametro e constrói uma View com o componente 
//HelloWorld e Exemplo1 dentro
const TelaPrincipal = (props: PrincipalProps) => {
  return (
    <View
      style={[styles.tela]}>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.goBack() }}>
        <Text style={styles.texto_botao}>Voltar</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.navigate('TelaMenuComponentes') }}>
        <Text style={styles.texto_botao}>Componentes Exemplo</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.navigate('TelaListaAtendimento') }}>
        <Text style={styles.texto_botao}>Lista de Atendimentos</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.navigate('TelaCadProduto') }}>
        <Text style={styles.texto_botao}>Cadastro de Produtos</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => { props.navigation.navigate('TelaConsProduto') }}>
        <Text style={styles.texto_botao}>Consulta de Produtos</Text>
      </Pressable>

    </View>
  );
}

//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
