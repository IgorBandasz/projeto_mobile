import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import { Produto } from "../types/Produto";

const Exemplo15_ConstrucaoCondicao = () => {
  //Funciona para guardar o texto do campo
  const [frase, setFrase] = useState('bom dia');

  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <Text
        style={{ fontSize: 40 }}>
        Frase
      </Text>
      <TextInput
        style={[styles.caixa_texto, { width: 150 }]}
        onChangeText={(text) => {setFrase(text)}} />

      {
        //Se o texto tiver mais de 10 caracteres
        //irá construir o texto "Isso é verdade" na tela
        // frase.length >= 10 &&
        // <Text style={{fontSize:40}}>Frase mais que 10 caracteres</Text>
      }

      {
        //Se o texto tiver mais de 10 caracteres
        //irá construir o texto "condição é verdade" na tela
        //senão irá construir o texto "condição é falsa" na tela
        // frase.length >= 10 ?
        // <Text style={{fontSize:40}}>Frase mais que 10 caracteres</Text>
        // :
        // <Text style={{fontSize:40}}>Frase Menos que 10 caracteres</Text>
      }

      {
        //Se o texto tiver mais de 10 caracteres
        //irá construir o texto "condição é verdade" na tela
        //senão se tiver carcacteres irá construir 
        //o texto "condição é falsa" na tela
        //senão irá construi o texto "Campo é vazio"
        frase.length >= 10 ?
        <Text style={{fontSize:40}}>Frase mais que 10 caracteres</Text>
        :
        ( frase.length > 0 ?
          <Text style={{fontSize:40}}>Frase Menos que 10 caracteres</Text>
          :
          <Text style={{fontSize:40}}>Frase é vazio</Text>
        )
      }

    </View>
  );
}

export default Exemplo15_ConstrucaoCondicao;