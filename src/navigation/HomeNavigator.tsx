import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import TelaPrincipal from '../layouts/TelaPrincipal';
import Telalogin from '../layouts/Telalogin';
import TelaCadastrar from '../layouts/TelaCadastrar';
import TelaCoisas from '../layouts/TelaCoisas';
import TelaViews from '../layouts/TelaViews';

//Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
  TelaPrincipal: undefined; //Não possui parâmetros
  TelaLogin: undefined; //Não possui parâmetros
  TelaCadastrar: undefined; //Não possui parâmetros
  TelaCoisas: undefined; //Não possui parâmetros
  TelaViews: undefined; //Não possui parâmetros
};

//Cria a Stack (tipo de navegação onde as telas estão em uma "pilha")
//com o RootStackParamList definindo as telas da stack
const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaLogin" //nome da tela inicial
      screenOptions={{headerShown: false}} //headerShown define se o cabeçalho irá ser exibido
    >
      {/* define uma tela dando um nome(igual ao RootStackParamList) e qual o componente será carregado */}

      <Stack.Screen name="TelaLogin" component={Telalogin} />

      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />

      <Stack.Screen name="TelaCadastrar" component={TelaCadastrar} />

      <Stack.Screen name="TelaCoisas" component={TelaCoisas} />
      
      <Stack.Screen name="TelaViews" component={TelaViews} />
      
    </Stack.Navigator>
  );
};

//cria as propriedades da TelaPrincipal, que nesse caso é undefined
//essas propriedades são usadas lá em layouts/TelaPincipal.tsx
type PrincipalProps = NativeStackScreenProps<
  RootStackParamList,
  'TelaPrincipal'
>;
type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;

type CadastrarProps = NativeStackScreenProps<
  RootStackParamList,
  'TelaCadastrar'
>;
type CoisasProps = NativeStackScreenProps<
  RootStackParamList,
  'TelaCoisas'
>;
type ViewsProps = NativeStackScreenProps<
  RootStackParamList,
  'TelaViews'
>;

//exporta o navegador da pilha para ficar visível para outros arquivos
export default HomeNavigator;

//exporta os tipos de dados para ficar visível para outros arquivos
export type {PrincipalProps, LoginProps, CadastrarProps,CoisasProps,ViewsProps};
