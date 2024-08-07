import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';
import Color from '../Constants/Color';
import LikedItems from '../Screens/LikedItems';
import Profile from '../Screens/Profile';
import Order from '../Screens/Order';
import MainProfile from '../Screens/MainProfile';
import DrawerScreenWrapper from '../Components/DrawerScreenWrapper';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: Platform.OS === 'ios' ? 90 : 60,
  },
  headerStyle: {
    backgroundColor: 'transparent',
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
  },
  headerTitleStyle: {
    textAlign: 'center',
  },
  headerTitleAlign: 'center',
}

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 20 }}>
      <MaterialIcons name='keyboard-arrow-left' size={33} color={Color.black} />
    </TouchableOpacity>
  )
}

const BottomTabNavigation = () => {
  return (
    <DrawerScreenWrapper>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name='DrawerHome'
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.iconWrapper : null}>
                <FontAwesome name="home" color={focused ? Color.orangeColor : Color.iconColor} size={30} />
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name='LikeItems' 
          component={LikedItems} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name="heart" color={focused ? Color.orangeColor : Color.iconColor} size={28} />
            ),
            tabBarStyle: {display: 'none'}, 
            headerShown: true,
            headerTitle: '',
            headerLeft: () => <BackButton />
          }}
        />
        <Tab.Screen 
          name='MainProfile' 
          component={MainProfile} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name="user" color={focused ? Color.orangeColor : Color.iconColor} size={28} />
            ),
            tabBarStyle: {display: 'none'},
            headerShown: true,
            headerTitle: '',
            headerLeft: () => <BackButton />
          }}
        />
        <Tab.Screen 
          name='Order' 
          component={Order}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo name="back-in-time" color={focused ? Color.orangeColor : Color.iconColor} size={28} />
            ),
            headerShown: false,
            tabBarStyle: {display: 'none'},
            headerLeft: () => <BackButton />
          }}
        />
      </Tab.Navigator>
    </DrawerScreenWrapper>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({
  iconWrapper: {
    shadowColor: 'orange',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 55, // Add elevation for Android
  },
});
