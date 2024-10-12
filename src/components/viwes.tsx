import { StyleSheet, View } from "react-native";

const Views = () => {
    return (
        <>
            <View style={styles_local.container_fixo}>
                <View style={[styles_local.fundo_azul, 
                    styles_local.tamanho_50, styles_local.borda]} />
                <View style={[styles_local.fundo_laranja, 
                    styles_local.tamanho_50, styles_local.borda]} />
                <View style={[styles_local.fundo_verde, 
                    styles_local.tamanho_50, styles_local.borda]} />
            </View>
            <View style={styles_local.container_flex}>
                <View style={[styles_local.fundo_azul, 
                    styles_local.flex_pequeno, styles_local.borda]} />
                <View style={[styles_local.fundo_laranja, 
                    styles_local.flex_grande, styles_local.borda]} />
                <View style={[styles_local.fundo_verde, 
                    styles_local.flex_grande, styles_local.borda]} />
            </View>
        </>
    );
}

export default Views;

const styles_local = StyleSheet.create({
    container_fixo: {
        //valor de preenchimento da área disponível
        flex: 1,
        //definição do eixo principal
        //flexDirection: 'row-reverse',
        //posicionamento dos objetos no eixo principal
        justifyContent: 'space-evenly',
        //posicionamento dos objetos no eixo secundário
        alignItems: 'stretch',
        //cor de fundo
        backgroundColor: 'red',
        //margem
        margin: 10,
    },
    container_flex: {
        //valor de preenchimento da área disponível
        flex: 1,
        //definição do eixo principal
        flexDirection: 'row',
        //cor de fundo
        backgroundColor: '#FFFACD',
        //margem
        margin: 10,
        
    },
    fundo_azul: {
        //cor de fundo
        backgroundColor: 'blue'
    },
    fundo_laranja: {
        //cor de fundo
        backgroundColor: 'orange'
    },
    fundo_verde: {
        //cor de fundo
        backgroundColor: 'green'
    },
    tamanho_50: {
        //largura
        width: 50,
        //altura
        height: 50
    },
    flex_pequeno: {
        //valor de preenchimento da área disponível
        flex: 3
    },
    flex_grande: {
        //valor de preenchimento da área disponível
        flex: 2
    },
    borda: {
        //cor da borda
        borderColor: 'black',
        //espessura da borda
        borderWidth: 5
    }
});