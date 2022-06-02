import react, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Dashboard from './screens/Dashboard';
import TransferType from './screens/TransferType';


export default function App() {

  const [transfer, setTransfer] = useState(false)
  function handleTransfer() { 
    setTransfer(!transfer)
    console.log('Transfer')
  }

  return (
    <SafeAreaView style={styles.container}>
       {
         transfer ? 
         <TransferType toggle={handleTransfer} />

          :

        <Dashboard toggle={handleTransfer} />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202b33',
  },

});
