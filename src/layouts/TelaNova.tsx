import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../styles/styles';
import { NovaProps } from '../navigation/HomeNavigator';


const TelaNova = (props: NovaProps) => {
    return (
        <>
            <Text style={styles.titulo1}> Sua Idade {props.route.params.idade} </Text>
            <Text style={styles.titulo1}> Seu Nome {props.route.params.nome} </Text>
            <Pressable
                onPress={() => { props.navigation.navigate('TelaPrincipal')}}>
                <Text>
                    Botão navegar
                </Text>
            </Pressable>
            <Pressable
                onPress={() => { props.navigation.goBack()}}>
                <Text>
                    Botão voltar navegação
                </Text>
            </Pressable>
        </>
    )
};

export default TelaNova;