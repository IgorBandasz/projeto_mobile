import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaNova from "../layouts/TelaNova";
import TelaCadProduto from "../layouts/TelaCadProduto";
import TelaConsProduto from "../layouts/TelaConsProduto";

//Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
  TelaPrincipal: undefined; 
  TelaNova: {idade: number, nome: string};
  TelaCadProduto: undefined;
  TelaConsProduto: undefined;
};

//Cria a Stack (tipo de navegação onde as telas estão em uma "pilha")
//com o RootStackParamList definindo as telas da stack
const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaPrincipal" //nome da tela inicial
      screenOptions={{ headerShown: false }} //headerShown define se o cabeçalho irá ser exibido
    >

      {/* define uma te la dando um nome(igual ao RootStackParamList) e qual o componente será carregado */}
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="TelaNova" component={TelaNova} />
      <Stack.Screen name="TelaCadProduto" component={TelaCadProduto} />
      <Stack.Screen name="TelaConsProduto" component={TelaConsProduto} />
    </Stack.Navigator>
  );
}

//cria as propriedades da TelaPrincipal, que nesse caso é undefined
//essas propriedades são usadas lá em layouts/TelaPincipal.tsx
type PrincipalProps = NativeStackScreenProps<RootStackParamList,
  'TelaPrincipal'>;

type NovaProps = NativeStackScreenProps<RootStackParamList,
  'TelaNova'>;  

type CadProdutoProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadProduto'>;  

type ConsProdutoProps = NativeStackScreenProps<RootStackParamList,
  'TelaConsProduto'>;    


//exporta o navegador da pilha para ficar visível para outros arquivos    
export default HomeNavigator;

//exporta os tipos de dados para ficar visível para outros arquivos
export type {
  PrincipalProps,
  NovaProps,
  CadProdutoProps,
  ConsProdutoProps
};