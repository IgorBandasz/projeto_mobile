import React from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/stylesPrincipal.ts';
import ExemploAprovacao from '../components/ExemploAprovacao';
import login from '../components/login';


const TelaPrincipal = (props: PrincipalProps) => {

function Coisas(){
    props.navigation.navigate('TelaCoisas',{valor:1});
}


    return (
        
            <ImageBackground style={styles.tela} source={{uri: 'https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png'}}>
 
         <Pressable style={{backgroundColor:'#921fd1',padding:10,borderRadius:50}}
       onPress={()=>{props.navigation.goBack()}}>
<Text style={{fontSize:20,color:"white"}}>
    voltar
</Text>
        
       </Pressable>
      
       <Pressable style={{ marginTop: "90%",backgroundColor:'#921fd1',padding:10,borderRadius:50}}
       onPress={Coisas}>
<Text style={{fontSize:20,color:"white"}}>
    as coisas
</Text>
</Pressable>
       
        </ImageBackground>
        
    );
}

export default TelaPrincipal;
