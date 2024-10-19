import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {paciente} from '../types/paciente';
import { PacientesProps} from '../navigation/HomeNavigator';
import {styles} from '../styles/stylesCadastrar';

//criaçao das variaveis state para usar na pagina

const TelaPacientes = (props: PacientesProps) => {
  const [lista, setLista] = useState([] as paciente[]);
  const [nome, setNome] = useState('');
  const [problema, setProblema] = useState('');
  const [idade, setIdade] = useState(0);
  const [risco, setRisco] = useState(1);

 

  function adicionar() {
    //crie um Paciente primeiro
    let novoPaciente = {
    nome: nome,
    problema: problema,
    idade: idade,
    risco: risco,
  } as paciente;

    

    //inserindo um novo paciente na lista
    setLista(lista => [...lista, novoPaciente]);
  }

  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        //https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png
        uri: 'https://wallpapers.com/images/hd/purple-galaxy-2880-x-1800-background-srvn2y6n8krndfwp.jpg',
      }}>
      
        <ScrollView>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Pressable
                style={{borderBottomStartRadius:1,
                    borderTopStartRadius:1,
                borderTopEndRadius:1,
              backgroundColor: '#921fd1',
              padding: 10,
              borderRadius: 50,
             
            }}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={{fontSize: 40, color: 'white'}}>voltar</Text>
          </Pressable>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
        

          <Text style={styles.titulo1}>nome</Text>

          <TextInput
            style={[styles.caixa_texto]}
            
            onChangeText={Text => setNome(Text)}
          />
          <Text style={styles.titulo1}>infermidade</Text>
          <TextInput
            style={[styles.caixa_texto]}
            onChangeText={Text => setProblema(Text)}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            padding: 0,
            marginTop: '10%',
          }}>
          <Text
            style={{
              justifyContent: 'center',
              marginTop: 10,
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Idade
          </Text>
          <TextInput
            value={idade.toString()}
            onChangeText={text => setIdade(Number.parseInt(text))}
            style={{
              backgroundColor: 'white',
              color: 'black',
              fontSize: 20,
              borderWidth: 1,
              borderRadius: 4,
              margin: 3,
              marginTop: 0,
              width: 100,
            }}
          />

          <Text
            style={{
              justifyContent: 'center',
              marginTop: 10,
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Risco
          </Text>
          <TextInput
            value={risco.toString()}
            onChangeText={text => setRisco(Number.parseInt(text))}
            style={{
              backgroundColor: 'white',
              color: 'black',
              fontSize: 20,
              borderWidth: 1,
              borderRadius: 4,
              margin: 3,
              marginTop: 0,
              width: 100,
            }}
          />
        </View>
        <View style={{marginTop:10,marginBottom:30,flex: 1, alignItems: 'center'}}>
        <Pressable
          style={state => [
            styles.botoesBaixo,
            state.pressed ? {opacity: 0.5} : null,
          ]}
          
          onPress={adicionar}>
          <Text style={styles.botoesECTxt}>adicionar</Text>
        </Pressable>
        </View>
        


   
        <FlatList
                data={lista}
                renderItem={({ item }) => {return (

      
       
            
                    <View style={{
                        marginBottom:20,
                        borderColor:'black',
                        borderRadius:30 ,backgroundColor:"white"
                    }}>
                    { item.risco == 1 ? (
                      <Text style={{ textAlign:"center",
                        marginBottom: '5%',
                        fontSize: 40,
                        fontWeight: 'bold', color: 'blue',}}>risco leve</Text>
                    ) : item.risco == 2 ? (
                        <Text style={{textAlign:"center",
                            marginBottom: '5%',
                            fontSize: 40,
                            fontWeight: 'bold',
                           color: 'green'}}>Menos Graves </Text>
                    ) : item.risco == 3 ? (
                        <Text style={{textAlign:"center",
                            marginBottom: '5%',
                            fontSize: 40,
                            fontWeight: 'bold', color: 'yellow'}}> Urgência</Text>
                      
                    ) :item.risco == 4 ? (
                      <Text style={{ textAlign:"center",
                        marginBottom: '5%',
                        fontSize: 40,
                        fontWeight: 'bold', color: 'orange'}}>Muita Urgência</Text>
                    ) : (
                        item.risco == 5 && (
                        <Text style={{ textAlign:"center",
                            marginBottom: '5%',
                            fontSize: 40,
                            fontWeight: 'bold', color: 'red'}}>Emergência</Text>
                      )
                    )}
            <Text style={{margin:10 ,fontSize:20,color:"black"}}>
                            {
                            'nome :'+item.nome +
                            '\n idade : '+item.idade +
                            '\n enfermidade : '+item.problema 
                            }
                        </Text>
                     </View>
                
   ); }}
            

                 />

        

</ScrollView>
  
    </ImageBackground>
  );
};


export default TelaPacientes;
