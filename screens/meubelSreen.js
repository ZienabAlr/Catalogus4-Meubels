import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';

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
                    <TouchableOpacity onPress={() => navigation.navigate('Meubel', {title: item.title.rendered})}>
                       <MeubelComponent title={item.title.rendered} />
                     </TouchableOpacity>
                )}
            />
        </View>
    );



    // const getMeubels = async () => {
       
    //     try {

    //         const response = await fetch(
    //             'https://zienabalras.com/wp-json/wp/v2/posts',
    //         );
            
    //         const json = await response.json();
    //         console.log(json);
    //         setMeubels(json);
            
    
    //     } catch (error) {
    //         console.error(error);
    //     }

    //     useEffect(() => {
    //         getMeubels();
    //     }
    //     , []);
      
    // }

    console.log(meubels);
 
   
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
