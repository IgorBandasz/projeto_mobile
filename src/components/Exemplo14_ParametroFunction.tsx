import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import { Produto } from "../types/Produto";

type ExemploProps={
  onClick?: () => void; //O parâmetro é uma função sem parâmetros e que o retorno é void
}

const Exemplo14_ParametroFunction = (props: ExemploProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <Pressable
        style={styles.botao}
        onPress={() => { props.onClick && props.onClick() }}>
        <Text style={styles.texto_botao}>Acionar Evento</Text>
      </Pressable>
    </View>
  );
}

export default Exemplo14_ParametroFunction;