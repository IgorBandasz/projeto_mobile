import { StyleSheet } from "react-native";

//o StyleSheet é a folha de estilo, equivalente ao css
const styles = StyleSheet.create({
    tela: {
        flex: 1, 
        backgroundColor: '#FFFACD' 
    },
    titulo1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black'
    },
    titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    texto_botao: {
        fontSize: 20,
        color: 'white'
    },
    
    caixa_texto: {
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },

    largura_70: {
        width: '70%'
    },

    imagem_200: {
        width: 200,
        height: 200
    },

    card:{
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        marginVertical: 5
    },
    click: {
        opacity: 0.5
    }
});

export {styles};