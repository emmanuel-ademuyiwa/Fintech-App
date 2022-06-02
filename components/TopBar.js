import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.topBar}>
        <View style={styles.topBarText}>
            <Text style={styles.topBarUsername}>Hi Nelson</Text>
            <Text style={styles.topBarGreeting}>Welcome back!</Text>
        </View>
        <View style={styles.topBarImgWrapper}>
            <Image
                style={styles.topBarImg}
                source={require('../assets/user.png')}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    topBarText: { },
    topBarUsername: { 
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
    },
    topBarGreeting: { 
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 3
    },
    topBarImgWrapper: {
        backgroundColor: '#333d46',
        padding: 5,
        borderRadius: 8,
    },
    topBarImg: { 
        width: 30,
        height: 30
    }

})

export default TopBar