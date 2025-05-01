import React from 'react';
import {Text} from 'react-native';
import { styles } from '../styles/styles';

type NomeProps = {
    nome:string;
    sobrenome?: string;
}

const NomePersonalizado = (props: NomeProps) => {
  return (
    <Text style={styles.titulo2}>
        {props.nome + ' ' + props.sobrenome}
    </Text>
  )
};

const Batatinha = () => {
  return (
    <NomePersonalizado 
       nome='Igor'
      />
  );
}

export default NomePersonalizado;
export {Batatinha}; 