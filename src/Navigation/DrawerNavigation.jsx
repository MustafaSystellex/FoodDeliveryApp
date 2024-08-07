import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Color from '../Constants/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomTabNavigation from './BottomTabNavigation';
import Order from '../Screens/Order';
import Offers from '../Screens/Offers';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import Security from '../Screens/Security';
import MainProfile from '../Screens/MainProfile';
import Dimension from '../Constants/Dimension';
import CustomDrawerContent from '../Components/CustomDrawerContent';
import { Divider } from 'react-native-paper';
import Signout from '../Components/Signout';
// import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 20 }}>
      <MaterialIcons name="keyboard-arrow-left" size={33} color={Color.black} />
    </TouchableOpacity>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        swipeEnabled: false,
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveBackgroundColor: 'transparent',
        drawerHideStatusBarOnOpen: true,
        overlayColor: 'transparent',
        drawerStyle: {
          backgroundColor: Color.orangeColor,
          width: "60%",
        },
        sceneContainerStyle: {
          backgroundColor: Color.orangeColor,
        },
        drawerType: 'slide',
        headerStyle: {
          backgroundColor: Color.white,
        },
        headerTintColor: Color.black,
        drawerLabelStyle: { 
          color: Color.white,
          fontSize: 16,
          fontFamily: "Poppins-Medium",
          marginLeft: -10,
        },
        drawerItemStyle: {
          // marginVertical: 5,
        },
      }}
    >
      <Drawer.Screen name='Home' options={{
        drawerLabel: 'Home',
        title: 'Home',
        headerShown: false,
        headerShadowVisible: false,
        drawerIcon: () => (
          <FontAwesome name='home' size={25} color={Color.white} />
        ),
      }}
        component={BottomTabNavigation}
      />
      {/* <Divider/> */}
      <Drawer.Screen name='MyProfile'
        options={{
          drawerLabel: 'Profile',
          title: 'Profile',
          headerLeft: () => <BackButton />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Color.grayColor,
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitle: '',
          headerShadowVisible: false,
          drawerIcon: () => (
            <FontAwesome name='user' size={25} color={Color.white} />
          ),
        }}
        component={MainProfile}
      />
      <Drawer.Screen name='Order' options={{
        drawerLabel: 'Order',
        title: 'Order',
        headerLeft: () => <BackButton />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Color.grayColor,
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerShown: false,
          headerShadowVisible: false,
        drawerIcon: () => (
          <CartIcon name='cart-arrow-down' size={25} color={Color.white} />
        ),
      }}
        component={Order}
      />
      <Drawer.Screen name='Offers' options={{
        drawerLabel: 'Offers',
        title: 'Offers',
        headerShadowVisible: false,
        headerLeft: () => <BackButton />,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Color.grayColor,
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
        },
        headerTitle: '',
        drawerIcon: () => (
          <MaterialIcons name='local-offer' size={25} color={Color.white} />
        ),
      }}
        component={Offers}
      />
      <Drawer.Screen name='PrivacyPolicy' options={{
        drawerLabel: 'PrivacyPolicy',
        title: 'PrivacyPolicy',
        headerLeft: () => <BackButton />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Color.grayColor,
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitle: 'Privacy Policy',
          headerShadowVisible: false,
          drawerIcon: () => (
            <MaterialIcons name='sticky-note-2' size={25} color={Color.white} />
          ),
      }}
        component={PrivacyPolicy}
      />
      <Drawer.Screen name='Security' options={{
        drawerLabel: 'Security',
        title: 'Security',
        headerLeft: () => <BackButton/>,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Color.grayColor,
          elevation: 0,
          shadowOpacity: 0,
        },
        drawerIcon: () => (
          <MaterialIcons name='security' size={25} color={Color.white} />
        ),
      }}
        component={Security}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
