import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";

const ExemploEvento = () => {
    function exibirMensagem(){
        console.log('Isso é um log acionado pelo clique');

        Alert.alert('Titulo',
            'Isso é uma mensagem acionada pelo clique');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            
            <Pressable
                style={({pressed}) => [ styles.botao, pressed && styles.click]}
                onPress={() => {exibirMensagem()}}
            >
                <Text style={styles.texto_botao}>Gerar mensagem</Text>
            </Pressable>
        </View>
    );
}

export default ExemploEvento;