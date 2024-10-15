import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import { Produto } from "../types/Produto";

const ExemploConstrucaoCondicao = () => {
  //Funciona para guardar o texto do campo
  const [frase, setFrase] = useState('bom dia');

  //Não funciona para guardar o texto do campo
  let fraseVariavel = '' as string;

  function exibirMensagem() {
    Alert.alert(
      'Valores',
      'Frase:' + frase +
      '\nFrase Variavel:' + fraseVariavel
    )
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <Text
        style={{ fontSize: 40 }}>
        Frase
      </Text>
      <TextInput
        style={[styles.caixa_texto, { width: 150 }]}
        onChangeText={(text) => {
          //Exibe o texto no terminal
          console.log(text);
          //Guarda no state
          setFrase(text);
          //guarda na variável (não funciona)
          fraseVariavel = text
        }} />

      <Pressable
        style={(state) => [styles.botao, state.pressed && styles.click]}
        onPress={() => { exibirMensagem() }}
      >
        <Text style={styles.texto_botao}>Entrar</Text>
      </Pressable>

      {
        //Se o texto tiver mais de 10 caracteres
        //irá construir o texto "Isso é verdade" na tela
        //frase.length >= 10 &&
        //<Text style={{fontSize:40}}>Isso é verdade</Text>
      }

      {
        //Se o texto tiver mais de 10 caracteres
        //irá construir o texto "condição é verdade" na tela
        //senão irá construir o texto "condição é falsa" na tela
        //frase.length >= 10 ?
        //<Text style={{fontSize:40}}>condição é verdade</Text>
        //:
        //<Text style={{fontSize:40}}>condição é falsa</Text>
      }

      {
        //Se o texto tiver mais de 10 caracteres
        //irá construir o texto "condição é verdade" na tela
        //senão se tiver carcacteres irá construir 
        //o texto "condição é falsa" na tela
        //senão irá construi o texto "Campo é vazio"
        frase.length >= 10 ?
        <Text style={{fontSize:40}}>condição é verdade</Text>
        :
        ( frase.length > 0 ?
          <Text style={{fontSize:40}}>condição é falsa</Text>
          :
          <Text style={{fontSize:40}}>Campo é vazio</Text>
        )
      }

    </View>
  );
}

export default ExemploConstrucaoCondicao;