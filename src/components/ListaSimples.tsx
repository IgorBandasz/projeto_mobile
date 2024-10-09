import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import {styles} from '../styles/stylesPrincipal';

type ListaSimplesProps = {
  listaPessoas:String[]
};

const ListaSimples = (props: ListaSimplesProps) => {  
 
    <FlatList
data={props.listaPessoas}
renderItem={({item})=>{
 return (
<Text style={Styles.item}>
nome{item}
</Text>

 )

}}

/>

}
type itemProps={
nome:String
}

const ItemSimples =(Props: itemProps)=>{
return(
<View>
<Text style={Styles.item2}>
{Props.nome}

</Text>

</View>
);
}
export default ListaSimples;

const Styles = StyleSheet.create({
item: {
padding:10,
fontSize:25,
color:"red",
borderWidth:2,
borderColor:"green",
borderRadius:10,
margin:5,
},
item2: {
padding:10,
fontSize:25,
color:"green",
borderWidth:2,
borderColor:"blue",
borderRadius:10,
margin:5,
},


});