import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

type ResultadoFinalProps = {
    nome: string;
    nota1: number;
    nota2: number;
};

const ResultadoFinal = ({ nome, nota1, nota2 }: ResultadoFinalProps) => {
    const media = (nota1 + nota2) / 2;
    const resultado = media >= 7 ? 'Aprovado' : 'Reprovado';

    return (
        <View >
            <Text >Resultado Final</Text>
            <Text >Aluno: {nome}</Text>
            <Text >Média: {media.toFixed(1)}</Text>
            <Text style={media >= 7 && {color: 'green'}}>Resultado: {resultado}</Text>
        </View>
    );
};


export default ResultadoFinal;
