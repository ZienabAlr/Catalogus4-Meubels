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
    }

}