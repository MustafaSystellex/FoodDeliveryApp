import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Color from '../Constants/Color';
import Dimension from '../Constants/Dimension';

import logo from '../../assets/images/logo.png';
import bgImg1 from '../../assets/images/toyface1.png';
import bgImg2 from '../../assets/images/toyface2.png';
import LinearGradient from 'react-native-linear-gradient';

const WelcomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.welcomeContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logoImage} />
          </View>
          <Text style={styles.mainHeading}>Food for Everyone</Text>
        </View>
        <View style={styles.bgImgContainer}>
          <Image source={bgImg1} style={styles.bgImg1} />
          <Image source={bgImg2} style={styles.bgImg2} />
          <LinearGradient
            colors={['rgba(255, 71, 11, 0.1)', '#FF470B']}
            start={{ x: 0.5, y: -0.4006 }}
            end={{ x: 0.4, y: 0.7585 }}
            style={styles.gradient1}
          />
        </View>
      </View>
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Login")} style={styles.btnContainer}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomePage;

const styles = StyleSheet.create({
  welcomeContainer: {
    backgroundColor: Color.orangeColor,
    width: Dimension.windowWidth,
    height: Dimension.windowHeight,
    paddingTop: '10%',
  },
  mainContainer: {
    paddingHorizontal: '10%',
    marginBottom: "8%"
  },
  logoContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  mainHeading: {
    fontSize: 50,
    fontFamily: 'SFProDisplay-Heavy',
    marginHorizontal: '4%',
    color: '#fff'
  },
  bgImgContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  bgImg1: {
    position: 'absolute',
    width: '70%',
    height: '60%',
    zIndex: 1,
  },
  gradient1: {
    position: 'absolute',
    width: '100%',
    height: '20%',
    zIndex: 1,
    top: Dimension.windowHeight * 0.38,
    // opacity: 0.6
  },
  bgImg2: {
    position: 'absolute',
    // width: '55%',
    width: Dimension.windowWidth * 0.55,
    height: Dimension.windowHeight * 0.45,
    right: 0,
    top: '10%',
    zIndex: 0,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 20,
    left: "10%",
    right: "10%",
    marginHorizontal: 'auto',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: Color.white,
    borderRadius: 30,
  },
  btnText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: Color.orangeColor,
  },
});
