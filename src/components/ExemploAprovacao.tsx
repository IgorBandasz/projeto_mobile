import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import {styles} from '../styles/stylesPrincipal';



const ExemploAprovacao = () => {
  
    const [nome, setnome] = useState('a');
  const [nota1, setnota1] = useState(0);
  const [nota2, setnota2] = useState(0);
  
  
  function verificarAprovacao() {
    if ((nota1 + nota2) / 2 >= 7.0) {
      return 'parabens o aluno ' + nome + ' foi aprovado!!';
    } else {
      return 'infelizmente o aluno ' + nome + ' foi reprovado, melhore';
    }
  }

  return (
    
    <>
    <View>
        <Text style={styles.titulo1}>nome</Text>
      </View>

      <TextInput
        style={[styles.caixa_texto]}
        onChangeText={(text)=> setnome(text)}
      />

        <Text style={styles.titulo1}>primeira nota</Text>
        
        

 
<TextInput
value={nota1.toString()}
onChangeText={(text)=> setnota1(Number.parseInt(text))}
        style={[styles.caixa_texto]}

      />

       <Text style={styles.titulo1}>segunda nota  </Text>

      <TextInput
       value={nota2.toString()}
       onChangeText={(text)=> setnota2(Number.parseInt(text))}
               style={[styles.caixa_texto]}
      />

      <Text style={styles.titulo1}>resposta:{verificarAprovacao()}</Text>
    </>
  );
};
export default ExemploAprovacao;
