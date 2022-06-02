import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import IconTwo from 'react-native-vector-icons/FontAwesome5';
import IconThree from 'react-native-vector-icons/Entypo';
import IconFour from 'react-native-vector-icons/Ionicons';
import IconFive from 'react-native-vector-icons/Entypo';


const Category = ({ toggle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={(toggle)} 
        style={[styles.categoryContainer, {backgroundColor: 'rgba(181, 247, 155, 0.3)'}]}
      >
          <Icon style={styles.rotate} name="arrow-switch" size={30} color="#93f76be6" />
          <Text style={styles.text}>Transfer</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress={(toggle)} style={[styles.categoryContainer, {backgroundColor: 'rgba(251, 84, 92, 0.2)'}]}>
          <IconTwo style={styles.icon} name="file-invoice-dollar" size={30} color="#fb545c" />
          <Text style={styles.text}>Voucher</Text>
        </TouchableOpacity>

      <TouchableOpacity onPress={(toggle)} style={[styles.categoryContainer, {backgroundColor: 'rgba(247, 106, 224, 0.3)'}]}>
          <IconThree style={styles.icon} name="credit-card" size={20} color="#f76ae0" />
          <Text style={styles.text}>Bill</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={(toggle)} style={[styles.categoryContainer, {backgroundColor: 'rgba(106, 200, 247, 0.3)'}]}>
          <IconFour style={styles.icon} name="people-sharp" size={30} color="#6ac8f7" />
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={(toggle)} style={[styles.categoryContainer, {backgroundColor: 'rgba(247, 181, 106, 0.3)'}]}>
          <IconFive style={styles.icon} name="shopping-cart" size={30} color="#f7b56a" />
          <Text style={styles.text}>Shop</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
      flexDirection: 'row',
      overflowX: 'scroll',
    },
    categoryContainer: {
      width: 58,
      height: 60,
      marginVertical:16,
      borderRadius: 7,
      flexDirection: 'row',
      marginLeft: 0,
      marginRight: 13,
      justifyContent: 'center',
    },
    rotate: {
      padding: 10,
      paddingTop: 20,
      paddingRight: 30,
      fontSize: 20,
      fontWeight: "bold",
      transform: [{ rotate: "90deg" }]
    },

    icon: {
      padding: 10,
      paddingLeft: 13,
      fontSize: 20,
      fontWeight: "bold",
    },
    text: {
      color: '#fff',
      fontWeight: '500',
      position: 'absolute',
      bottom: 0,
      paddingHorizontal: 5,
      paddingVertical: 8,
      fontSize: 13,
      
    }
})

export default Category;