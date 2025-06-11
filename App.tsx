import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageSourcePropType, TouchableOpacity , Alert} from 'react-native';
import { useEffect, useState } from 'react';


export default function App() {

  const Hammer = require('./assets/Hammer.png');

  const [vidaMons, setVidaMons] = useState(0);
  const [media, setMedia] = useState(0);
  const [tempo, setTempo] = useState(0);

  function contaClique() {
    setVidaMons(vidaMons + 1)
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
    Alert.alert(''+media)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTempo((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [tempo]);

  function mediaTempo() {
    setMedia(tempo / vidaMons)
  }



  return (
    <View style={styles.container}>
      <Text style={styles.Texto}>Clique no hammer</Text>
      <Text style={styles.Vida}>{vidaMons}</Text>
      <TouchableOpacity onPress={contaClique} onPressIn={contaIn} onPressOut={contaOut} onLongPress={contaLonga}>
        <Image style={styles.atk} source={Hammer}></Image>
      </TouchableOpacity>
      <Text style={styles.Vida}>{tempo}</Text>
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

  Vida: {
    fontSize: 50,
    color: '#ff1688',
    textAlign: "center",
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#ff629d',
    borderRadius: 200,
    padding: 12,
    backgroundColor: '#47c8c0',
  },

  mon: {
    height: 260,
    width: 260,
  },

  atk: {
    height: 300,
    width: 300,
  },
});