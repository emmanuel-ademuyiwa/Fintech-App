import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ArrowBack from '../ArrowBack'

const TopBar = ({ toggle }) => {
  return (
    <View style={styles.topBar}>

      <ArrowBack toggle={toggle} />

        <View style={styles.textContainer}>
          <Text style={styles.topText}>Choose Transfer Type</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: {
    margin: 15,
    alignItems: 'center',
    flexDirection: 'row'
  },
  
  textContainer: { 
    flex: 7,
    justifyContent: 'center',
  },
  topText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: -30
    
  }
})

export default TopBar