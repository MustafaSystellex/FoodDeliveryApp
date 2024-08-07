import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FoodItemSlider from '../Components/FoodItemSLider';
import Color from '../Constants/Color';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/action/Action';
import Header from '../Components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dimension from '../Constants/Dimension';

const FoodItemDetails = ({ route, navigation }) => {
    const { item } = route.params;
    const dispatch = useDispatch();

    const addItem = (item) => {
        dispatch(addItemToCart(item));
    }

    const handleClick = () => {
        addItem(item);
        navigation.navigate('Cart');
    }

    // Ensure item.photo is an array
    const images = Array.isArray(item.photo) ? item.photo : [item.photo];

    return (
        <View style={styles.container}>
            <Header
                leftIcon={{
                    component: <MaterialIcons name="keyboard-arrow-left" size={33} color={Color.black} />,
                    onPress: () => navigation.goBack()
                }}
                rightIcon={{
                    component: <MaterialCommunityIcons name="cards-heart-outline" size={33} color={Color.black} />,
                    onPress: () => console.log('Heart icon pressed')
                }}
            />
            <View style={styles.sliderContainer}>
                <FoodItemSlider images={images} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>{`Rs. ${item.item_variations[0].price}`}</Text>
                <Text style={styles.infoTitle}>Delivery info</Text>
                <Text style={styles.infoText}>Delivered between Monday Aug and Thursday 20 from 8pm to 9:32 pm</Text>
                <Text style={styles.infoTitle}>Return policy</Text>
                <Text style={styles.infoText}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
            </View>
            <TouchableOpacity onPress={handleClick} style={styles.btnContainer}>
                <Text style={styles.btnText}>Add to cart</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FoodItemDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sliderContainer: {
        width: '100%',
        height: Dimensions.get('window').height * 0.35,
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: Dimension.windowWidth * 0.08,
        marginTop: Dimension.windowHeight / 110,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.black,
        textAlign: 'center',
    },
    price: {
        fontSize: 22,
        color: Color.orangeColor,
        textAlign: 'center',
        marginVertical: 10,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        color: Color.black,
    },
    infoText: {
        fontSize: 14,
        color: '#777',
        marginVertical: 5,
    },
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
        elevation: 8,
    },
    btnText: {
        fontFamily: 'SFProDisplay-Bold',
        fontSize: 18,
        color: Color.white,
    },
});
