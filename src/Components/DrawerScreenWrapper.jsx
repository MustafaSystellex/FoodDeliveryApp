import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useDrawerProgress } from '@react-navigation/drawer'
import Color from '../Constants/Color'

const DrawerScreenWrapper = ({ children }) => {
    const progress = useDrawerProgress();

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp')},
            // { rotateY: interpolate(progress.value, [0, 1], [0, -0.2], 'clamp')},
            { translateX: interpolate(progress.value, [0, 1], [0, 0, 60], 'clamp')},
        ],
        borderRadius: interpolate(progress.value, [0, 1], [0, 20], 'clamp'),
        overflow: 'hidden',
        
        
    }))
    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            {children}
        </Animated.View>
    )
}

export default DrawerScreenWrapper

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // elevation: 20
    }
})