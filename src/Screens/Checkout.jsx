import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Color from '../Constants/Color'
import DeliveryMethod from '../Components/DeliveryMethod'
import RadioBtn from '../Components/RadioBtn'
import Header from '../Components/Header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dimension from '../Constants/Dimension'
import { Divider } from 'react-native-paper'

const Checkout = ({ navigation }) => {
    const [btnClicked, setBtnClicked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const processBtn = () => {
        if (btnClicked) {
            setModalVisible(true);
        } else {
            setBtnClicked(true);
        }
    };

    const modalBox = () => {
        return (
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Please note</Text>
                        </View>
                        <View style={styles.modalBody}>
                            <Text style={styles.modalSubtitle}>Delivery to Mainland</Text>
                            <Text style={styles.modalText}>N1000 - N2000</Text>
                        </View>
                        <Divider style={{width: '80%', marginHorizontal: 'auto', marginVertical: '2%'}}/>
                        <View style={styles.modalBody}>
                            <Text style={styles.modalSubtitle}>Delivery to Island</Text>
                            <Text style={styles.modalText}>N2000 - N3000</Text>
                        </View>
                        <View style={styles.modalFooter}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.proceedText}>Proceed</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Header 
            leftIcon={{
                component: <MaterialIcons name="keyboard-arrow-left" size={33} color={Color.black} />,
                onPress: () => navigation.goBack()
            }}
            title={"Checkout"}
            />
            {modalBox()}
            <View style={styles.container}>
                <Text style={styles.pageTitle}>{!btnClicked ? 'Delivery' : 'Payment'}</Text>
                <View>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{!btnClicked ? 'Address Details' : 'Payment method'}</Text>
                        <Text style={styles.changeText}>{!btnClicked ? 'change' : ''}</Text>
                    </View>
                    {
                        !btnClicked ?
                            <View style={styles.addressDetails}>
                                <Text style={styles.addressText}>Marvis Ighedosa</Text>
                                <Text style={styles.addressDescription}>Km 5 refinery road opposite republic road, Effurun, Delta state</Text>
                                <Text style={styles.phoneNumber}>+234 9011039271</Text>
                            </View>
                            :
                            <RadioBtn />
                    }
                </View>
                <View>
                    <Text style={styles.deliveryMethodTitle}>Delivery method.</Text>
                    <DeliveryMethod />
                </View>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalAmount}>23,000</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={processBtn} style={styles.btnContainer}>
                <Text style={styles.btnText}>Proceed to payment</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Checkout

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
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '70%',
        height: '35%',
        backgroundColor: Color.white,
        borderRadius: 20,
        overflow: 'hidden',
    },
    modalHeader: {
        backgroundColor: "#EDEDED",
        paddingVertical: '5%',
        paddingHorizontal: '12%',
    },
    modalTitle: {
        color: Color.black,
    },
    modalBody: {
        paddingHorizontal: '12%',
        marginVertical: '5%',
        borderColor: Color.iconColor,
    },
    modalSubtitle: {
        color: Color.iconColor,
        textTransform: 'uppercase',
    },
    modalText: {
        color: Color.black,
    },

    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '12%',
        marginTop: '5%'
        // marginBottom: '8%',
    },
    cancelText: {
        color: 'rgba(0,0,0,1)',
    },
    proceedText: {
        backgroundColor: Color.orangeColor,
        color: Color.white,
        paddingHorizontal: '9%',
        paddingVertical: '6%',
        borderRadius: 50,
        
    },
    container: {
        marginHorizontal: 'auto',
        width: Dimension.windowWidth * 0.8,
        marginTop: Dimension.windowHeight * 0.001,
        justifyContent: 'center',
    },
    pageTitle: {
        fontFamily: 'SFProDisplay-Medium',
        fontSize: 28,
        color: Color.black,
        marginBottom: Dimension.windowHeight / 650,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginTop: '5%',
        marginBottom: '4%',
    },
    sectionTitle: {
        color: Color.black,
        fontFamily: 'SFProDisplay-Medium',
    },
    changeText: {
        color: Color.orangeColor,
        fontFamily: 'SFProDisplay-Medium',
    },
    addressDetails: {
        backgroundColor: Color.white,
        flexDirection: 'column',
        gap: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginBottom: '8%',
        elevation: 2,
    },
    addressText: {
        color: Color.black,
        fontFamily: 'SFProDisplay-Medium',
        fontSize: 18,
        borderBottomWidth: 1,
        paddingBottom: '3%',
        borderColor: Color.grayColor,
    },
    addressDescription: {
        color: Color.black,
        width: '85%',
        letterSpacing: 0.3,
        borderBottomWidth: 1,
        paddingBottom: '3%',
        borderColor: Color.grayColor,
    },
    phoneNumber: {
        color: Color.black,
        letterSpacing: 0.5,
        width: '50%',
    },
    deliveryMethodTitle: {
        color: Color.black,
        fontFamily: 'SFProDisplay-Medium',
        paddingBottom: 15,
        marginTop: '4%',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5%',
    },
    totalText: {
        color: Color.black,
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 17,
    },
    totalAmount: {
        color: Color.black,
        fontFamily: 'SFProDisplay-Bold',
        fontSize: 20,
    },
});
