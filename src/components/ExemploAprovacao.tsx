import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import {styles} from '../styles/stylesPrincipal';

type InfoProps = {
  nome: String;
  nota1: number;
  nota2: number;
};

const ExemploAprovacao = (props: InfoProps) => {
  function verificarAprovacao() {
    if ((props.nota1 + props.nota2) / 2 >= 7.0) {
      return 'parabens o aluno ' + props.nome + ' foi aprovado!!';
    } else {
      return 'infelizmente o aluno ' + props.nome + ' foi reprovado, melhore';
    }
  }

  return (
    
    <>
    <View>
        <Text style={styles.titulo1}>nome</Text>
      </View>

      <TextInput
        style={[styles.caixa_texto]}
        defaultValue="Digite seu nome"
      />

        <Text style={styles.titulo1}>primeira nota</Text>

<TextInput
        style={[styles.caixa_texto]}
        defaultValue="Digite sua primeira nota"
      />

       <Text style={styles.titulo1}>segunda nota </Text>

      <TextInput
        style={[styles.caixa_texto]}
        defaultValue="Digite sua sua segunda nota"
      />

      <Text style={styles.titulo1}>resposta:{verificarAprovacao()}</Text>
    </>
  );
};
export default ExemploAprovacao;
