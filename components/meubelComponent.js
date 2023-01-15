import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const MeubelComponent = props => {
    return (
        <View style={styles.container}>
            <Image source={{uri: props.image}} style={{width: 100, height: 100}} />
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