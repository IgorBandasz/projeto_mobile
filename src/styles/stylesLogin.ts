import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


    botoesBaixo:{
        backgroundColor:'#921fd1',
    paddingTop:4,
   padding:10,
    alignItems:'center',    
  
borderRadius:50,


    },
    botoesECTxt:{
fontSize:30, 
color:'white'
    },

    botaoEntrar:{
    backgroundColor:'#921fd1',
    paddingBottom:13,
    paddingRight:3,
    alignItems:'center',
    marginTop:30,
borderRadius:30
},
    botoes: {
            flexDirection: 'row',
            justifyContent: 'space-between', 
            padding: 0, 
            marginTop:'78.7%',
            gap:0
          },

        tela: {
        flex: 1,
        alignItems:'center',
        },

    titulo2: {

justifyContent: 'center',
        marginBottom:"20%",
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    },
    titulo1: {
       justifyContent: 'center',
        marginTop:10,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },

  
    
    
    caixa_texto: {
backgroundColor:'white',
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        marginTop:0,
    width:400
    },

    

    imagem_200: {
        marginLeft:"24%",
        borderRadius: 100,
        marginTop:50,
        width: 200,
        height: 200
    }
});

export {styles};