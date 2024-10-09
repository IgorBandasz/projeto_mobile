import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import Telalogin from "../layouts/Telalogin";
import Tellogin from "../layouts/TelaPrincipal";

type RootStackParamList = {
    Telalogin: undefined;
    
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator 
             initialRouteName="Telalogin" 
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Telalogin" component={Telalogin} />
        </Stack.Navigator>
    );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList, 
    'Telalogin'>;    

export default HomeNavigator;
export type {
    PrincipalProps
};