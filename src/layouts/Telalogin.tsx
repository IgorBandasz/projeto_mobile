import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {LoginProps} from '../navigation/HomeNavigator.tsx';
import {styles} from '../styles/stylesLogin.ts';
import Login from '../components/login.tsx';
import auth from '@react-native-firebase/auth';
import TelaEsqueceuS from './TelaEsqueceuS.tsx';

const TelaLogin = (props: LoginProps) => {
  //criaçao das variaveis state para usar na pagina

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  

  function Telacadastrar() {
    props.navigation.navigate('TelaCadastrar');
  }
  function TelaEsquceu() {
    props.navigation.navigate('TelaEsqueceuS');

  }
  

  //exibi a mensagem que esta pragramada

  function logar() {
    if (verificarCampos()) {
      auth()
        .signInWithEmailAndPassword(login, senha)

        //then = depois oque acentece depois do primeiro
        .then(() => {
          Alert.alert('usuario logado com sucesso');
          props.navigation.navigate('TelaPrincipal');
        })

        .catch(error => {
          tratarErros(String(error));
        });
    }
  }

  function verificarCampos(): boolean {
    if (login == '') {
      Alert.alert('Email vazio', 'o email esta vazio');
      return false;
    } else if (senha == '') {
      Alert.alert('Senha em Branco', 'A senha esta vazia');
      return false;
    }
    return true;
  }
  function tratarErros(error: string) {
    console.log(error);
    if (error.includes('[auth/invalid-email]')) {
      Alert.alert('Email Invalido', "o email deve conter '@gmail.com'");
    } else if (error.includes('[INVALID_LOGIN_CREDENTIAlS]')) {
      Alert.alert('email ou senha incorretos', '');
    } else if (error.includes('[auth/invalid-credential]')) {
      Alert.alert('email ou senha incorretos', '');
    } else {
      Alert.alert('Erro muito errado', error);
    }
  }

  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        uri: 'https://wallpapers.com/images/hd/purple-galaxy-2880-x-1800-background-srvn2y6n8krndfwp.jpg',
      }}>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View>
            <Text style={styles.titulo2}>login</Text>
          </View>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/552/552721.png',
            }}
            style={styles.imagem_200}
          />
          <View>
            <Text style={styles.titulo1}>email</Text>
          </View>

          <TextInput
            style={[styles.caixa_texto]}
            onChangeText={Text => setLogin(Text)}
          />

          <Text style={styles.titulo1}>senha</Text>
          <TextInput
            style={[styles.caixa_texto]}
            secureTextEntry
            onChangeText={Text => setSenha(Text)}
          />

          <Pressable
            onPress={logar}
            style={state => [
              styles.botaoEntrar,
              {marginTop: 30},
              state.pressed ? {opacity: 0.5} : null,
            ]}>
            <Text style={styles.titulo1}>entrar</Text>
          </Pressable>

          <View style={styles.botoes}>
            <Pressable
              style={state => [
                styles.botoesBaixo,
                {borderBottomStartRadius: 1, borderTopEndRadius: 1},
                state.pressed ? {opacity: 0.5} : null,
              ]}
              onPress={TelaEsquceu}>
              <Text style={styles.botoesECTxt}>esquceu a senha</Text>
            </Pressable>

            <Pressable
              style={state => [
                styles.botoesBaixo,
                {borderBottomStartRadius: 1, borderTopEndRadius: 1},
                state.pressed ? {opacity: 0.5} : null,
              ]}
              onPress={Telacadastrar}>
              <Text style={styles.botoesECTxt}>Cadastrar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default TelaLogin;
