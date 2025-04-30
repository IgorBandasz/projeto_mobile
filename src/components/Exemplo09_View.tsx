import { StyleSheet, Text, View } from "react-native";
import { styles } from "../styles/styles";

const Exemplo09_View = () => {

    return (
        <View style={styles.tela}>
            <View style={[styles_local.fundo_azul, styles_local.tamanho_100]} />
            <View style={[styles_local.fundo_laranja, styles_local.tamanho_100]} >
                <Text>Hello World</Text>
            </View>
            <View style={[styles_local.fundo_verde, styles_local.tamanho_100]} />
        </View>
    );
}

export default Exemplo09_View;

const styles_local = StyleSheet.create({
    fundo_azul: {
        backgroundColor: 'blue'
    },
    fundo_laranja: {
        backgroundColor: 'orange'
    },
    fundo_verde: {
        backgroundColor: 'green'
    },
    tamanho_100: {
        width: 100,
        height: 100
    },
});
