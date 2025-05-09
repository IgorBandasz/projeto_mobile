import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../styles/styles';


type CampoDeTextoProps = {
    onPressBotao: (texto: string) => void;
}

const CampoDeTexto = (props: CampoDeTextoProps) => {
    const [texto, setTexto] = useState('');

    return (
        <View>

            <TextInput value={texto} onChangeText={setTexto}
                placeholder='Digite algo aqui' />


            <Pressable onPress={() => { props.onPressBotao(texto); }}>
                <Text> Acionar botão </Text></Pressable>

        </View>
    )
};


export default CampoDeTexto;