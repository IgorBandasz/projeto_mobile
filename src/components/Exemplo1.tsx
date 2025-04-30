import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, StyleSheet} from 'react-native';
import { styles } from '../styles/styles';

const Exemplo1 = () => {
  //constante
  const url = 'https://reactnative.dev/docs/assets/p_cat2.png';

  //O retorno da função é o que será construído em tela
  return (
    /*Painel que desliza*/
    <ScrollView>
      {/*texto ou label */}
      <Text style={styles.titulo1}>Exemplo 1 com style</Text>
      {/* painel */}
      <View>
        <Text>Text comum sem estilização</Text>

        {/*imagem, o campo source é o caminho da imagem */ }
        <View
          style={stylesLocal.centralizar}>
          <Image
            source={require('../images/icon_app.png')}         
            //source={{uri: url}}
            style={styles.imagem_200}
          />
        </View>
      </View>

      {/*caixa de texto */}
      <TextInput
        style={[styles.caixa_texto, styles.largura_70]}
        defaultValue="Digite aqui"
      />

      {/*isso é um botão */}
      <Pressable
        style={{backgroundColor: 'green', alignItems:'center'}}>
        <Text style={styles.titulo2}>Isso é um Botão</Text>
      </Pressable>

    </ScrollView>
  );
};

export default Exemplo1;

const stylesLocal = StyleSheet.create({
  centralizar: {
      alignItems:'center'
  },
  titulo1: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black'
  },
});
