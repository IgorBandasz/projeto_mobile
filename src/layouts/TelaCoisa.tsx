import React, { useState } from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View, ViewProps } from 'react-native';
import { CoisaProps, PrincipalProps } from '../navigation/HomeNavigator.tsx';
import { styles } from '../styles/stylesPrincipal.ts';
import ExemploAprovacao from '../components/ExemploAprovacao.tsx';
import view from '../components/viwes.tsx';


const TelaCoisa = (props: CoisaProps) => {
const[valor] = useState(props.route.params.valor);

return(
<ImageBackground style={styles.tela} source={{uri: 'https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png'}}>
{
 valor == 1 ?
 <Text style={{fontSize:40,color:"white"}}>isso e verdade
 </Text>
 :
 (valor == 2 ?
 <Text style={{fontSize:40,color:"white"}}>ta vazio
 </Text>
:
<Text style={{fontSize:40,color:"white"}}>muito pequeno
 </Text>


)
        }
</ImageBackground>
);
}

export default TelaCoisa;