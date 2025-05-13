import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import Exemplo16_ListaSimples from '../components/Exemplo16_ListaSimples';

//Componente chamado TelaPrincipal que recebe 
//PrincipalProps 
//como parametro e constrói uma View com o componente 
//HelloWorld e Exemplo1 dentro

const listaBase = ['Ana', 'Bruna', 'Carlos', 'Eduardo'] as string[];

const TelaPrincipal = (props: PrincipalProps) => {
  const [listaPessoas, setListaPessoas] = useState(listaBase);

  return (
    <View
      style={[styles.tela]}>
        <Text style={styles.titulo1}>Tela Principal</Text>
      <Pressable
        onPress={()=>{props.navigation.navigate('TelaNova')}}>
        <Text>
          Botão navegar
        </Text>
      </Pressable>
      
    </View>
  );
}

//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
