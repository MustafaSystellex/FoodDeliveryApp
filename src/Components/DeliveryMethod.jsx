import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Divider, RadioButton } from 'react-native-paper';
import Color from '../Constants/Color';

const DeliveryMethod = () => {
    const [checked, setChecked] = React.useState('first');
    return (
        <View style={{ backgroundColor: Color.white, borderRadius: 15, elevation: 2   }}>
            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, margin: 10, gap: 8 }}
                onPress={() => setChecked('first')}
                activeOpacity={0.9}
            >
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                    color={Color.orangeColor}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, borderColor: Color.grayColor, width: "70%", }}>
                    <Text style={{ fontFamily: 'SFProDisplay-Regular', fontSize: 16, color: Color.black }}>Door delivery</Text>
                </View>
            </TouchableOpacity>
            <Divider style={{width: "70%", marginHorizontal: 'auto'}}/>
            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, margin: 10, gap: 8 }}
                onPress={() => setChecked('second')}
                activeOpacity={0.9}
            >
                <RadioButton
                    value="first"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                    color={Color.orangeColor}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, width: "70%", }}>
                    <Text style={{ fontFamily: 'SFProDisplay-Regular', fontSize: 16, color: Color.black }}>Pick up</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DeliveryMethod

const styles = StyleSheet.create({})