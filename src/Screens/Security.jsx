import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../Constants/Color'

const Security = () => {
  return (
    <View style={{flex: 1, backgroundColor: Color.grayColor, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Semibold', fontSize: 30, marginBottom: 5 }}> Security</Text>
    </View>
  )
}

export default Security

const styles = StyleSheet.create({})