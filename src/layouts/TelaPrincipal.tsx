import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import Exemplo01 from '../components/Exemplo01';

//Componente chamado TelaPrincipal que recebe 
//PrincipalProps 
//como parametro e constrói uma View com o componente 
//HelloWorld e Exemplo1 dentro
const TelaPrincipal = (props: PrincipalProps) => {
  
  return (
    <View
      style={[styles.tela]}>
        <Exemplo01/>
    </View>
  );
}

//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
