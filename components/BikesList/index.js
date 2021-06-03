import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import BikeItem from "../BikeItems";

import styles from "./styles";
import bikes from "./bikes";

const BikesList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={bikes}
        renderItem={({ item }) => <BikeItem bike={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default BikesList;
