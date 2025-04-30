import { useState } from "react";
import { Switch, View } from "react-native";

const Exemplo08_Switch = () => {
    const [ativado, setAtivado] = useState(false);

    return (
        <View>
            <Switch 
                value={ativado} //valor
                onValueChange={(value)=>{setAtivado(value)}} //evento
                />   
            <Switch />  
            <Switch />  
        </View>
    );
}

export default Exemplo08_Switch;