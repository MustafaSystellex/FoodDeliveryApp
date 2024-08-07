import React, { useEffect, useState, useRef } from 'react';
import { FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import Header from '../Components/Header';
import DrawerScreenWrapper from '../Components/DrawerScreenWrapper';
import MenuItemCards from '../Components/MenuItemCards';
import Color from '../Constants/Color';
import Dimension from '../Constants/Dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { getFoodData } from '../Components/Api';

const Home = () => {
  const navigation = useNavigation();
  const [activeMenu, setActiveMenu] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [data, setData] = useState([]);
  const sectionListRef = useRef(null);
  const flatListRef = useRef(null);

  const filterByCategory = category => {
    setActiveMenu(category);
    setSearchQuery('');
    setFilteredItems(data.find(cat => cat.name === category)?.items || []);
    const sectionIndex = data.findIndex(cat => cat.name === category);
    if (sectionListRef.current && sectionIndex !== -1) {
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        viewOffset: 0,
        animated: true, // Enable smooth scrolling
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFoodData();
        const restaurant = result.restaurant;
        const categories = restaurant.menu.categories;
        setData(categories);
        setActiveMenu(categories[0]?.name || '');
        setFilteredItems(categories[0]?.items || []);
      } catch (error) {
        console.error("Error in items ", error);
      }
    };
    fetchData();
  }, []);

  const renderHorizontalList = (title, items) => (
    <View style={styles.horizontalSection}>
      <Text style={styles.catText}>{title}</Text>
      <FlatList
        horizontal
        contentContainerStyle={styles.horizontalList}
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item, index }) => (
          <MenuItemCards item={item} navigation={navigation} index={index} key={index} data={item} />
        )}
      />
    </View>
  );

  // const renderSectionList = () => (
  //   <SectionList
  //     ref={sectionListRef}
  //     sections={data.map(cat => ({ title: cat.name, data: cat.items }))}
  //     keyExtractor={(item, index) => `${item.id}-${index}`}
  //     renderItem={({ item, section }) => null}
  //     renderSectionHeader={({ section: { title, data } }) => renderHorizontalList(title, data)}
  //     onViewableItemsChanged={({ viewableItems }) => {
  //       if (viewableItems.length > 0) {
  //         const activeCategory = viewableItems[0].section.title;
  //         if (activeCategory !== activeMenu) {
  //           setActiveMenu(activeCategory);
  //           const index = data.findIndex(cat => cat.name === activeCategory);
  //           if (flatListRef.current) {
  //             flatListRef.current.scrollToIndex({
  //               index,
  //               animated: true, // Enable smooth scrolling
  //               viewOffset: Dimension.windowWidth / 4, // Adjust as needed
  //               viewPosition: 0.5 // Center the item
  //             });
  //           }
  //         }
  //       }
  //     }}
  //     viewabilityConfig={{
  //       itemVisiblePercentThreshold: 50,
  //     }}
  //   />
  // );

  return (
    <DrawerScreenWrapper>
      <View style={{ flex: 1, backgroundColor: Color.grayColor }}>
        <Header
          leftIcon={{ component: <Ionicons name='menu' size={32} style={styles.icon} />, onPress: () => navigation.toggleDrawer() }}
          rightIcon={{ component: <AntDesign name='shoppingcart' size={32} style={styles.icon} />, onPress: () => navigation.navigate('Cart') }}
        />
        <View>
          <Text style={styles.headerText}>Delicious {"\n"}food for you</Text>
          <TouchableOpacity activeOpacity={0.9} style={{ elevation: 8 }} onPress={() => navigation.navigate('SearchItems')}>
            <Searchbar
              placeholder='Search'
              style={styles.searchbar}
              value={searchQuery}
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>
        {data.length === 0 ? (
          <ActivityIndicator animating={true} size='large' color={Color.orangeColor} />
        ) : (
          <>
            <View style={styles.menuContainer}>
              <FlatList
                ref={flatListRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.id}
                style={{ overflow: 'visible' }}
                renderItem={({ item }) => {
                  let isActive = item.name === activeMenu;
                  return (
                    <TouchableOpacity
                      onPress={() => filterByCategory(item.name)}
                      style={[styles.menuItem, { backgroundColor: isActive ? Color.orangeColor : Color.white }]}
                    >
                      <Text style={{ color: isActive ? Color.white : Color.orangeColor, fontFamily: 'SFProDisplay-Medium' }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <SectionList
              ref={sectionListRef}
              sections={data.map(cat => ({ title: cat.name, data: cat.items }))}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              renderItem={({ item, section }) => null}
              renderSectionHeader={({ section: { title, data } }) => renderHorizontalList(title, data)}
              onViewableItemsChanged={({ viewableItems }) => {
                if (viewableItems.length > 0) {
                  const activeCategory = viewableItems[0].section.title;
                  if (activeCategory !== activeMenu) {
                    setActiveMenu(activeCategory);
                    const index = data.findIndex(cat => cat.name === activeCategory);
                    if (flatListRef.current) {
                      flatListRef.current.scrollToIndex({
                        index,
                        animated: true, // Enable smooth scrolling
                        viewOffset: Dimension.windowWidth / 4, // Adjust as needed
                        viewPosition: 0.5 // Center the item
                      });
                    }
                  }
                }
              }}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 50,
              }}
            />
          </>
        )}
      </View>
    </DrawerScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'SFProDisplay-Semibold',
    fontSize: 40,
    paddingHorizontal: '12%',
    color: "#000",
    marginBottom: 15,
  },
  catText: {
    fontFamily: 'SFProDisplay-Semibold',
    fontSize: 20,
    paddingHorizontal: '12%',
    color: "#000",
    marginBottom: 10,
  },
  searchbar: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: '10%',
  },
  menuContainer: {
    marginHorizontal: Dimension.windowWidth / 16,
    marginTop: '1%',
    marginBottom: '7%',
  },
  menuItem: {
    padding: 6,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginRight: 18,
  },
  scrollViewContent: {
    paddingHorizontal: Dimension.windowWidth / 16,
  },
  horizontalList: {
    paddingHorizontal: Dimension.windowWidth / 16,
  },
  horizontalSection: {
    marginBottom: 20,
  },
  icon: {
    color: Color.black,
    resizeMode: 'contain',
  },
});
