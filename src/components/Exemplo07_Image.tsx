import { Image, Text, View } from "react-native";
import { styles } from "../styles/styles";

function soma(numero1: number, numero2: number){
    return numero1+numero2;
}



const Exemplo07_Image = () => {
    const url = 'https://reactnative.dev/docs/assets/p_cat2.png';
    
    

    return (
        <View>
            <Image
                source={require('../images/icon_app.png')} //arquivo local      
                style={styles.imagem_200}/>       

            <Image
                source={{uri: url}} //arquivo na web
                style={styles.imagem_200}/>    

            <Text style={{fontSize:100}}>{soma(7,7)}</Text>    
        </View>
    );
}

export default Exemplo07_Image;