import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SendMoney = () => {
  return (
    <View style={styles.container}>

        <View style={styles.topBar}>
            <Text style={styles.title}>Send Money</Text>
            <View style={styles.plusContainer}>
                <Text style={styles.plus}>+</Text>
            </View>
        </View>
        <View style={styles.userImgContainer}>
            <Image
                style={styles.userImg}
                source={require('../assets/C.png')}
            />
            <Image
                style={styles.userImg}
                source={require('../assets/davee.jpg')}
            />
            <Image
                style={styles.userImg}
                source={require('../assets/davee001.jpg')}
            />
            <Image
                style={styles.userImg}
                source={require('../assets/myface.jpeg')}
            />
            <Image
                style={styles.userImg}
                source={require('../assets/-da.jpg')}
            />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333d46',
        marginHorizontal: 15,
        marginVertical: 15,
        paddingVertical: 15, 
        paddingHorizontal: 10,    
        overflow: 'hidden',
        shadowColor: "#767474",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,  
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff'
    },
    plusContainer: {
        backgroundColor: '#fff',
        paddingBottom: 2,
        paddingHorizontal: 5,
        borderRadius: 50,
        alignItems: 'center',
        alignContents: 'center',
        justifyContent: 'center'
    },
    plus: {
        color: '#202b33',
        fontSize: 20,
        fontWeight: 'bold'
    },
    userImgContainer: {
        maxWidth: 50,
        height: 50,
        flexDirection: 'row',
        marginTop: 15,
    },
    userImg: {
        width: 50,
        height: 50,
        marginHorizontal: 7,
        borderRadius: 50
    }
})

export default SendMoney;