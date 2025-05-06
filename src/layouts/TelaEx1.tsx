import React, { useState } from 'react';
import { Alert, Image, Pressable, Switch, Text, TextInput, View } from 'react-native';
import { styles } from '../styles/styles';

const TelaEx1 = () => {
    const [ativado, setAtivado] = useState(false);

    return (
        <View>

            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3126/3126647.png' }}
                style={styles.imagem_200} />

            <Text>Nome:</Text>
            <TextInput
                placeholder='Informe o nome'
                style={{ borderWidth: 3 }} />

            <Text>E-mail:</Text>
            <TextInput
                placeholder='Informe o E-mail'
                style={{ borderWidth: 3 }} />

            <Text>Telefone:</Text>
            <TextInput
                placeholder='Informe o telefone'
                style={{ borderWidth: 3 }} />

            <Text>Possui Comorbidade:</Text>
            <Switch
                value={ativado}
                onValueChange={
                    (value) => {
                        setAtivado(value)
                    }
                } />

            <Pressable
                onPress={() => {Alert.alert('Cadastrar')}}>
                <Text> Cadatrar </Text>
            </Pressable>

            <Pressable
                onPress={() => {Alert.alert('Cancelar')}}>
                <Text> Cancelar </Text>
            </Pressable>
        </View>
    )
};

export default TelaEx1;