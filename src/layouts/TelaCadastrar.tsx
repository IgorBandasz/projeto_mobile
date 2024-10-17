import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Auth from "@react-native-firebase/auth"
import {CadastrarProps} from '../navigation/HomeNavigator';
import {styles} from '../styles/stylesCadastrar';

//criaçao das variaveis state para usar na pagina

const TelaCadastrar = (props: CadastrarProps) => {
  const [email, setemail] = useState('a');
  const [senha, setSenha] = useState('b');
  const [confSenha, setConfSenha] = useState('c');

  //funcao para voltar na tela anterior

  function voltar() {
    props.navigation.navigate('TelaLogin');
  }

  //exibi a mensagem que esta pragramada

  function cadastrar() {
    if (senha == confSenha || senha.length <= 8) {
      Auth()
      .createUserWithEmailAndPassword(email,senha)

      //then = depois oque acentece depois do primeiro
      .then(()=>{
        Alert.alert("conta criada com sucesso")
      });

    } else {
      Alert.alert('as senhas nao sao iguais ou a senha e muito pequena');
    }
  }

  return (
    <ImageBackground
      style={styles.tela}
      source={{
        uri: 'https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png',
      }}>


      <View>
        <Text style={styles.titulo2}>cadastrar</Text>
      </View>


      <Text style={styles.titulo1}>email</Text>
      <TextInput
        style={[styles.caixa_texto]}
        defaultValue="Digite seu email"
        onChangeText={Text => setemail(Text)}
      />


      <View
        style={{
          backgroundColor: '#921fd1',
          padding: 10,
          marginTop: 90,
          borderRadius: 30,
        }}>
        <Text style={styles.titulo1}>senha</Text>
        <TextInput
          style={[styles.caixa_texto]}
          secureTextEntry
          onChangeText={Text => setSenha(Text)}
        />
        <Text style={styles.titulo1}>confirmar senha</Text>
        <TextInput
          style={[styles.caixa_texto]}
          secureTextEntry
          onChangeText={Text => setConfSenha(Text)}
        />

      </View>



      <View style={styles.botoes}>
        <Pressable
          style={state => [
            styles.botoesBaixo,
            state.pressed ? {opacity: 0.5} : null,
          ]}
          onPress={cadastrar}>
          <Text style={styles.botoesECTxt}>salvar</Text>
        </Pressable>


        <Pressable

          style={state => [
            styles.botoesBaixo,
            state.pressed ? {opacity: 0.5} : null,
          ]}
          onPress={voltar}>
          <Text style={styles.botoesECTxt}>cancelar</Text>
        </Pressable>

      </View>

    </ImageBackground>
  );
};
export default TelaCadastrar;
function auth() {
  throw new Error('Function not implemented.');
}

