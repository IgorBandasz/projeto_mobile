import React from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PrincipalProps} from '../navigation/HomeNavigator';
import {styles} from '../styles/stylesPrincipal.ts';
import ExemploAprovacao from '../components/ExemploAprovacao';
import login from '../components/login';

const TelaPrincipal = (props: PrincipalProps) => {
  function Coisas() {
    props.navigation.navigate('TelaCoisas', {valor: 1});
  }

  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        uri: 'https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png',
      }}>
      <ScrollView>

        

        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Pressable
            style={{borderBottomStartRadius:1,
                borderTopEndRadius:1,
              backgroundColor: '#921fd1',
              padding: 10,
              borderRadius: 50,
              marginTop: 50,
            }}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={{fontSize: 40, color: 'white'}}>voltar</Text>
          </Pressable>
        </View>


        <View style={{flex: 1, alignItems: 'center'}}>
          <Pressable
            style={{borderBottomStartRadius:1,
                borderTopEndRadius:1,
              marginTop: '90%',
              backgroundColor: '#921fd1',
              padding: 10,
              borderRadius: 50,
            }}
            onPress={Coisas}>
            <Text style={{fontSize: 40, color: 'white'}}>as coisas</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default TelaPrincipal;
