import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../Constants/Color'
import DeliveryMethod from '../Components/DeliveryMethod'

const PaymentSelect = () => {
  return (
    <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 'auto', width: "80%", marginTop: "3%", display: 'flex', justifyContent: 'center', marginVertical: '10%' }}>
                <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 28, color: Color.black, marginBottom: "3%" }}>Delivery</Text>
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, marginTop: "5%", marginBottom: '4%' }}>
                        <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium' }}>Address Details</Text>
                        <Text style={{ color: Color.orangeColor, fontFamily: 'SFProDisplay-Medium' }}>change</Text>
                    </View>
                    <View style={{ backgroundColor: Color.white, display: 'flex', flexDirection: 'column', gap: 10, paddingVertical: 20, paddingHorizontal: 20, borderRadius: 15, marginBottom: "8%" }}>
                        <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium', fontSize: 18, borderBottomWidth: 1, paddingBottom: "3%", borderColor: Color.grayColor }}>Marvis Ighedosa</Text>
                        <Text style={{ color: Color.black, width: "85%", letterSpacing: 0.3, borderBottomWidth: 1, paddingBottom: "3%", borderColor: Color.grayColor, }}>Km 5 refinery road oppsite re
                            public road, effurun, delta state</Text>
                        <Text style={{ color: Color.black, letterSpacing: 0.5, width: "50%", }}>+234 9011039271</Text>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium', paddingBottom: 15 }}>Delivery method.</Text>
                    <DeliveryMethod />
                </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '20%' }}>
                <Text style={{color: Color.black, fontFamily: 'SFProDisplay-Regular', fontSize: 17}}>Total</Text>
                <Text style={{color: Color.black, fontFamily: 'SFProDisplay-Bold', fontSize: 20}}>23,000</Text>
            </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
                <Text style={styles.btnText}>Proceed to payment</Text>
            </TouchableOpacity>
        </View>
  )
}

export default PaymentSelect

const styles = StyleSheet.create({
    btnContainer: {
        position: 'absolute',
        left: '10%',
        right: '10%',
        bottom: 15,
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