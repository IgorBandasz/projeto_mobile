import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Animal } from '../types/Animal';

type ListaAnimaisProps = {
    listaAnimais: Animal[]
}

const ListaAnimais = (props: ListaAnimaisProps) => {
    return (
        <>
            <FlatList
                data={props.listaAnimais}
                renderItem={(info) => {
                    return (
                        <Text style={styles.item}>
                            {(info.index+1) + ' - '
                            + info.item.nome + ' ' + info.item.especie}
                        </Text>
                    )
                }}

            />

            <FlatList
                data={props.listaAnimais}
                renderItem={(info) => <ItemLista animal={info.item}/>} />

        </>
    )

}

type ItemProps = {
    animal: Animal
}

const ItemLista = (props: ItemProps) => {
    return (
        <View>
            <Text style={styles.item2}>
                {props.animal.especie + ' ' + props.animal.nome}
            </Text>
        </View>
    );
}

export default ListaAnimais;

const styles = StyleSheet.create({
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