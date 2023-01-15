import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import HTML from 'react-native-render-html';

const MeubelComponent = props => {
    return (
        <View>
            <View style={styles.container}>
                <HTML source={{ html: props.content }} style={{ width: 100, height: 100 }} />
                <Text style={styles.text}>{props.title}</Text> 
            </View>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CBCBCB',
        alignItems: 'center',
        justifyContent: 'center',

    },  text: {
        
        fontSize: 20,
        fontWeight: 'bold',
    },

  
});
export default MeubelComponent;