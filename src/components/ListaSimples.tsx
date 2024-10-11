import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type ListaSimplesProps = {
    listaPessoas: string[]
}

const ListaSimples = (props: ListaSimplesProps) => {  

    return (
        <FlatList
            data={props.listaPessoas}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.item}>
                        Nome: {item}
                    </Text>
                )
            }}

        />
    )

}

type ItemProps={
    nome: string
}

const ItemSimples = (props: ItemProps) => {
    return (
        <View>
            <Text style={styles.item2}>
                {props.nome}
            </Text>
        </View>
    );
}

export default ListaSimples;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 25,
        color: 'red',
        borderWidth: 2,
        borderColor: 'green', 
        borderRadius: 10,
        margin: 5
    },
    item2: {
        padding: 10,
        fontSize: 25,
        color: 'green',
        borderWidth: 2,
        borderColor: 'blue', 
        borderRadius: 10,
        margin: 5
    },
});






