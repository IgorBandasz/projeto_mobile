import React, { useState } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, Alert} from 'react-native';
import { styles } from '../styles/stylesLogin';
import { LoginProps } from '../navigation/HomeNavigator';

const login = (props : LoginProps) => {
  const[login,setLogin] = useState('');
  const[senha,setSenha] = useState('');

   function exibirMessage(){
Alert.alert(
    'dados',
'login : '+login+
'\n senha : '+senha

)

props.navigation.navigate('TelaPrincipal');
   }

  return (
    <ScrollView>
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
      >
  <Text style={styles.botoesECTxt}>Cadastrar</Text>
  
  </Pressable>
  </View>
 
  
  
    </ScrollView>
  );
};

export default login;

