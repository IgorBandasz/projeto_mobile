import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import TelaPrincipal from '../layouts/TelaPrincipal';
import TelaCadastrar from '../layouts/TelaCadastrar';
import TelaCoisas from '../layouts/TelaCoisas';
import TelaCoisa from '../layouts/TelaCoisa';
import TelaLogin from'../layouts/Telalogin';
import TelaPacientes from'../layouts/TelaPacientes';
import TelaEsqueceuS from '../layouts/TelaEsqueceuS';
import TelaCadProdutos from '../layouts/TelaCadProdutos';
import TelaConsProdutos from '../layouts/TelaConsProdutos';

//Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
  TelaPrincipal: undefined; //Não possui parâmetros
  TelaLogin: undefined; //Não possui parâmetros
  TelaEsqueceuS: undefined; //Não possui parâmetros
  TelaCadastrar: undefined; //Não possui parâmetros
  TelaCoisas:undefined; //Não possui parâmetros
  TelaCadProdutos:undefined; //Não possui parâmetros
  TelaPacientes:undefined; //Não possui parâmetros
  TelaConsProdutos:undefined; //Não possui parâmetros
  TelaCoisa: {valor: number}; //Não possui parâmetros
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

      <Stack.Screen name="TelaLogin" component={TelaLogin} />

      

      <Stack.Screen name="TelaCadProdutos" component={TelaCadProdutos} />

      <Stack.Screen name="TelaConsProdutos" component={TelaConsProdutos} />

      <Stack.Screen name="TelaPacientes" component={TelaPacientes} />
      
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />

      <Stack.Screen name="TelaCadastrar" component={TelaCadastrar} />

      <Stack.Screen name="TelaEsqueceuS" component={TelaEsqueceuS} />

      <Stack.Screen name="TelaCoisas" component={TelaCoisas} />
      
      <Stack.Screen name="TelaCoisa" component={TelaCoisa} />
      
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
type EsqueceuProps = NativeStackScreenProps<RootStackParamList, 'TelaEsqueceuS'>;
type CadProdutosprops = NativeStackScreenProps<RootStackParamList, 'TelaCadProdutos'>;
type ConsProdutosprops = NativeStackScreenProps<RootStackParamList, 'TelaConsProdutos'>;
type PacientesProps = NativeStackScreenProps<RootStackParamList, 'TelaPacientes'>;


type CadastrarProps = NativeStackScreenProps<
  RootStackParamList,
  'TelaCadastrar'
>;
type CoisasProps = NativeStackScreenProps<
  RootStackParamList,
  'TelaCoisas'
>;
type CoisaProps = NativeStackScreenProps<
  RootStackParamList,
  'TelaCoisa'
>;

//exporta o navegador da pilha para ficar visível para outros arquivos
export default HomeNavigator;

//exporta os tipos de dados para ficar visível para outros arquivos
export type {PrincipalProps, LoginProps, CadastrarProps,CoisasProps,CoisaProps,EsqueceuProps,CadProdutosprops,PacientesProps,ConsProdutosprops};
