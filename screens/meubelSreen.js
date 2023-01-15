import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

import MeubelComponent from "../components/meubelComponent";
const MeubelScreen = ({navigation})=> {

    const [meubels, setMeubels] = useState([]);

    useEffect(() => {
        fetch("https://zienabalras.com/wp-json/wp/v2/posts")
        .then(response => response.json())
        .then(json => setMeubels(json))
        .catch(error => console.error(error))
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={meubels}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate(
                        'Meubel',
                        {title: item.title.rendered},
                        {content: item.content.rendered}, 
                        )}>
                        <MeubelComponent title={item.title.rendered} content={item.content.rendered} />
                    </TouchableOpacity>
                )}
            />
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

export default MeubelScreen;
