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
    <text style={styles.titulo2}>
somar:{Somar()}
    </text>
    
    <text style={styles.titulo2}>
subtrair:{Subtrair()}
    </text>
    
    <text style={styles.titulo2}>
Dividir:{Dividir()}
    </text>
    
    <text style={styles.titulo2}>
Multiplicar:{Multiplicar()}
    </text>
    </>
  );
    };
  export default ExemploCalculo;