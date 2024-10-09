import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/stylesPrincipal.ts';
import ExemploAprovacao from '../components/ExemploAprovacao';
import login from '../components/login';


const TelaPrincipal = (props: PrincipalProps) => {
    return (
        <ScrollView>
            <ImageBackground style={styles.tela} source={{uri: 'https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png'}}>
       

       <ExemploAprovacao nome={"carlos"} nota1={10} nota2={10}/>
       
        </ImageBackground>
        </ScrollView>
    );
}

export default TelaPrincipal;
