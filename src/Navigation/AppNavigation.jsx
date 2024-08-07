import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';
import WelcomePage from '../Screens/Welcome';
import Login from '../Screens/Login';
import Profile from '../Screens/Profile';
import FoodItemDetails from '../Screens/FoodItemDetails';
import Cart from '../Screens/Cart';
import Checkout from '../Screens/Checkout';
import SearchItems from '../Screens/SearchItems';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Color from '../Constants/Color';

const Stack = createNativeStackNavigator();
const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 20 }}>
      <MaterialIcons name="keyboard-arrow-left" size={33} color={Color.black} />
    </TouchableOpacity>
  );
};
const LikeButton = () => {
  // const navigation = useNavigation();
  return (
    <TouchableOpacity style={{ marginLeft: 20 }}>
      <MaterialCommunityIcons name="cards-heart-outline" size={33} color={Color.black} />
    </TouchableOpacity>
  );
};
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Welcome' component={WelcomePage} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Main' component={DrawerNavigation} />
        <Stack.Screen name='Profile' options={{
          headerShown: true,
          headerLeft: () => <BackButton />,
          headerStyle: {
            backgroundColor: Color.grayColor,
            elevation: 0, 
            shadowOpacity: 0, 
          },
          headerTitle: 'My Profile',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
          component={Profile} />
        <Stack.Screen name='FoodItemDetails' options={{
          headerShown: false,
          // headerLeft: () => <BackButton />,
          // headerRight: () => <LikeButton />,
          // headerStyle: {
          //   backgroundColor: Color.white,
          //   elevation: 0, // Remove shadow on Android
          //   shadowOpacity: 0, // Remove shadow on iOS
          // },
          // headerTitle: '',
          // headerShadowVisible: false,
        }}
          component={FoodItemDetails} />
        <Stack.Screen name='Cart' options={{
          headerShown: false,
          // headerLeft: () => <BackButton />,
          // headerTitleAlign: 'center',
          // headerStyle: {
          //   backgroundColor: Color.grayColor,
          //   elevation: 0,
          //   shadowOpacity: 0
          // },
          // headerShadowVisible: false,
        }} component={Cart} />
        <Stack.Screen name='Checkout' options={{ 
          headerShown: false,
          // headerLeft: () => <BackButton/>,
          // headerTitleAlign: 'center',
          // headerShadowVisible: false,
          // headerStyle:{
          //   backgroundColor: Color.grayColor,
          //   elevation:0,
          //   shadowOpacity: 0
          // }
          }} component={Checkout} />
        <Stack.Screen name='SearchItems' options={{
          headerShown: false,
          
        }} component={SearchItems} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})