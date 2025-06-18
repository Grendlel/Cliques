import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageSourcePropType, TouchableOpacity, Alert } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const Hammer = require('./assets/Hammer.png');
  const HammerApertado = require('./assets/hamsterapertado.png')
  const Reset = require('./assets/reset.png');

  let hamsters = {
    img1: './assets/Hammer.png',
    img2: './assets/hamsterapertado.png',
  }

  const [imagem, setImagem] = useState('')
  const [clique, setClique] = useState(0);
  const [media, setMedia] = useState(0);
  const [tempo, setTempo] = useState(0);

  function contaClique() {
    setClique(clique + 1)
    console.log('clique')
  }

  function contaIn() {
    console.log('clique In')
  }

  function contaOut() {
    console.log('clique Out')
  }

  function contaLonga() {
    console.log('clique Long')
    mediaTempo()
    Alert.alert('Média de tempo: ' + media)
  }

  function resetTudo() {
    let reset = 0
    setClique(reset)
    setTempo(reset)
    console.log('resetando')
  }

  function trocaImagem(){
    setImagem(state => state === 'img1' ? 'img2': 'img1');
    console.log('trocou')
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTempo((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [tempo]);

  function mediaTempo() {
    setMedia(tempo / clique)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Texto}>Clique no hammer</Text>
      <Text style={styles.valores}>{clique}</Text>
      <TouchableOpacity onPress={contaClique} onPressIn={trocaImagem} onPressOut={contaOut} onLongPress={contaLonga}>
        <Image style={styles.atk} source={Hammer}></Image>
      </TouchableOpacity>
      <Text style={styles.valores}>{tempo}</Text>
      <TouchableOpacity onPress={resetTudo}>
        <Image style={styles.reset} source={Reset}></Image>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a676b',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Texto: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#87e5cf',
    textAlign: "center",
    justifyContent: 'center',
  },

  valores: {
    fontSize: 35,
    color: '#ff1688',
    textAlign: "center",
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#ff629d',
    borderRadius: 200,
    padding: 12,
    backgroundColor: '#47c8c0',
    margin: 4
  },

  mon: {
    height: 260,
    width: 260,
  },

  atk: {
    height: 300,
    width: 300,
  },

  reset: {
    marginTop: 2,
    height: 130,
    width: 130,
  },
});