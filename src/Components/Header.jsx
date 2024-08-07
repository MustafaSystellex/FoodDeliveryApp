import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Color from '../Constants/Color';
import Dimension from '../Constants/Dimension';

const Header = ({ title, leftIcon, rightIcon }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                {leftIcon && (
                    <TouchableOpacity style={styles.iconContainer} onPress={leftIcon.onPress}>
                        {leftIcon.component}
                    </TouchableOpacity>
                )}
                <View>
                    <Text style={styles.title}> {title} </Text>

                </View>
            </View>
            {rightIcon && (
                <TouchableOpacity style={styles.iconContainer} onPress={rightIcon.onPress}>
                    {rightIcon.component}
                </TouchableOpacity>
            )}
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Dimension.windowHeight / 21,
        marginHorizontal: Dimension.windowWidth / 18,
        marginBottom: Dimension.windowHeight / 60,
    },
    iconContainer: {
        height: 45,
        width: 45,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: Color.grayColor,
    },
    title: {
        marginLeft: 12,
        fontSize: 22,
        fontFamily: 'SFProDisplay-Medium ',
        // fontWeight: 'bold',
        textAlign: 'center',
        // alignItems: 'center',
        // marginHorizontal: 'auto',
        color: Color.black
    },
});
