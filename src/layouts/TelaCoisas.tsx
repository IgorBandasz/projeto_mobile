import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CoisasProps} from '../navigation/HomeNavigator';
import {styles} from '../styles/stylesLogin.ts';

const Telacoisas = (props: CoisasProps) => {
  function voltar() {
    props.navigation.goBack();
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
            style={state => [
              styles.botaoEntrar,
              {marginTop: 50},
              state.pressed ? {opacity: 0.5} : null,
            ]}
            onPress={() => {
              props.navigation.navigate('TelaCoisa', {valor: 1});
            }}>
            <Text style={{color: 'white', fontSize: 40}}>Exemplo Calculo  </Text>
          </Pressable>
          <Pressable
            style={state => [
              styles.botaoEntrar,
              {marginTop: 50},
              state.pressed ? {opacity: 0.5} : null,
            ]}
            onPress={() => {
              props.navigation.navigate('TelaCoisa', {valor: 2});
            }}>
            <Text style={{color: 'white', fontSize: 40}}>Exemplo Aprovacao</Text>
          </Pressable>

          <Pressable
            style={state => [
              styles.botaoEntrar,
              {marginTop: 50},
              state.pressed ? {opacity: 0.5} : null,
            ]}
            onPress={() => {
              props.navigation.navigate('TelaCoisa', {valor: 3});
            }}>
            <Text style={{color: 'white', fontSize: 40}}> Exemplo views</Text>
          </Pressable>

          <Pressable
            style={state => [
              styles.botaoEntrar,
              {marginTop: 50},
              state.pressed ? {opacity: 0.5} : null,
            ]}
            onPress={() => {
              props.navigation.navigate('TelaCoisa', {valor: 4});
            }}>
            <Text style={{color: 'white', fontSize: 40}}>text 4</Text>
          </Pressable>

          <Pressable
            style={state => [
              styles.botaoEntrar,
              {marginTop: 50},
              state.pressed ? {opacity: 0.5} : null,
            ]}
            onPress={() => {
              props.navigation.navigate('TelaCoisa', {valor: 5});
            }}>
            <Text style={{color: 'white', fontSize: 40}}>text 5</Text>
          </Pressable>
          
        </View>

      </ScrollView>

    </ImageBackground>
  );
};

export default Telacoisas;
