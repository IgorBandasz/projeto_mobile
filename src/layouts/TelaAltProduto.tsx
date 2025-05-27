import { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { Produto } from "../types/Produto";
import { AltProdutoProps } from "../navigation/HomeNavigator";
import { styles } from "../styles/styles";

const TelaAltProduto = (props: AltProdutoProps) => {
  const [id,] = useState(props.route.params.id);
  const [nome, setNome] = useState('');
  const [codigoBarras, setCodigoBarras] = useState('');
  const [preco, setPreco] = useState('');

  async function carregar() {
    console.log(id);
    const resultado = await firestore()
      .collection('produtos')
      .doc(id)
      .get();

    const produto = {
      id: resultado.id,
      ...resultado.data()
    } as Produto;

    setNome(produto.nome);
    setCodigoBarras(produto.codigoBarras);
    setPreco(produto.preco.toFixed(2));
  };

  useEffect(() => {
    carregar();
  }, []);

  function alterar() {
    if (verificaCampos()) {
      let produto = {
        nome: nome,
        codigoBarras: codigoBarras,
        preco: Number.parseFloat(preco)
      } as Produto;

      firestore()
        .collection('produtos')
        .doc(id)
        .update(produto)
        .then(() => {
          Alert.alert("Produto", "Alterado com sucesso")
          props.navigation.goBack();
        })
        .catch((error) => console.log(error));
    }
  }

  function verificaCampos() {
    if (!nome) {
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
      <Text style={styles.tituloTela}>Alteração de Produto</Text>
      <Text
        style={styles.titulo_campos}>
        Nome
      </Text>
      <TextInput
        style={styles.caixa_texto}
        defaultValue={nome}
        onChangeText={(text) => { setNome(text) }} />

      <Text
        style={styles.titulo_campos}>
        Código de Barras
      </Text>
      <TextInput
        defaultValue={codigoBarras}
        maxLength={14}
        style={[styles.caixa_texto, { width: '60%' }]}
        onChangeText={(text) => { setCodigoBarras(text) }} />

      <Text
        style={styles.titulo_campos}>
        Preço
      </Text>
      <TextInput
        defaultValue={preco}
        maxLength={7}
        style={[styles.caixa_texto, { width: '40%' }]}
        onChangeText={(text) => { setPreco(text) }} />

      <Pressable
        style={styles.botao}
        onPress={() => alterar()}>
        <Text style={styles.texto_botao}>Alterar</Text>
      </Pressable>
      <Pressable
        style={styles.botao_vermelho}
        onPress={() => { props.navigation.goBack() }}>
        <Text style={styles.texto_botao}>Cancelar</Text>
      </Pressable>
    </View>
  );
}

export default TelaAltProduto;
