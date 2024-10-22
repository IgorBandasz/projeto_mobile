import { useState, useEffect } from "react";
import { Alert, Pressable, FlatList, StyleSheet, Text, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { ConsProdutoProps } from "../navigation/HomeNavigator";
import { Produto } from "../types/Produto";
import { styles } from "../styles/styles";

const TelaConsProduto = (props: ConsProdutoProps) => {
  const [produtos, setProdutos] = useState([] as Produto[]);

  //Buscar os dados quando abrir a tela
  useEffect(() => {
    const subscribe = firestore()
      .collection('produtos')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {

          return {
            id: doc.id,
            ...doc.data()
          }

        }) as Produto[];

        setProdutos(data);
      });

    return () => subscribe();
  }, []);

  return (
    <View style={styles.tela}>

      <Text style={styles.tituloTela}>Listagem de Produtos</Text>
      <FlatList
        data={produtos}
        renderItem={(info) =>
          <ItemProduto
            numeroOrdem={info.index + 1}
            prod={info.item} />} />


      <View
        style={styles.centralizar}>
        <Pressable
          style={[styles.botao, { width: '40%' }]}
          onPress={() => { props.navigation.goBack() }}>
          <Text style={styles.texto_botao}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

type ItemProdutoProps = {
  numeroOrdem: number;
  prod: Produto;
}

const ItemProduto = (props: ItemProdutoProps) => {

  return (
    <View style={styles.card}>
      <View style={styles_local.dados_card}>
        <Text style={{ fontSize: 30, color: 'black' }}>
          {props.numeroOrdem + ' - ' + props.prod.nome}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Id:{props.prod.id}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Código de Barras:{props.prod.codigoBarras}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Preço: R${props.prod.preco.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

export default TelaConsProduto;

const styles_local = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFACD'
  },
  titulo: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black'
  },
  card: {
    borderWidth: 2,
    borderColor: 'grey',
    margin: 5,
    borderRadius: 10,
    padding: 3,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  dados_card: {
    flex: 1
  },
  botao_deletar: {
    backgroundColor: 'red',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao_alterar: {
    backgroundColor: 'yellow',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto_botao_card: {
    fontWeight: "bold",
    fontSize: 40,
    color: 'black'
  }
});
