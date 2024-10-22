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
    props.navigation.navigate('TelaCoisas');
  }
  function produtos() {
    props.navigation.navigate('TelaCadProdutos');
  }
  function pacientes() {
    props.navigation.navigate('TelaPacientes');
  }

  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        uri: 'https://wallpapers.com/images/hd/purple-galaxy-2880-x-1800-background-srvn2y6n8krndfwp.jpg',
      }}>
      <ScrollView>

        
      <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Pressable
                style={{borderBottomStartRadius:1,
                    borderTopStartRadius:1,
                borderTopEndRadius:1,
              backgroundColor: '#921fd1',
              padding: 10,
              borderRadius: 50,
             
            }}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={{fontSize: 30, color: 'white'}}>voltar</Text>
          </Pressable>
        </View>


        <View style={{flex: 1, alignItems: 'center'}}>
          <Pressable
            style={{borderBottomStartRadius:1,
                borderTopEndRadius:1,
              marginTop: '50%',
              backgroundColor: '#921fd1',
              padding: 10,
              borderRadius: 50,
            }}
            onPress={Coisas}>
            <Text style={{fontSize: 40, color: 'white'}}>menu componentes</Text>
          </Pressable>
          <Pressable
            style={{borderBottomStartRadius:1,
                borderTopEndRadius:1,
              marginTop: '10%',
              backgroundColor: '#921fd1',
              padding: 10,
              borderRadius: 50,
            }}
            onPress={produtos}>
            <Text style={{fontSize: 40, color: 'white'}}>sistema de produtos</Text>
          </Pressable>
          <Pressable
            style={{borderBottomStartRadius:1,
                borderTopEndRadius:1,
              marginTop: '10%',
              backgroundColor: '#921fd1',
              padding: 10,
              borderRadius: 50,
            }}
            onPress={pacientes}>
            <Text style={{fontSize: 40, color: 'white'}}>sistema de pacientes</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default TelaPrincipal;
