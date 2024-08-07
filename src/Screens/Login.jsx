import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Color from '../Constants/Color';
import Dimension from '../Constants/Dimension';

import logo from '../../assets/images/logo.png';

const Login = ({ navigation }) => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.loginContainer}>
          <View style={styles.topContainer}>
            <View style={styles.logoContainer}>
              <Image style={styles.logoImg} source={logo} />
            </View>
            <View style={styles.loginProcess}>
              <TouchableOpacity onPress={() => setLoggedIn(true)} style={styles.textContainer}>
                <Text style={[styles.text, loggedIn && styles.activeText]}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setLoggedIn(false)} style={styles.textContainer}>
                <Text style={[styles.text, !loggedIn && styles.activeText]}>Sign-up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            {loggedIn ? (
              <>
                <View style={styles.inputFieldsContainer}>
                  <Text style={{ color: '#000', marginBottom: 10 }}>Email Address</Text>
                  <TextInput style={styles.textInputField} />
                </View>
                <View style={styles.inputFieldsContainer}>
                  <Text style={{ color: '#000', marginBottom: 10 }}>Password</Text>
                  <TextInput secureTextEntry={true} style={styles.textInputField} />
                </View>
                <Text style={styles.forgotPasscode}>Forgot passcode?</Text>
              </>
            ) : (
              <>
                <View style={styles.inputFieldsContainer}>
                  <Text style={{ color: '#000', marginBottom: 10 }}>User Name</Text>
                  <TextInput style={styles.textInputField} />
                </View>
                <View style={styles.inputFieldsContainer}>
                  <Text style={{ color: '#000', marginBottom: 10 }}>Email Address</Text>
                  <TextInput style={styles.textInputField} />
                </View>
                <View style={styles.inputFieldsContainer}>
                  <Text style={{ color: '#000', marginBottom: 10 }}>Password</Text>
                  <TextInput secureTextEntry={true} style={styles.textInputField} />
                </View>
                <Text style={styles.forgotPasscode}>Forgot passcode?</Text>
              </>
            )}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.btnContainer}>
            <Text style={styles.btnText}>{loggedIn ? 'Login' : 'Sign Up'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: Color.grayColor,
    width: Dimension.windowWidth,
    height: Dimension.windowHeight,
    position: 'relative',
    justifyContent: 'space-between',
  },
  topContainer: {
    backgroundColor: '#fff',
    width: Dimension.windowWidth,
    height: Dimension.windowHeight / 2.5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: '8%',
    elevation: 3,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 'auto',
  },
  loginProcess: {
    bottom: 0,
    fontSize: 18,
    color: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textContainer: {
    width: '25%',
  },
  activeText: {
    paddingBottom: '10%',
    borderBottomColor: Color.btnColor,
    borderBottomWidth: 2,
  },
  text: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    fontFamily: 'SFProDisplay-Regular',
  },
  bottomContainer: {
    flex: 1,
    width: '80%',
    marginHorizontal: 'auto',
    marginTop: '3%',
    gap: 20,
  },
  inputFieldsContainer: {
    marginBottom: '8%',
  },
  textInputField: {
    borderBottomWidth: 0.5,
    color: '#000',
    padding: 0,
    borderBottomColor: '#000',
  },
  forgotPasscode: {
    color: Color.orangeColor,
  },
  btnContainer: {
    alignItems: 'center',
    paddingVertical: Dimension.windowWidth*0.05,
    marginHorizontal: Dimension.windowWidth*0.08,
    bottom: Dimension.windowHeight*0.02,
    backgroundColor: Color.orangeColor,
    borderRadius: 30,
    elevation: 8,
  },
  btnText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: Color.white,
  },
});
