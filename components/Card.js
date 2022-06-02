import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = () => {
  return (
    <View style={styles.cardContainer}>

        <View style={styles.cardOne}>
            <View style={[styles.cardStroke, styles.firstCard]}></View>
            <View style={[styles.cardStroke, styles.secondCard]}></View>
            <View style={[styles.cardStroke, styles.thirdCard]}></View>
            <View style={[styles.cardStroke, styles.fourthCard]}></View>
        </View>

        <View style={styles.cardTwo}>
            <View style={[styles.cardStroke, styles.cardTwofirstCard]}></View>
            <View style={[styles.cardStroke, styles.cardTwosecondCard]}></View>
            <View style={[styles.cardStroke, styles.cardTwothirdCard]}></View>
            <View style={[styles.cardStroke, styles.cardTwofourthCard]}></View>
        </View>

        <View style={styles.cardThree}>
            
            <View style={styles.visaLogoContainer}>
                <Image
                    style={styles.visaImg}
                    source={require('../assets/visalogo.png')}
                />
            </View>

            <View style={styles.balanceContainer}>
                <Text style={styles.totalBalance}>Total Balance</Text>
                <Text style={styles.balance}>$40,500.00</Text>
            </View>

            <View style={styles.cardNunberContainer}>
                <Text style={styles.cardNumber}>**** **** 2343</Text>
            </View>


        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: { 
        minWidth: '80%',
        paddingTop: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    firstCard: { marginLeft: 30 },
    secondCard: { marginLeft: 80 },
    thirdCard: { marginLeft: 130 },
    fourthCard: { marginLeft: 180 },

    cardTwofirstCard: { marginLeft: 40 },
    cardTwosecondCard: { marginLeft: 90 },
    cardTwothirdCard: { marginLeft: 140 },
    cardTwofourthCard: { marginLeft: 190 },

    cardStroke: {
        backgroundColor: 'rgba(229, 223, 223, .3)',
        width: 17,
        height: 70,
        marginHorizontal: 10,
        marginTop: -17,
        position: 'absolute',
        transform: [{ rotate: "45deg" }]
    },
    cardOne: { 
        backgroundColor: 'rgba(247, 155, 169, .9)',
        width: '70%',
        borderRadius: 10,
        height: 50,
        overflow: 'hidden',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    cardTwo: { 
        backgroundColor: '#212121',
        width: '80%',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 30,
        marginTop: -35,
        overflow: 'hidden',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    cardThree: {
        backgroundColor: '#6495ED',
        width: '90%',
        borderRadius: 10,
        height: 130,
        marginTop: -30,
        padding: 20,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    visaLogoContainer: { 
        maxWidth: 50, 
        justifyContent: 'left',
    },
    visaImg: { 
        width: 40,
        height: 15,
    },
    balanceContainer: {
        position: 'absolute',
        bottom: 15,
        padding: 10
    },
    totalBalance: { 
        fontSize: 15,
        color: '#fff',
        fontWeight: '500'
    },
    balance: { 
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 3
    },
    cardNunberContainer: {
        
    },
    cardNumber: {
        position: 'absolute',
        color: '#fff',
        right: 5,
        top: 70,

    }
})

export default Card;