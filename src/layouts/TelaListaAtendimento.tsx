import React, { useState } from 'react';
import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from '../styles/styles';
import { ListaAtendimentoProps } from '../navigation/HomeNavigator';

type Paciente = {
  nome: string;
  idade: number;
  enfermidade: string;
  risco: number;
}

const TelaListaAtendimento = (props: ListaAtendimentoProps) => {
  const [lista, setLista] = useState([] as Paciente[]);

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [enfermidade, setEnfermidade] = useState('');
  const [risco, setRisco] = useState('1');

  function adicionar() {
    if (verificarCampos()) {
      let novoPaciente = {
        nome: nome,
        idade: Number.parseInt(idade),
        enfermidade: enfermidade,
        risco: Number.parseInt(risco)
      } as Paciente;

      setLista((antigaLista) => [...antigaLista, novoPaciente]);
    }
  }

  function verificarCampos(): boolean {
    if (!nome) {
      Alert.alert('Campo em branco', 'Preencha o campo "Nome".')
      return false
    }
    if (!idade) {
      Alert.alert('Campo em branco', 'Preencha o campo "Idade".')
      return false
    }
    if (!enfermidade) {
      Alert.alert('Campo em branco', 'Preencha o campo "Enfermidade".')
      return false
    }
    if (!risco) {
      Alert.alert('Campo em branco', 'Preencha o campo "Risco".')
      return false
    }

    let idadeNumero = Number.parseInt(idade);
    if (!idadeNumero || idadeNumero > 130 || idadeNumero < 0) {
      Alert.alert('Preenchimento incorreto', 'O campo "Idade" deve conter um valor numérico.')
      setIdade('')
      return false
    }

    let riscoNumero = Number.parseInt(risco);
    if (!riscoNumero || riscoNumero > 5 || riscoNumero < 1) {
      Alert.alert('Preenchimento incorreto', 'O campo "Risco" deve conter um valor numérico entre 1 e 5.')
      setRisco('1')
      return false
    }

    return true
  }

  return (
    <View
      style={styles.tela}>
      <Text style={styles.tituloTela}>FILA DE ATENDIMENTO</Text>

      <Text
        style={styles_local.titulo_campos}>Nome</Text>
      <TextInput
        style={styles_local.caixa_texto}
        value={nome}
        onChangeText={(text) => { setNome(text) }} />

      <Text
        style={styles_local.titulo_campos}>Enfermidade</Text>
      <TextInput
        style={styles_local.caixa_texto}
        value={enfermidade}
        onChangeText={(text) => { setEnfermidade(text) }} />

      <View
        style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Text
          style={styles_local.titulo_campos}>Idade</Text>
        <TextInput
          style={[styles_local.caixa_texto, { width: 50 }]}
          value={idade.toString()}
          keyboardType={'numeric'}
          onChangeText={(text) => { setIdade(text) }} />

        <Text
          style={styles_local.titulo_campos}>Risco</Text>
        <TextInput
          style={[styles_local.caixa_texto, { width: 50 }]}
          value={risco.toString()}
          keyboardType={'numeric'}
          onChangeText={(text) => { setRisco(text) }} />
      </View>

      <View
        style={{ alignItems: 'center' }}>
        <Pressable
          style={[styles.botao, { width: '50%' }]}
          onPress={() => { adicionar() }}>
          <Text
            style={{ fontSize: 25, textAlign: 'center', color: 'white' }}>
            Adicionar
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={lista}
        renderItem={({ item }) => <ItemLista paciente={item} />}
        ListFooterComponent={() => {
          return (
            <Pressable
              style={[styles.botao_vermelho]}
              onPress={() => { setLista([]) }}>
              <Text
                style={{ fontSize: 25, textAlign: 'center', color: 'white' }}>
                Limpar Fila
              </Text>
            </Pressable>
          )
        }} />

    </View>
  )

}

type ItemProps = {
  paciente: Paciente
}

const ItemLista = (props: ItemProps) => {
  return (
    <View
      style={styles.card}>
      {
        props.paciente.risco == 1 &&
        <Text style={styles_local.risco_1}>
          Caso Leve
        </Text>
      }

      {
        props.paciente.risco == 2 &&
        <Text style={styles_local.risco_2}>
          Caso Menos Grave
        </Text>
      }

      {
        props.paciente.risco == 3 &&
        <Text style={styles_local.risco_3}>
          Caso de Urgência
        </Text>
      }

      {
        props.paciente.risco == 4 &&
        <Text style={styles_local.risco_4}>
          Caso de Muita Urgência
        </Text>
      }

      {
        props.paciente.risco == 5 &&
        <Text style={styles_local.risco_5}>
          Caso de Emergência
        </Text>
      }

      <Text style={styles_local.item}>
        Nome: {props.paciente.nome}
      </Text>
      <Text style={styles_local.item}>
        Idade: {props.paciente.idade}
      </Text>
      <Text style={styles_local.item}>
        Enfermidade: {props.paciente.enfermidade}
      </Text>

    </View>
  );
}

export default TelaListaAtendimento;

const styles_local = StyleSheet.create({
  item: {
    padding: 5,
    fontSize: 18,
  },
  titulo_campos: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10
  },
  caixa_texto: {
    color: 'black',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 4,
    margin: 3,
    height: 40,
    backgroundColor: 'white'
  },
  risco_1: {
    fontSize: 25,
    textAlign: 'center',
    color: 'blue'
  },
  risco_2: {
    fontSize: 25,
    textAlign: 'center',
    color: 'green'
  },
  risco_3: {
    fontSize: 25,
    textAlign: 'center',
    color: 'yellow',
    textShadowColor: 'black',
    textShadowOffset: { width: 20, height: 5 },
    textShadowRadius: 10
  },
  risco_4: {
    fontSize: 25,
    textAlign: 'center',
    color: 'orange'
  },
  risco_5: {
    fontSize: 25,
    textAlign: 'center',
    color: 'red'
  }

});