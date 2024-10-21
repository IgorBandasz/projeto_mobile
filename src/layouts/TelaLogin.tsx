import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert, ImageBackground } from 'react-native';
import { LoginProps } from '../navigation/HomeNavigator';
import auth from "@react-native-firebase/auth";
import { styles } from '../styles/styles';

const TelaLogin = (props: LoginProps) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  function logar() {
    if (verificaCampos()) {
      auth()
        .signInWithEmailAndPassword(login, senha)
        .then(() => {
          props.navigation.navigate('TelaPrincipal', {texto:''})
        })
        .catch((error) => tratarErros(String(error)))
    }
  }

  function verificaCampos() {
    if (login == '') {
      Alert.alert("Email em branco", "Digite um email")
      return false;
    }
    if (senha == '') {
      Alert.alert("Senha em branco", "Digite uma senha")
      return false;
    }

    return true;
  }

  function tratarErros(erro: string) {
    console.log(erro);
    
    if (erro.includes("[auth/invalid-email]")) {
      Alert.alert("Email inválido", "Digite um email válido")
    } else if (erro.includes("[ INVALID_LOGIN_CREDENTIALS ]")) {
      Alert.alert("Login ou senha incorretos", "")
    } else if (erro.includes("[auth/invalid-credential]")) {
      Alert.alert("Login ou senha incorretos", "")
    } else {
      Alert.alert("Erro", erro)
    }
  }

  function redefinirSenha() {
    if (login == '') {
      Alert.alert("Email em branco", "Preencha o email")
      return
    }

    auth()
      .sendPasswordResetEmail(login)
      .then(() => Alert.alert("Redefinir senha",
        "Enviamos um email para você redefinir sua senha"))
      .catch((error) => console.log(error))
  }

  return (
    <View style={styles.tela}>

      <View style={styles_local.painel_imagem}>
        <Image
          style={styles_local.imagem}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png' }}
        />
      </View>

      <View style={styles_local.container_login}>
        <View style={{ flex: 1, alignItems: 'center', }}>
          <Text
            style={styles_local.titulo_caixa_texto}>
            Login
          </Text>
          <TextInput
            style={styles_local.caixa_texto}
            onChangeText={(text) => setLogin(text)} />

          <Text
            style={styles_local.titulo_caixa_texto}>
            Senha
          </Text>
          <TextInput
            style={styles_local.caixa_texto}
            secureTextEntry={true}
            onChangeText={(text) => setSenha(text)} />

          <Pressable
            style={(state) => [styles_local.botao, state.pressed ? { opacity: 0.5 } : null]}
            onPress={() => { logar() }}
          >
            <Text style={styles_local.desc_botao}>Entrar</Text>
          </Pressable>
        </View>

        <View
          style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Pressable
            style={(state) => [styles_local.botao, state.pressed ? { opacity: 0.5 } : null]}
            onPress={() => { props.navigation.navigate('TelaCadUsuario') }}
          >
            <Text style={styles_local.desc_botao}>Cadastrar-se</Text>
          </Pressable>

          <Pressable
            style={(state) => [styles_local.botao, state.pressed ? { opacity: 0.5 } : null]}
            onPress={() => {redefinirSenha()}}
          >
            <Text style={styles_local.desc_botao}>Esqueceu a senha</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default TelaLogin;

const styles_local = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFACD'
  },
  container_login: {
    flex: 2,

  },
  titulo_caixa_texto: {
    fontSize: 25,
    color: 'black'
  },
  caixa_texto: {
    width: '70%',
    color: 'black',
    borderWidth: 1,
    borderRadius: 4,
    margin: 3,
    backgroundColor: 'white',
    fontSize: 23
  },
  botao: {
    justifyContent: 'center',
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 10,
    //marginTop: 20,
    borderRadius: 10
  },
  desc_botao: {
    fontSize: 20,
    color: 'white'
  },
  painel_imagem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: "center"
  }
});
