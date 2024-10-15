import React, { useState } from 'react';
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
import {CadastrarProps} from '../navigation/HomeNavigator';
import {styles} from '../styles/stylesCadastrar';

const TelaCadastrar = (props: CadastrarProps) => {

    const[email,setemail] = useState('a');
  const[senha,setSenha] = useState('b');
  const[confSenha,setConfSenha] = useState('c');

   function voltar(){
    props.navigation.navigate('TelaLogin')
   }
   function exibirMessage(){
if(senha==confSenha){
    Alert.alert(
    'dados',
'email : '+email+
'\n senha : '+senha
)
}else{
Alert.alert(
    'as senhas nao sao iguais'
)
}

   }


  return (
    
    <ImageBackground style={styles.tela} source={{uri: 'https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png'}}>
    <View>
        <Text style={styles.titulo2}>cadastrar</Text>

        </View>

        <Text style={styles.titulo1}>email</Text>

     

      <TextInput
        style={[styles.caixa_texto]}
        defaultValue="Digite seu email"
        onChangeText={(Text)=> setemail(Text)}
      />
      
    
<View style={{backgroundColor:'#921fd1',padding:10,marginTop:90,borderRadius:30}}>
       <Text style={styles.titulo1}>senha</Text>
      <TextInput
        style={[styles.caixa_texto]}
        secureTextEntry
        onChangeText={(Text)=> setSenha(Text)}
        
      />
       <Text style={styles.titulo1}>confirmar senha</Text>
      <TextInput
        style={[styles.caixa_texto]}
        secureTextEntry
        onChangeText={(Text)=> setConfSenha(Text)}
        
      />
</View>





    <View style={styles.botoes}>
      <Pressable
        style={state => [
          styles.botoesBaixo,
          state.pressed ? {opacity: 0.5} : null,
          
        ]}onPress={exibirMessage}>
        <Text style={styles.botoesECTxt}>salvar</Text>
      </Pressable>

      <Pressable
        style={state => [
          styles.botoesBaixo,
          state.pressed ? {opacity: 0.5} : null,
        ]}
        onPress={voltar}
        >
        <Text style={styles.botoesECTxt}>cancelar</Text>

      </Pressable>
    </View>
    
    </ImageBackground>
  );
};
export default TelaCadastrar;
