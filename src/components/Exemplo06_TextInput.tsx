import { TextInput, View } from "react-native";
import { styles } from "../styles/styles";

const Exemplo06_TextInput = () => {
    return (
        <View>
            <TextInput 
                defaultValue="Digite aqui"
                style={styles.caixa_texto}/>
            <TextInput 
                defaultValue="Informe seu nome"/>
            <TextInput 
                defaultValue="Informe seu email"/>        
        </View>
    );
}

export default Exemplo06_TextInput;