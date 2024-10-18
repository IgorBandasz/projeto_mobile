import React, { useState } from 'react';
import {
    Alert,
  ImageBackground,
  Pressable,
  ScrollView,
 
  Text,
  TextInput,
  View,
} from 'react-native';
import { Produto } from '../types/produto';
import {CadProdutosprops, PrincipalProps} from '../navigation/HomeNavigator';
import {styles} from '../styles/stylesPrincipal.ts';
import firestore from '@react-native-firebase/firestore';

const TelaCadProdutos = (props: CadProdutosprops) => {
    const [nome,setnome] = useState('');
    const [codigoBarras,setcodigoBarras] = useState('');
    const [preco,setpreco] = useState(1);
  

function cadastrar(){
    let produto ={
        nome : nome,
        codigoBarras: codigoBarras,
        preco: preco
    }as Produto;

firestore()
.collection('produtos')
.add(produto)
.then(()=>{Alert.alert("produto","produto cadastrado com sucesso!")
props.navigation.goBack();
})

.catch((error)=>console.log(error));

}

  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        uri: 'https://wallpapers.com/images/hd/purple-galaxy-2880-x-1800-background-srvn2y6n8krndfwp.jpg',
      }}>
      <ScrollView>
<View style={{flex: 1, alignItems: 'center'}}>
      <Text style={styles.titulo1}>cadastrar produto</Text>
      </View>
        <View style={{flex: 1, alignItems: 'center'}}>
      
        <Text style={styles.titulo1}>nome</Text>
      <TextInput
        style={[styles.caixa_texto]}
        defaultValue="Digite seu email"
        onChangeText={Text => setnome(Text)}
      />


     
        <Text style={styles.titulo1}>codigoBarras</Text>
        <TextInput
          style={[styles.caixa_texto]}
     
          onChangeText={Text => setcodigoBarras(Text)}
        />
           <Text style={styles.titulo1}>preco</Text>
       <TextInput
       value={preco.toString()}
       onChangeText={(text)=> setpreco(Number.parseInt(text))}
               style={[styles.caixa_texto]}
      />

    
      <Pressable
            style={state => [
              
              
              { 
                 backgroundColor: '#921fd1',
                alignItems: 'center',
                borderBottomStartRadius: 1,
                borderTopEndRadius: 1,
                borderRadius: 30,
                padding: 10,marginTop: 30},
              state.pressed ? {opacity: 0.5} : null,
            ]}onPress={cadastrar}>
            
            <Text style={{ justifyContent: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'}}>enviar</Text>
          </Pressable>

        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default TelaCadProdutos;
