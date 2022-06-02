import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionTitle from '../SectionTitle'
import Category from './Category'

const Categories = ({ toggle }) => {
  return (
    <View style={styles.category}>
        <SectionTitle title='Categories' toggle={toggle} />
        <Category toggle={toggle} />
    </View>
  )
}

const styles = StyleSheet.create({
    category: {
        paddingHorizontal: 15,
        marginTop: 25,
    }
})

export default Categories;