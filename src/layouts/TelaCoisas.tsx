import React from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CoisasProps} from '../navigation/HomeNavigator';
import { styles } from '../styles/stylesPrincipal.ts';



const Telacoisas = (props: CoisasProps) => {
 function View(){
    props.navigation.navigate('TelaViews')
 }



return(

<ScrollView>
            <ImageBackground style={styles.tela} source={{uri: 'https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png'}}>
 
         <Pressable style={{backgroundColor:'#921fd1',padding:10,borderRadius:50}}
       onPress={()=>{props.navigation.goBack()}}>
<Text style={{fontSize:20,color:"white"}}>
    voltar
</Text>
        
       </Pressable>
      
       <Pressable style={styles.coisas}
      >
<Text style={{fontSize:20,color:"white"}}
onPress={View}>
views
</Text>
</Pressable>
       
      
       <Pressable style={styles.coisas}
      >
<Text style={{fontSize:20,color:"white"}}>
  exemplo calcular
</Text>
</Pressable>
       <Pressable style={styles.coisas}
      >
<Text style={{fontSize:20,color:"white"}}>
    exemplo Aprovacao
</Text>
</Pressable>
       
        </ImageBackground>
        </ScrollView>
    );

}
export default Telacoisas;