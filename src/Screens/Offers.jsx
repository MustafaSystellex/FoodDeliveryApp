import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Color from '../Constants/Color';

const Offers = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>My Offers</Text>
      <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.offerBox}>
          <Text style={styles.noOfferText}>ohh snap! No offers yet</Text>
          <Text style={styles.subtitle}>Bella doesn't have any offers yet please check again.</Text>
        </View>
      </View>
      </View>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.grayColor,
  },
  outerContainer:{
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',     
  },
  innerContainer: {
    alignItems: 'center',
  },
  title: {
    color: Color.black,
    fontFamily: 'SFProDisplay-Medium',   
    fontSize: 26,
    paddingLeft: "10%"
  },
  offerBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noOfferText: {
    color: Color.black,
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 26,
  },
  subtitle: {
    paddingHorizontal   : "20%",
    color: Color.iconColor,
    textAlign: 'center',
    marginTop: 10,
  },
});
