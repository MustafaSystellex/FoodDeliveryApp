import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Color from '../Constants/Color'

const Extra = () => {
    const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const flatListRef = useRef(null); 

    useEffect(()=> {
        flatListRef.current.scrollToIndex({
            index: selectedIndex,
            animated: true
        })
    },[selectedIndex])
  return (
    <View style={{flex:1, backgroundColor: Color.grayColor}}>
        <View style={{margin: 10, }}>
            <FlatList
            initialScrollIndex={selectedIndex}
            ref={flatListRef}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index})=>{
                return(
                    <TouchableOpacity style={{width:50, height: 50, marginLeft: 10, borderWidth:1, borderRadius:10, justifyContent: 'center', alignItems: 'center', backgroundColor:selectedIndex == index ? '#000' : '#fff' }}>
                        <Text style={{color: selectedIndex==index ? Color.white : Color.black}}>{item}</Text>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
        <View style={{marginTop: 20, width: '100%'}}>
            <FlatList
            data={data}
            onScroll={event=>{
                const ind = event.nativeEvent.contentOffset.y/50;
                setSelectedIndex(ind.toFixed(0))
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({item,index})=> {
                return(
                    <TouchableOpacity onPress={()=> {setSelectedIndex(index)}} style={{width: "90%", height:50, alignSelf: 'center', marginTop: 10, borderWidth:1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: data.length-1 === index ? 300 : 0}}>
                        <Text style={{color: Color.black}}>{item}</Text>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
      
    </View>
  )
}

export default Extra

const styles = StyleSheet.create({})