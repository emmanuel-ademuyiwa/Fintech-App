import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

const TransferTo = () => {
  return (
    <>
        <View style={styles.container}>
            <Icon style={styles.icon} name="people-arrows" size={30} color="#fff" />
            <View style={styles.text}>
                <Text style={styles.title}>Transfer to Fintech user</Text>
                <Text style={styles.description}>
                    Free Fintech to Fintech transfers.
                    Invite your friends to enjoy free transfers.
                </Text>
            </View>
        </View>

        <View style={styles.container}>
            <Icon style={styles.icon} name="people-arrows" size={30} color="#fff" />
            <View style={styles.text}>
                <Text style={styles.title}>Transfer to Fintech user</Text>
                <Text style={styles.description}>
                    Free Fintech to Fintech transfers.
                    Invite your friends to enjoy free transfers.
                </Text>
            </View>
        </View>

        <View style={styles.container}>
            <Icon style={styles.icon} name="people-arrows" size={30} color="#fff" />
            <View style={styles.text}>
                <Text style={styles.title}>Transfer to Fintech user</Text>
                <Text style={styles.description}>
                    Free Fintech to Fintech transfers.
                    Invite your friends to enjoy free transfers.
                </Text>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333d46',
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        paddingHorizontal: 10,
        shadowColor: "#767474",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    icon: {
        alignSelf: 'center'
    },
    text: {
        width: '85%'
    },
    title: { 
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5
    },
    description: { 
        color: '#fff',
        fontWeight: '400'
    }
})

export default TransferTo;