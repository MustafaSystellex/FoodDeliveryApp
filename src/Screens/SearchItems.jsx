import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import MenuItemCards from '../Components/MenuItemCards';
import Color from '../Constants/Color';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { getFoodData } from '../Components/Api';
import Dimension from '../Constants/Dimension';

const { width: screenWidth } = Dimensions.get('window');

const SearchItems = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFoodData();
        const restaurant = result.restaurant;
        const categoriesData = restaurant.menu.categories;
        const flattenedItems = categoriesData.flatMap(category => category.items);
        setAllItems(flattenedItems); // Save all items
        setFilteredItems(flattenedItems); // Initially show all items
      } catch (error) {
        console.error("Error in items ", error);
      }
    };
    fetchData();
  }, []);

  const onChangeSearch = query => {
    setSearchQuery(query);
    if (query) {
      const filtered = allItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
      setFilteredItems(filtered);
    } else {
      setFilteredItems(allItems);
    }
  };

  const BackButton = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 20 }}>
        <MaterialIcons name="keyboard-arrow-left" size={33} color={Color.black} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <BackButton />
        <Searchbar
          placeholder='Search'
          style={styles.searchbar}
          theme={{ colors: { primary: Color.grayColor } }}
          onChangeText={onChangeSearch}
          value={searchQuery}
          autoFocus
        />
      </View>
      {
        filteredItems.length === 0 ? (
          <ActivityIndicator animating={true} size='large' color={Color.orangeColor} />
        ) : (
          <View style={styles.resultsWrapper}>
            {
              filteredItems.length === 0 ? (
                <View style={styles.noResultsContainer}>
                  <Feather color={Color.iconColor} name="search" size={110} />
                  <Text style={styles.noResultsText}>Item not found</Text>
                  <Text style={styles.noResultsSubText}>Try searching the item with a different keyword.</Text>
                </View>
              ) : (
                <>
                  <Text style={styles.resultsCountText}>
                    {`Found ${filteredItems.length} Result${filteredItems.length > 1 ? 's' : ''}`}
                  </Text>
                  <FlatList
                    data={filteredItems}
                    keyExtractor={item => item.id}
                    renderItem={({ item,index }) => (
                      <View style={[index % 2 !== 0 && styles.secondColumn]}>
                      <MenuItemCards
                        data={item}
                        navigation={navigation}
                        parentHeight={200}
                        parentWidth={screenWidth * 0.4}
                      />
                      </View>
                    )}
                    contentContainerStyle={styles.resultsContainer}
                    numColumns={2}
                  />
                </>
              )
            }
          </View>
        )
      }
    </View>
  );
};

export default SearchItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.grayColor,
    paddingHorizontal: '2%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2%',
  },
  searchbar: {
    margin: 10,
    width: '80%',
  },
  noResultsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 'auto',
  },
  noResultsText: {
    color: Color.black,
    fontFamily: 'SFProDisplay-Semibold',
    fontSize: screenWidth * 0.08,
    marginBottom: 5,
    textAlign: 'center',
  },
  noResultsSubText: {
    color: Color.iconColor,
    fontFamily: 'SFProDisplay-Regular',
    width: '50%',
    textAlign: 'center',
  },
  resultsCountText: {
    fontFamily: 'SFProDisplay-Semibold',
    color: Color.black,
    marginBottom: '5%',
    fontSize: screenWidth * 0.06,
    textAlign: 'center',
  },
  resultsWrapper:{
    flex:1
  },
  resultsContainer: {
    paddingHorizontal: Dimension.windowWidth * 0.05,
  },
  cardsItem:{
    flex:1,
    margin: 5
  },
  secondColumn:{
    top: Dimension.windowHeight * 0.05,
  }
});
