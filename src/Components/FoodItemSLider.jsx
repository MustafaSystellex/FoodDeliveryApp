import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Color from '../Constants/Color';

const FoodItemSlider = ({ images }) => {
  const flatListRef = useRef();
  const width = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const renderDotIndicator = () => {
    return images.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View key={index} style={styles.activeDot} />
        );
      } else {
        return (
          <View key={index} style={styles.inactiveDot} />
        );
      }
    });
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item} style={styles.image} />
      </View>
    );
  };

  return (
    <View>
      <FlatList 
        data={images} 
        ref={flatListRef} 
        onScroll={handleScroll} 
        renderItem={renderItem} 
        horizontal={true} 
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContentContainer} // Ensure alignment
      />
      <View style={styles.dotContainer}>{renderDotIndicator()}</View>
    </View>
  );
};

export default FoodItemSlider;

const styles = StyleSheet.create({
  flatListContentContainer: {
    alignItems: 'center', // Center items in the FlatList
  },
  imageContainer: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 2.5,  // Adjust width for better centering
    resizeMode: 'contain',  // Ensure the image fits within the container
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  activeDot: {
    backgroundColor: Color.orangeColor,
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  inactiveDot: {
    backgroundColor: Color.iconColor,
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});
