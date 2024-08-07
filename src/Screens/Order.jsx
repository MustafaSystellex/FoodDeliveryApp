import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Color from '../Constants/Color'
import Header from '../Components/Header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Order = ({navigation}) => {
  return (
    <View style={{ backgroundColor: Color.grayColor, flex: 1 }}>
      <Header
        leftIcon={{
          component: <MaterialIcons name="keyboard-arrow-left" size={33} color={Color.black} />,
          onPress: () => navigation.goBack()
        }}
        title={'Order'}
      />
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 500 }}>
        <MaterialCommunityIcons color={Color.iconColor} name="cart-outline" size={200} />
        <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Semibold', fontSize: 30, marginBottom: 5 }}>No Order yet</Text>
        <Text style={{ color: Color.iconColor, fontFamily: 'SFProDisplay-Regular', width: '50%', textAlign: 'center' }}>Hit the orange button down
          below to Create an order</Text>
      </View>
      <TouchableOpacity style={styles.btnContainer} >
        <Text style={styles.btnText}>Start Ordering</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    bottom: 20,
    left: "10%",
    right: "10%",
    marginHorizontal: 'auto',
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