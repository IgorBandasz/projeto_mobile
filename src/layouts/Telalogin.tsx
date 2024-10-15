import React, { useState } from 'react';
import { Alert, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { LoginProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/stylesLogin';
import Login from '../components/login.tsx';

const Telalogin = (props: LoginProps) => {
    

 const[login,setLogin] = useState('');
  const[senha,setSenha] = useState('');

   function Telacadastrar(){
    props.navigation.navigate('TelaCadastrar');

   }
   function exibirMessage(){
Alert.alert(
    'dados',
'login : '+login+
'\n senha : '+senha

)
props.navigation.navigate('TelaPrincipal');

   }

    
       
  return (
    
        <ImageBackground style={styles.tela} source={{uri: 'https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png'}}>
      <View>
        <Text style={styles.titulo2}>login</Text>

        </View>
    

      <View>
        <Text style={styles.titulo1}>nome</Text>

      </View>

      <TextInput
        style={[styles.caixa_texto]}
        defaultValue="Digite seu nome"
        onChangeText={(Text)=> setLogin(Text)}
      />
      
    

       <Text style={styles.titulo1}>senha</Text>
      <TextInput
        style={[styles.caixa_texto]}
        secureTextEntry
        defaultValue="Digite sua senha"
        onChangeText={(Text)=> setSenha(Text)}
      />
    
      <Pressable onPress={exibirMessage} 
      style={(state)=> [styles.botaoEntrar, state.pressed ? {opacity:0.5} :null]}
      >

      <Text style={styles.titulo1} >entrar</Text>
      
      </Pressable>


          <View style={styles.botoes}>

     <Pressable style={(state)=> [styles.botoesBaixo, state.pressed ? {opacity:0.5} :null]}>
  <Text style={styles.botoesECTxt}>esquceu a senha</Text>
  </Pressable> 
  
  <Pressable style={(state)=> [styles.botoesBaixo, state.pressed ? {opacity:0.5} :null]}
      onPress={Telacadastrar} >
  <Text style={styles.botoesECTxt}>Cadastrar</Text>
  
  </Pressable>
  </View>
 
  
  </ImageBackground>
    
  );
        
    
}

export default Telalogin;
