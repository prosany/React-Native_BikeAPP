import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const BikeItems = (props) => {
  const { name, tagline, taglineCTA, image, dis } = props.bike;
  const [conifrmOrder, setConfirmOrder] = useState(null);

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const yourFunction = async () => {
    await delay(5000);
    setConfirmOrder(null);
  };

  return (
    <View style={styles.bikeContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        {conifrmOrder ?
          <View style={styles.confirmNote}>
            <Text style={styles.confirmOrder}>Your Order is Confirmed!</Text>
            <Text style={styles.confirmOrderP}>We will send you a confirmation email as soon as your order ship.</Text>
          </View> :
          <View style={styles.confirmNote}>
            <Text style={styles.confirmOrder}>{name}</Text>
            <Text style={styles.subtitle}>
              {tagline}
              {' '}
              <Text style={styles.subtitleCTA}>
                {taglineCTA}
              </Text>
            </Text>
          </View>
        }
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Order Now"}
          onPress={() => {
            setConfirmOrder(true);
            yourFunction();
          }}
        />

        <StyledButton
          type="secondary"
          content={"Show Details"}
          onPress={() => {
            alert(`${dis}`);
          }}
        />
      </View>

    </View>
  );
};

export default BikeItems;