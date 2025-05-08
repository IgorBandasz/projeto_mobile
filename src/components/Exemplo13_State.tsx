import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { use, useState } from "react";
import { Produto } from "../types/Produto";

const Exemplo13_State = () => {
  //Funciona para guardar o texto do campo
  const [frase, setFrase] = useState('bom dia');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);

  //Não funciona para guardar o texto do campo
  let fraseVariavel = '' as string;

  function exibirMensagem() {
    Alert.alert(
      'Valores',
      'Frase State:' + frase +
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
        value={frase}
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
        <Text style={styles.texto_botao}>Botão</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => { exibirMensagem() }}
      >
        <Text style={styles.texto_botao}>Botão novo</Text>
      </Pressable>
    </View>
  );
}

export default Exemplo13_State;