import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { styles } from '../styles/styles';
import { Produto } from '../types/Produto';

type ListaProdutoProps = {
    lista: Produto[] 
}

const ListaProdutos = (props: ListaProdutoProps) => {
    return (
        <>
            <Text style={{fontSize: 40, textAlign: 'center'}}>PRODUTOS</Text>

            <FlatList
                data={props.lista}
                renderItem={({ item }) => <ItemLista produto={item}/>} />

        </>
    )

}

type ItemProps = {
    produto: Produto
}

const ItemLista = (props: ItemProps) => {
    return (
        <View
            style={styles.card}>
            <Text style={styles_local.item2}>
                Nome: {props.produto.nome}
            </Text>
            <Text style={styles_local.item2}>
                Cód. Barras: {props.produto.codigoBarras}
            </Text>
            <Text style={styles_local.item2}>
                Preço: {props.produto.preco.toFixed(2)}
            </Text>
        </View>
    );
}

export default ListaProdutos;

const styles_local = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'red'
    },
    item2: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'green'
    },
});