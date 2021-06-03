import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  bikeContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  confirmNote: {
    width: '100%',
    alignItems: 'center'
  },
  confirmOrder: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111',
    alignItems: 'center'
  },
  confirmOrderP: {
    margin: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    alignItems: 'center'
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    margin: 10
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 16,
    margin: 10,
    color: '#555'
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  }
});

export default styles;