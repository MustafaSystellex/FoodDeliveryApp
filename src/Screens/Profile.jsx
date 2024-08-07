import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import profile from '../../assets/images/profile.png'
import Color from '../Constants/Color';
import RadioBtn from '../Components/RadioBtn';

const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
        
        <View style={{ marginHorizontal: 'auto', width: "80%", marginTop: "5%" }}>
          <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Semibold', fontSize: 20, marginBottom: 10 }}>Information</Text>
          <View style={{ backgroundColor: Color.white, paddingVertical: 20, paddingHorizontal: 10, borderRadius: 15, marginBottom: "14%" }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Image source={profile} />
              <View style={{ gap: 2 }}>
                <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium', fontSize: 18 }}>Marvis Ighedosa</Text>
                <Text style={{ color: Color.iconColor, letterSpacing: 0.5 }}>dosamarvis@gmail.com</Text>
                <Text style={{ color: Color.iconColor, width: "60%" }}>No 15 uti street off ovie palace road effurun delta state</Text>
              </View>
            </View>
          </View>
          <View style={{ marginBottom: 25 }}>
            <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Semibold', fontSize: 20, marginBottom: 10 }}>Payment Method</Text>
            <RadioBtn />
          </View>
        </View>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Update</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    left: '10%',
    right: '10%',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: Color.orangeColor,
    borderRadius: 30,
  },
  btnText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: Color.white,
  },
})
