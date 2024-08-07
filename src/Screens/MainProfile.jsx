import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Color from '../Constants/Color'
import profile from '../../assets/images/profile.png'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const MainProfile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Color.grayColor }}>
            <View style={{ marginHorizontal: 'auto', width: "80%", marginTop: "3%", display: 'flex', justifyContent: 'center', marginVertical: '10%' }}>
                <Text style={{ fontFamily: 'SFProDisplay-Bold', fontSize: 24, color: Color.black }}>My Profile</Text>
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, marginTop: "5%", marginBottom: '4%' }}>
                        <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Bold' }}>Personal Details</Text>
                        <Text style={{ color: Color.orangeColor, fontFamily: 'SFProDisplay-Medium' }}>change</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Profile')}>
                        <View style={{ backgroundColor: Color.white, display: 'flex', flexDirection: 'row', gap: 10, paddingVertical: 20, paddingHorizontal: 10, borderRadius: 15, marginBottom: "8%" }}>
                            <View>
                                <Image source={profile} />
                            </View>
                            <View style={{ display: 'flex', gap: 2 }}>
                                <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium', fontSize: 18 }}>Marvis Ighedosa</Text>
                                <Text style={{ color: Color.iconColor, letterSpacing: 0.5, borderBottomWidth: 1, borderColor: Color.grayColor, width: "50%", paddingBottom: "2%" }}>dosamarvis@gmail.com</Text>
                                <Text style={{ color: Color.iconColor, letterSpacing: 0.5, borderBottomWidth: 1, borderColor: Color.grayColor, width: "50%", paddingBottom: "2%" }}>+234 9011039271</Text>
                                <Text style={{ color: Color.iconColor, width: "60%" }}>No 15 uti street off ovie palace road effurun delta state</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: Color.white, borderRadius: 15, padding: "4%", marginBottom: "4%" }}>
                            <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium', fontSize: 16 }}>Orders</Text>
                            <MaterialIcons name='keyboard-arrow-right' size={33} color={Color.black} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: Color.white, borderRadius: 15, padding: "4%", marginBottom: "4%" }}>
                            <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium', fontSize: 16 }}>Checkout</Text>
                            <MaterialIcons name='keyboard-arrow-right' size={33} color={Color.black} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: Color.white, borderRadius: 15, padding: "4%", marginBottom: "4%" }}>
                            <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium', fontSize: 16 }}>Faq</Text>
                            <MaterialIcons name='keyboard-arrow-right' size={33} color={Color.black} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: Color.white, borderRadius: 15, padding: "4%", marginBottom: "4%" }}>
                            <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium', fontSize: 16 }}>Help</Text>
                            <MaterialIcons name='keyboard-arrow-right' size={33} color={Color.black} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>Update</Text>
                </TouchableOpacity>
        </View>
    )
}

export default MainProfile

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