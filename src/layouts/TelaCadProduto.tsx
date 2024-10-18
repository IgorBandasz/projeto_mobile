import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { Produto } from "../types/Produto";
import { CadProdutoProps } from "../navigation/HomeNavigator";

const TelaCadProduto = (props: CadProdutoProps) => {
  const [nome, setNome] = useState('');
  const [codigoBarras, setCodigoBarras] = useState('');
  const [preco, setPreco] = useState(0);

  function cadastrar() {
    if (verificaCampos()) {






      //crie um objeto do tipo Produto
      let produto = {
        nome: nome,
        codigoBarras: codigoBarras,
        preco: preco
      } as Produto;

      //adiciona o objeto produto na tabela produtos
      firestore()
        .collection('produtos')
        .add(produto)
        .then(() => {
          Alert.alert("Produto", "Cadastrado com sucesso!");
          props.navigation.goBack();
        })
        .catch((error) => console.log(error));



    }
  }

  function verificaCampos() {
    if (nome == '') {
      Alert.alert("Nome em branco",
        "Digite um nome")
      return false;
    }
    if (codigoBarras == '') {
      Alert.alert("Código de Barras em branco",
        "Digite um código de barras")
      return false;
    }

    return true;
  }

  return (
    <View>
      <Text>Nome</Text>
      <TextInput
        style={styles.caixa_texto}
        onChangeText={(text) => { setNome(text) }} />

      <Text>Código de Barras</Text>
      <TextInput
        maxLength={14}
        style={styles.caixa_texto}
        onChangeText={(text) => { setCodigoBarras(text) }} />

      <Text>Preço</Text>
      <TextInput
        maxLength={7}
        style={styles.caixa_texto}
        onChangeText={(text) => { setPreco(Number.parseFloat(text)) }} />  

      <Pressable
        style={styles.botao}
        onPress={() => cadastrar()}>
        <Text style={styles.desc_botao}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

export default TelaCadProduto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  caixa_texto: {
    width: '70%',
    color: 'black',
    borderWidth: 1,
    borderRadius: 4,
    margin: 3
  },
  botao: {
    justifyContent: 'center',
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  desc_botao: {
    fontSize: 20
  },
  text_area: {
    borderWidth: 1,
    borderColor: 'grey'
  }
});
