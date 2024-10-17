import { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import auth from "@react-native-firebase/auth";
import { CadUsuarioProps } from "../navigation/HomeNavigator";

const TelaCadUsuario = (props: CadUsuarioProps) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  function cadastrar() {
    auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        Alert.alert("Conta",
          "Cadastrado com sucesso")
        props.navigation.goBack();
      });
  }

  return (
    <View
      style={styles.container}>

      <Text
        style={styles.titulo}>Cadastre-se</Text>

      <Text
        style={styles.titulo_campos}>Email</Text>
      <TextInput
        style={styles.caixa_texto}
        onChangeText={(text) => { setEmail(text) }} />

      <Text
        style={styles.titulo_campos}>Senha</Text>
      <TextInput
        style={styles.caixa_texto}
        secureTextEntry={true}
        onChangeText={(text) => { setSenha(text) }} />

      <Text
        style={styles.titulo_campos}>Confirme a senha</Text>
      <TextInput
        style={styles.caixa_texto}
        secureTextEntry={true}
        onChangeText={(text) => { setConfirmaSenha(text) }}
      />
      <Pressable
        style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
        onPress={() => cadastrar()}
      >
        <Text style={styles.desc_botao}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

export default TelaCadUsuario;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFACD'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 30,
    color: 'black'
  },
  titulo_campos: {
    fontSize: 20,
    color: 'black'
  },
  caixa_texto: {
    width: '70%',
    color: 'black',
    borderWidth: 1,
    borderRadius: 4,
    margin: 3,
    backgroundColor: 'white'
  },
  botao: {
    justifyContent: 'center',
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 15,
    borderRadius: 10
  },
  desc_botao: {
    fontSize: 20,
    color: 'white'
  }
});
