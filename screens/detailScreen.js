import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';

import detailComponent from "../components/detailComponent";

const detailScreen = ({navigation})=> {



    return (
        <View style={styles.container}>
            <Text>{detailComponent}</Text>
        </View>
    ); 
}

