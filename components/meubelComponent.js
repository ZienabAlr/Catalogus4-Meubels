import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import HTML from 'react-native-render-html';

const MeubelComponent = props => {
    return (
        <View style={styles.container}>
            
            <Text>{props.title}</Text> 
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
export default MeubelComponent;