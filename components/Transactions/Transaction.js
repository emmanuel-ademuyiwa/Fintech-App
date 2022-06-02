import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const Transaction = () => {
  return (
    <View style={styles.container}>

        <View style={styles.transactionLeft}>
            <Image source={require('../../assets/myface.jpeg')} style={styles.img} />
            <View style={styles.transctionContainer}> 
                <Text style={styles.transactionTitle}>UI/UX Course </Text>
                <Text style={styles.transactionDate}>09 Mar, 2022</Text>
            </View>
        </View>
        <Text style={styles.transactionAmount}>$50.00</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    transactionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 10
    },
    transctionContainer: {},
    transactionTitle: {
        color: '#fff',
        fontWeight: 'bold'
    },
    transactionDate: {
        fontSize: 13,
        color: 'white',
        marginTop: 5
    },
    transactionAmount: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Transaction;