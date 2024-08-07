import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Color from '../Constants/Color';
import Signout from './Signout';
import Dimension from '../Constants/Dimension';
// import SignoutModal from './SignoutModal'; // Import the SignoutModal component

const CustomDrawerContent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignout = () => {
    // Handle signout logic here
    console.log('User signed out');
    setModalVisible(false);
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.signoutContainer}>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={() => setModalVisible(true)}>
          <Text style={styles.signoutText}>Signout </Text> 
          <MaterialIcons name='arrow-right-alt'  size={30} />
        </TouchableOpacity>
      </View>
      <Signout
        visible={modalVisible}
        onConfirm={handleSignout}
        onCancel={() => setModalVisible(false)}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  signoutContainer: {
    padding: 20,
    // borderTopWidth: 1,
    // borderTopColor: Color.white,
    marginTop: 20,
  },
  signoutText: {
    color: Color.white,
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    marginLeft: Dimension.windowWidth*0.03
    // textAlign: 'center',
  },
});

export default CustomDrawerContent;
