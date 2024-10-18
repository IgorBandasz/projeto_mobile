import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  botoesBaixo: {
    borderBottomStartRadius: 1,
    borderTopEndRadius: 1,
    backgroundColor: '#921fd1',
    paddingTop: 4,
    padding: 10,
    alignItems: 'center',

    borderRadius: 50,
  },
  botoesECTxt: {
    borderBottomStartRadius: 1,
    borderTopEndRadius: 1,
    fontSize: 30,
    color: 'white',
  },

  botaoEntrar: {
    backgroundColor: '#921fd1',
    alignItems: 'center',
    borderBottomStartRadius: 1,
    borderTopEndRadius: 1,

    borderRadius: 30,
    padding: 10,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    marginTop: '40.7%',
    gap: 0,
  },

  tela: {
    flex: 1,
    alignItems: 'center',
  },

  titulo2: {
    justifyContent: 'center',
    marginBottom: '10%',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  titulo1: {
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },

  caixa_texto: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 4,
    margin: 3,
    marginTop: 0,
    width: 400,
  },

  imagem_200: {
    backgroundColor:"white",
    borderRadius: 100,
    width: 150,
    height: 150
  },
});

export {styles};
