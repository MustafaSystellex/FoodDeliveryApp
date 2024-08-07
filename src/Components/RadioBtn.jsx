import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Divider, RadioButton, Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Color from '../Constants/Color';

const RadioBtn = () => {
    const [checked, setChecked] = React.useState('first');

    return (
        <View style={{ backgroundColor: Color.white, borderRadius: 15, elevation: 2}}>
            <TouchableOpacity 
                style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, margin: 10, gap: 8 }} 
                onPress={() => setChecked('first')}
                activeOpacity={0.9}
            >
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                    color= {Color.orangeColor}
                />
                <View style={{ flexDirection: 'row', width: "80%", alignItems: 'center', gap: 10 }}>
                    <View style={{ width: 40, height: 40, backgroundColor: "#F47B0A", justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 10 }}>
                        <FontAwesome name="credit-card-alt" color={Color.white} size={20} />
                    </View>
                    <Text style={{ fontFamily: 'SFProDisplay-Regular', fontSize: 16 }}>Card</Text>
                </View>
            </TouchableOpacity>
                <Divider style={{width: '60%', marginHorizontal: 'auto', marginBottom: '2%'}}/>
            <TouchableOpacity 
                style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, margin: 10, gap: 8 }} 
                onPress={() => setChecked('second')}
                activeOpacity={0.9}
            >
                <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                    color= {Color.orangeColor}
                />
                <View style={{ flexDirection: 'row', width: "80%", alignItems: 'center', gap: 10 }}>
                    <View style={{ width: 40, height: 40, backgroundColor: "#EB4796", justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 10 }}>
                        <FontAwesome name="bank" color={Color.white} size={18} />
                    </View>
                    <Text style={{ fontFamily: 'SFProDisplay-Regular', fontSize: 16 }}>Bank Account</Text>
                </View>
            </TouchableOpacity>
                <Divider style={{width: '60%', marginHorizontal: 'auto', marginBottom: '2%'}}/>

            <TouchableOpacity 
                style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, margin: 10, gap: 8 }} 
                onPress={() => setChecked('third')}
                activeOpacity={0.9}
            >
                <RadioButton
                    value="third"
                    status={checked === 'third' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('third')}
                    color= {Color.orangeColor}
                />
                <View style={{ flexDirection: 'row', paddingBottom: 10, borderColor: Color.grayColor, width: "80%", alignItems: 'center', gap: 10 }}>
                    <View style={{ width: 40, height: 40, backgroundColor: "#0038FF", justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 10 }}>
                        <Entypo name="paypal" color={Color.white} size={20} />
                    </View>
                    <Text style={{ fontFamily: 'SFProDisplay-Regular', fontSize: 16 }}>Paypal</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default RadioBtn;
