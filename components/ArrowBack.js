import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const ArrowBack = ({ toggle }) => {
  return (
    <TouchableOpacity onPress={toggle} style={styles.iconContainer}>
        <Icon style={styles.icon} name="keyboard-arrow-left" size={30} color="#fff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  iconContainer: {
    backgroundColor: '#333d46',
    borderRadius: 50,
    width:  40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: { 
    alignSelf: 'center'
  }
})

export default ArrowBack;