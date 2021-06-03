import React from 'react';
import {styleSheet} from 'react-native';
import { Text, View, ImageBackground } from 'react-native';
import suzuki from '../../assets/images/suzuki-model1.jpg';
import styles from './styles';

const BikeItems = ()=>{
    return(
         <View style={styles.carContainer}>
       <ImageBackground source={suzuki} style={styles.image}></ImageBackground>
         <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $70,230</Text>
         </View>
      </View>
    );
};

export default BikeItems;

