import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import TopBar from '../components/TransferType/TopBar';
import TransferTo from '../components/TransferType/TransferTo';

const TransferType = ({ toggle }) => {
  return (
    <View>
        <TopBar toggle={toggle} />
        <TransferTo  />
    </View>
  )
}

export default TransferType