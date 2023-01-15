import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';

import MeubelComponent from "../components/meubelComponent";

const MeubelScreen = ({navigation})=> {

    const [meubels, setMeubels] = useState([]);

    const getMeubels = async () => {
        try {
            const response = await fetch("https://zienabalras.com/wp-json/wp/v2/posts");
            const json = await response.json();
            setMeubels(json.results);
        } catch (error) {
            console.error(error);
        }

        useEffect(() => {
            getMeubels();
        }
        , []);

        return (
            <View style={styles.container}>
                <FlatList
                        data = {meubels}
                        keyExtractor = {(item, index) => index.toString()}
                        renderItem = {({item}) => (
                            <MeubelComponent
                                title = {item.title.rendered}   //rendered is the title of the post in the wordpress backend this is needed to get the title of the post in the wordpress backend
                            />
                        )}
                />
            </View>
        );
    }

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
