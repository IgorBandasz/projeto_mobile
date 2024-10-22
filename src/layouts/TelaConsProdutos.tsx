import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ConsProdutosprops} from '../navigation/HomeNavigator.tsx';
import {styles} from '../styles/stylesPrincipal.ts';
import firestore from '@react-native-firebase/firestore';
import { Produto } from '../types/produto.ts';




const TelaConsProdutos = (props: ConsProdutosprops) => {
const [produtos,setProdutos]=useState([]as Produto[]);


//pra executar quando abrir a tela
  useEffect(()=>{

const subscribe = firestore()

.collection('produtos')

.onSnapshot(querySnapshot =>{ const data = querySnapshot.docs.map(doc => {

  return{
    //vai juntar o id do produto do firebase
id: doc.id,...doc.data()


  }
})as Produto[];
setProdutos(data)
});
return()=> subscribe();

  })
return(
  <ImageBackground
  style={{flex: 1}}
  source={{
    //https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png
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
       
          <View style={{flex:1 ,alignItems:"center"}}>
         
        <Text style={{marginBottom:50,color:"white",fontSize:40,fontWeight: 'bold'}} >lista de produtos</Text>
        <FlatList style={{}}
data={produtos}
renderItem={(item) => {return(
<View style={{
                        marginBottom:20,
                        borderColor:'black',
                        borderRadius:30 ,backgroundColor:"white"
                    }}>
                      <Text style={{textAlign:"center",                        
                        fontSize: 40,
                        fontWeight: 'bold',color:"#921fd1"}}>
                          {item.item.nome} 
                        </Text>


<Text style={{margin:10 ,fontSize:20,color:"black"}}>
                            {
                            
                            '\ncodigo de barras : '+item.item.codigoBarras+
                            '\npreço : R$'+item.item.preco.toFixed(2)
                            }
                        </Text>

</View>


);}}/>

        
        
        </View>
    



</ScrollView>
</ImageBackground>
);

}

export default TelaConsProdutos;