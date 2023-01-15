import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';

import detailComponent from "../components/detailComponent";

const detailScreen = ({navigation})=> {



    return (
        <View style={styles.container}>
            <Text>{detailComponent}</Text>
            <Text>{"Hier kan je meer detail vinden"}</Text>

        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default detailScreen;
  
