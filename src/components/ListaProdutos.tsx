import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/stylesLogin";
import { useState } from "react";

const ExemploState = () => {
  //Funciona para guardar o texto do campo
  const [frase, setFrase] = useState('bom dia');
  const [nome, setNome] = useState('');

  //Não funciona para guardar o texto do campo
  let fraseVariavel = '' as string;

  function exibirMensagem() {
    Alert.alert(
      'Valores',
      'Frase:' + frase +
      '\nFrase Variavel:' + fraseVariavel
    )
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <Text
        style={{ fontSize: 40 }}>
        Frase
      </Text>
      <TextInput
        style={[styles.caixa_texto, { width: 150 }]}
        onChangeText={(text) => {
          //Exibe o texto no terminal
          console.log(text);
          //Guarda no state
          setFrase(text);
          //guarda na variável (não funciona)
          fraseVariavel = text
        }} />

      <Pressable
        onPress={() => { exibirMensagem() }}
      >
        <Text style={{}}>Entrar</Text>
      </Pressable>
      {
    //Funciona para guardar o texto do campo
    const [frase, setFrase] = useState('');
    const [nome, setNome] = useState('');
  
    //Não funciona para guardar o texto do campo
    let fraseVariavel = '' as string;
  
    function voltar() {
      props.navigation.goBack()
    }
  
    return (
      <ImageBackground style={{ flex: 1}} source={{uri: 'https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png'}}>
       <View>
       <Pressable
         style={(state)=> [styles.botaoEntrar, state.pressed ? {opacity:0.5} :null]}
          onPress={() => { voltar() }}
        >
          <Text style={{color:"white",fontSize:30}}>voltar</Text>
        </Pressable> 
        </View>
        <View style={{ flex: 1, alignItems: 'center', }}>
        
        <Text
          style={{ fontSize: 40,color:"white" }}>
          Frase
        </Text>
        <TextInput
          style={[styles.caixa_texto, { width: 150 }]}
          onChangeText={(text) => {
            //Exibe o texto no terminal
            console.log(text);
            //Guarda no state
            setFrase(text);
            //guarda na variável (não funciona)
            fraseVariavel = text
          }} />
  
      
        
      </View>
        
      
    </View>
  );
}

export default ExemploState;