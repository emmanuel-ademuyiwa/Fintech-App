import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SectionTitle = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
    title : {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default SectionTitle;