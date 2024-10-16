import React, { useState } from 'react';
import { Alert, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { CoisasProps} from '../navigation/HomeNavigator';
import { styles } from '../styles/stylesLogin.ts';



const Telacoisas = (props: CoisasProps) => {
  
  
    function voltar() {
      props.navigation.goBack()
    }
  
    return (
      <ImageBackground  style={{flex: 1}}source={{uri: 'https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png'}}>
       <View style={{alignItems:"flex-start"}}>
       <Pressable
         style={(state)=> [styles.botaoEntrar, state.pressed ? {opacity:0.5} :null]}
          onPress={() => { voltar() }}
        >
          <Text style={{color:"white",fontSize:40}}>voltar</Text>
        </Pressable> 
        </View>
        <View style={{ flex: 1, alignItems: 'center', }}>
        
        <Pressable style={(state)=> [styles.botaoEntrar, state.pressed ? {opacity:0.5} :null]}
        onPress={() => { props.navigation.navigate("TelaCoisa",{valor:1})}}>

<Text style={{color:"white",fontSize:40}}>text 1</Text>
        
        </Pressable>



        
      </View>
      </ImageBackground>
    );
  }


export default Telacoisas;