import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import HTML from 'react-native-render-html';

const MeubelComponent = props => {
    return (
        <View>
            <View style={styles.container}>
                <HTML source={{ html: props.content }}/>
                <Text style={styles.text}>{props.title}</Text> 
            </View>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,

    }, text: {
        
        fontSize: 20,
        fontWeight: 'bold',
    },
  
});
export default MeubelComponent;