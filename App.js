import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import suzuki from './assets/images/suzuki-model1.jpg'
import  BikeItems from './components/BikeItems'

export default function App() {
  return (
    <View style={styles.container}>
    
    <BikeItems/>

      <StatusBar style="auto"/>
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
