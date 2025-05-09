import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import Exemplo01 from '../components/Exemplo01';
import Exemplo06_TextInput from '../components/Exemplo06_TextInput';
import Exemplo07_Image from '../components/Exemplo07_Image';
import TelaEx1 from './TelaEx1';
import ExemploStylesText from '../components/Exemplo11_StyleText';
import ExemploStylesView from '../components/Exemplo12_StyleView';
import Exemplo08_Switch from '../components/Exemplo08_Switch';
import Exemplo13_State from '../components/Exemplo13_State';
import Exemplo14_ParametroFunction from '../components/Exemplo14_ParametroFunction';
import ResultadoFinal from '../components/ResultadoFinal';
import Exemplo15_ConstrucaoCondicao from '../components/Exemplo15_ConstrucaoCondicao';
import CampoDeTexto from '../components/CampoDeTexto';

//Componente chamado TelaPrincipal que recebe 
//PrincipalProps 
//como parametro e constrói uma View com o componente 
//HelloWorld e Exemplo1 dentro
const TelaPrincipal = (props: PrincipalProps) => {
  function funcaoClick(texto: string){
    Alert.alert("mensagem:" + texto)
  }

  return (
    <View
      style={[styles.tela]}>
      <Exemplo15_ConstrucaoCondicao/>
    </View>
  );
}

//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
