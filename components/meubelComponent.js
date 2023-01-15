import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const MeubelComponent = props => {
    return (
        <View style={styles.container}>
            <Text>{props.title}</Text>
        </View>
    );
}