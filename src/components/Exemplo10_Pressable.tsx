import { Alert, Image, Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";

const Exemplo10_Pressable = () => {
    function clique(){
        Alert.alert('Aviso', 'Clicou')  
    }

    return (
        <View>
            <Pressable
                onPress={clique}>
                <Text>Botão com Text</Text>
            </Pressable>

            <Pressable
                onPress={clique}>
                <Image
                    source={require('../images/icon_app.png')} //arquivo local      
                    style={styles.imagem_200}/>  
            </Pressable>

            <Pressable
                onPress={clique}>
                <View>
                    <Text>Botão linha1</Text>
                    <Text>Botão linha2</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Exemplo10_Pressable;
