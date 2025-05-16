import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Produto } from "../types/Produto";
import { CadProdutoProps } from "../navigation/HomeNavigator";
import { styles } from "../styles/styles";

import firestore from "@react-native-firebase/firestore";

const TelaCadProduto = (props: CadProdutoProps) => {
  const [nome, setNome] = useState('');
  const [codigoBarras, setCodigoBarras] = useState('');
  const [preco, setPreco] = useState('');

  function cadastrar() {
    if (verificaCampos()) {
      //crie um objeto do tipo Produto
      let produto = {
        nome: nome,
        codigoBarras: codigoBarras,
        preco: Number.parseFloat(preco)
      } as Produto;


      //adiciona o objeto produto na tabela produtos
      firestore()
        .collection('produtos') //tabela
        .add(produto) //objeto que recém montamos
        .then(() => {
          Alert.alert("Produto", "Cadastrado com sucesso!");
          props.navigation.goBack();
        })
        .catch((error) => {
          Alert.alert("Erro", String(error));
        });
    }
  }

  function verificaCampos() {
    if (!nome) { //se não existe valor em NOME
      Alert.alert("Nome em branco",
        "Digite um nome")
      return false;
    }
    if (!codigoBarras) {
      Alert.alert("Código de Barras em branco",
        "Digite um código de barras")
      return false;
    }
    if (!preco) {
      Alert.alert("Preço em branco",
        "Digite um preço")
      return false;
    }

    let precoNumero = Number.parseFloat(preco)
    if (precoNumero <= 0) {
      Alert.alert("Preço incorreto",
        "Digite um preço maior do que zero")
      return false;
    }

    return true;
  }

  return (
    <View
      style={styles.tela}>
      <Text style={styles.tituloTela}>Cadastro de Produto</Text>
      <Text
        style={styles.titulo_campos}>
        Nome
      </Text>
      <TextInput
        style={styles.caixa_texto}
        onChangeText={(text) => { setNome(text) }} />

      <Text
        style={styles.titulo_campos}>
        Código de Barras
      </Text>
      <TextInput
        maxLength={14}
        style={[styles.caixa_texto, { width: '60%' }]}
        onChangeText={(text) => { setCodigoBarras(text) }} />

      <Text
        style={styles.titulo_campos}>
        Preço
      </Text>
      <TextInput
        maxLength={7}
        style={[styles.caixa_texto, { width: '40%' }]}
        onChangeText={(text) => { setPreco(text) }} />

      <Pressable
        style={styles.botao}
        onPress={() => cadastrar()}>
        <Text style={styles.texto_botao}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

export default TelaCadProduto;
