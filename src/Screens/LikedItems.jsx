import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Color from '../Constants/Color'

const LikedItems = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 500 }}>
        <MaterialCommunityIcons color={Color.iconColor} name="calendar" size={200} />
        <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Semibold', fontSize: 30, marginBottom: 5 }}>No Histroy yet</Text>
        <Text style={{ color: Color.iconColor, fontFamily: 'SFProDisplay-Regular', width: '50%', textAlign: 'center' }}>Hit the orange button down
          below to Create an order</Text>
      </View>
      
        <TouchableOpacity style={styles.btnContainer} >
          <Text style={styles.btnText}>Start Ordering</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default LikedItems

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
    color: Color.white
  }
})