import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MeubelScreen from './screens/meubelSreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test2!</Text>
      <StatusBar style="auto" />
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
