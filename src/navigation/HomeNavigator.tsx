import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";
import TelaMenuComponentes from "../layouts/TelaMenuComponentes";
import TelaComponentes from "../layouts/TelaComponentes";
import TelaCadUsuario from "../layouts/TelaCadUsuario";
import TelaCadProduto from "../layouts/TelaCadProduto";
import TelaListaAtendimento from "../layouts/TelaListaAtendimento";
import TelaConsProduto from "../layouts/TelaConsProduto";

//Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
  TelaPrincipal: {texto: string}; 
  TelaLogin: undefined;
  TelaMenuComponentes: undefined;
  TelaComponentes: {tipoComponente: number};
  TelaCadUsuario: undefined;
  TelaCadProduto: undefined;
  TelaConsProduto: undefined;
  TelaListaAtendimento: undefined;
};

//Cria a Stack (tipo de navegação onde as telas estão em uma "pilha")
//com o RootStackParamList definindo as telas da stack
const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaLogin" //nome da tela inicial
      screenOptions={{ headerShown: false }} //headerShown define se o cabeçalho irá ser exibido
    >

      {/* define uma tela dando um nome(igual ao RootStackParamList) e qual o componente será carregado */}
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="TelaLogin" component={TelaLogin}/>
      <Stack.Screen name="TelaMenuComponentes" component={TelaMenuComponentes}/>
      <Stack.Screen name="TelaComponentes" component={TelaComponentes}/>
      <Stack.Screen name="TelaCadUsuario" component={TelaCadUsuario}/>

      <Stack.Screen name="TelaCadProduto" component={TelaCadProduto}/>
      <Stack.Screen name="TelaConsProduto" component={TelaConsProduto}/>

      <Stack.Screen name="TelaListaAtendimento" component={TelaListaAtendimento}/>
    </Stack.Navigator>
  );
}

//cria as propriedades da TelaPrincipal, que nesse caso é undefined
//essas propriedades são usadas lá em layouts/TelaPincipal.tsx
type PrincipalProps = NativeStackScreenProps<RootStackParamList,
  'TelaPrincipal'>;

type LoginProps = NativeStackScreenProps<RootStackParamList,
  'TelaLogin'>; 
  
type MenuComponentesProps = NativeStackScreenProps<RootStackParamList,
  'TelaMenuComponentes'>;

type ComponentesProps = NativeStackScreenProps<RootStackParamList,
  'TelaComponentes'>;  

type CadUsuarioProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadUsuario'>;   

type CadProdutoProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadProduto'>;  

type ListaAtendimentoProps = NativeStackScreenProps<RootStackParamList,
  'TelaListaAtendimento'>;   

type ConsProdutoProps = NativeStackScreenProps<RootStackParamList,
  'TelaConsProduto'>;  

//exporta o navegador da pilha para ficar visível para outros arquivos    
export default HomeNavigator;

//exporta os tipos de dados para ficar visível para outros arquivos
export type {
  PrincipalProps,
  LoginProps,
  MenuComponentesProps,
  ComponentesProps,
  CadUsuarioProps,
  CadProdutoProps,
  ListaAtendimentoProps,
  ConsProdutoProps
};