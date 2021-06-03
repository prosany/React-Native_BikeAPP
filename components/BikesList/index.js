import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import BikeItems from "../BikeItems/index";

import styles from './styles';
import bikes from './bikes';

const BikesList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={bikes}
                renderItem={({ item }) => <BikeItems bike={item} />}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default BikesList;