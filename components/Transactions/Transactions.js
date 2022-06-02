import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SectionTitle from '../SectionTitle';
import Transaction from './Transaction';

const Transactions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <SectionTitle title='Transactions' />
        <TouchableOpacity>
          <Text onPress={() => alert('List of transactions')} style={styles.history}>View History</Text>
        </TouchableOpacity>
      </View>
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  topBar: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  history: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    color: '#fff',
    borderColor: '#fff'
  }
})

export default Transactions;