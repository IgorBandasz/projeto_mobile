import React, {useState} from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from 'react-native';
import {CoisaProps, PrincipalProps} from '../navigation/HomeNavigator.tsx';
import {styles} from '../styles/stylesPrincipal.ts';
import ExemploAprovacao from '../components/ExemploAprovacao.tsx';
import view from '../components/viwes.tsx';
import ExemploCalculo from '../components/ExemploCalcule.tsx';
import ListaSimples from '../components/ListaSimples.tsx';
import Viwes from '../components/viwes.tsx';

const TelaCoisa = (props: CoisaProps) => {
  const [valor] = useState(props.route.params.valor);

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
             marginBottom:50
            }}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={{fontSize: 30, color: 'white'}}>voltar</Text>
          </Pressable>
        </View>

        <View>
          {valor == 1 ? (
            <ExemploCalculo valor1={0} valor2={1} />
          ) : valor == 2 ? (
            <ExemploAprovacao/>
          ) : valor == 3 ? (
              // 
           <Viwes/>
            
          ) : valor == 4 ? (
            <Text style={{fontSize: 40, color: 'white'}}>ex 4</Text>
          ) : (
            valor == 5 && (
              <Text style={{fontSize: 40, color: 'white'}}>ex 5</Text>
            )
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default TelaCoisa;
