import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import { Produto } from "../types/Produto";

type StateProps={
  onClick: (texto: string) => void;
}

const ExemploState = (props: StateProps) => {
  //Funciona para guardar o texto do campo
  const [frase, setFrase] = useState('bom dia');
  const [nome, setNome] = useState('');

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
        onPress={() => { props.onClick(frase) }}
      >
        <Text style={styles.texto_botao}>Entrar</Text>
      </Pressable>
    </View>
  );
}

export default ExemploState;