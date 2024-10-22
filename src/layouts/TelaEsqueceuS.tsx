import React, { useState } from 'react';
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
import {EsqueceuProps, PrincipalProps} from '../navigation/HomeNavigator';
import auth from '@react-native-firebase/auth';
import {styles} from '../styles/stylesLogin';
import ExemploAprovacao from '../components/ExemploAprovacao';
import login from '../components/login';

const TelaEsqueceuS = (props: EsqueceuProps) => {
  const [email, setEmail] = useState('');


  function trocarSenha() {
    if(email !=''){
auth()
.sendPasswordResetEmail(email)
.then(()=>Alert.alert('enviamos para o seu email'))
.catch((error)=> console.log(error))

    }
  }
  function voltar() {
    props.navigation.navigate('TelaLogin');
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
        
      <View style={{alignItems: 'flex-start'}}>
          <Pressable
            style={state => [
              styles.botaoEntrar,
              {marginTop: 30},
              state.pressed ? {opacity: 0.5} : null,
            ]}
            onPress={
              voltar
            }>
              
            <Text style={{color: 'white', fontSize: 30}}>voltar</Text>
          </Pressable>
        </View>
        <View style={{flex:1,alignItems:"center"}}>

      

          <View style={{marginTop:50}}>
          <Image 
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6357/6357126.png',
            }}
            style={styles.imagem_200}
          />
          </View>
          <View style={{}}>
            <Text style={styles.titulo1}>email</Text>
          </View>

          <TextInput
            style={[styles.caixa_texto]}
            onChangeText={Text => setEmail(Text)}
          />
          <View style={{borderRadius:30,backgroundColor:"#983aea",marginTop:100,marginBottom:100,padding:20}}>
           <Text style={{ justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'}}>coloque o email que quer trocar a senha </Text>
</View>
<Pressable
            style={state => [
              
              styles.botaoEntrar,
              {marginTop: 30},
              state.pressed ? {opacity: 0.5} : null,
            ]}
            onPress={trocarSenha}>
            <Text style={styles.titulo1}>enviar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default TelaEsqueceuS;
