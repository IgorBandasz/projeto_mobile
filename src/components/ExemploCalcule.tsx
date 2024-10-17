import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable} from 'react-native';
import { styles } from '../styles/stylesLogin';

type CalculoProps={
    valor1:number,
    valor2:number
    }
    
    const ExemploCalculo = (props:CalculoProps)=>{

    function Somar (){
    return props.valor1+props.valor2;
    }

    function Subtrair (){
    return props.valor1-props.valor2;
    }

    function Dividir (){
        if(props.valor2 != 0){
    return props.valor1/props.valor2;
        }
        else{
            return 0;
        }
    }

    function Multiplicar (){
    return props.valor1*props.valor2;

    }

  return (
    <>
<View style={{backgroundColor:"#ede8ee",borderRadius:30}}>
    <Text style={{
        textAlign:"center",
        fontSize: 50,
        fontWeight: 'bold',
        color: '#bc19d9'}}>
valor 1 = {props.valor1} 

    </Text>
    <Text style={{
        textAlign:"center",
        fontSize: 50,
        fontWeight: 'bold',
        color: '#bc19d9'}}>
valor 2 = {props.valor2} 

    </Text>
    </View>

    <View style={{alignItems:"center"}}>

    <Text style={{
        marginBottom:50,
        marginTop:50,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'}}>
somar:{Somar()}
    </Text>
    
    <Text style={{
        marginBottom:50,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'}}>
subtrair:{Subtrair()}
    </Text>
    
    <Text style={{
        marginBottom:50,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'}}>
Dividir:{Dividir()}
    </Text>
    
    <Text style={{
        marginBottom:50,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'}}>
Multiplicar:{Multiplicar()}
    </Text>
    </View>
    </>
  );
    };
  export default ExemploCalculo;