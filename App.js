import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Peso from './components/peso/peso';
import Altura from './components/altura/altura';
import BtnCalcular from './components/btnCalcular/btnCalcular';
import Resultado from './components/resultado/resultado';
import Tabela from './components/tabela/tabela';

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularIMC = () => {
    if (peso == 0 || !peso) {
      alert('Informe a altura');
      return;
    }

    if (altura == 0 || !altura) {
      alert('Informe a altura');
      return;
    }

    setResultado((peso / Math.pow(altura, 2)).toFixed(2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <Peso setPeso={setPeso} />
      <Altura setAltura={setAltura} />
      <BtnCalcular calcularIMC={calcularIMC}/>
      <Resultado resultado={resultado}/>
      <Tabela />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
