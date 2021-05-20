import React, {useRef, useState } from 'react'

import {View, Text, Dimensions ,StyleSheet, Animated, Image, StatusBar} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'
import CategoryCard from '../component/categoryCard'
import { LinearGradient } from 'expo-linear-gradient';
import StaggeringView from '../component/stageringView'
import TypeScrollable from '../component/typeScrollable'

const CategoryScreen  = ({navigation}) => {

    const categoryArray = [1, 2, 3, 4, 5, 6]
    const word = ['Mercedes', 'Tesla', 'Tata', 'MG Hector', 'Kia', 'Hyundai']
    const category = ['New Arrival', 'Top EV', 'Make In India', 'Two-Wheelers', 'Lux-EV', 'Concept-Cars']
    const fadeAnim = useRef(new Animated.Value(0)).current
    const transition = useRef(new Animated.Value(0)).current
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
    let currentIndex = 0

    const [categoryIndex, setCatIndex] = useState()

    const categoryHandler = (index) => {
        setCatIndex(index)
    }

    const staggeringView = () => {
        Animated.spring(
          transition,
          { 
            toValue:-Dimensions.get('window').width,
            duration: 1000,
            useNativeDriver:true,
          }
        ).start();
      }
    const fadeView = () => {
        Animated.timing(
            fadeAnim,
            {
              toValue: 1,
              duration: 2000,
              useNativeDriver:true
            }
          ).start();
    }




    const onViewableItemChanged = useRef(({viewableItem,changed}) => {
        let index = changed[0].index
        transition.setValue(-Dimensions.get('window').width)
        fadeAnim.setValue(0)
        fadeView()
        staggeringView()
        setText(word[index])
        setNumber(index)
        

    })

    const [text, setText] = useState(word[currentIndex])
    const [number, setNumber] = useState(0)

    return(
        
    <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
    <StatusBar hidden={true}/>
    <View style={styles.containerStyle}>
    <Animated.Image
        source={{uri:'https://firebasestorage.googleapis.com/v0/b/merchant-admin.appspot.com/o/images%2Fdark-black-abstract-background-with-wood-chips.jpg?alt=media&token=3dda198f-b0fe-438f-9fde-d22bc6e00464'}}
        style={{...StyleSheet.absoluteFillObject, opacity:fadeAnim}}
    />
        <FlatList
            horizontal
            data={category}
            keyExtractor={(_,index)=>index.toString()}
            renderItem={({item, index})=>{

                let status = index === categoryIndex

                return(
                <TouchableOpacity onPress={()=>categoryHandler(index)}>
                <TypeScrollable
                    data={item}
                    index = {index}
                    color={status?'#1ec0af':null}
                />
                </TouchableOpacity>)
            }}
        />
        <FlatList
            viewabilityConfig={viewConfigRef.current}
            onViewableItemsChanged={onViewableItemChanged.current}
            pagingEnabled
            snapToAlignment='start'
            initialScrollIndex={0}
            decelerationRate='normal'
            snapToInterval={Dimensions.get('window').height}
            style={{alignSelf:'center'}}
            keyExtractor={x=>x.toString()}
            data = {categoryArray}
            renderItem={({item, index})=>{
                return<CategoryCard
                    index={index}
                    viewableIndex = {number}
                />
            }}
        />
        
        <View style={{position:'absolute', bottom:Dimensions.get('window').width/2,  width:Dimensions.get('window').width}}>
        <Animated.View style={{transform: [{translateX:transition}], left:Dimensions.get('window').width}}>
        <TouchableOpacity onPress={()=>navigation.navigate('CarList')}>
           <View style={{ padding:10, width:Dimensions.get('window').width*0.55, backgroundColor:'#1ec0af', borderRadius:20, alignSelf:'center'}}>
            <Text style={styles.textStyle2}>Take A Tour</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('CarProfile')}>
           <View style={{ padding:10, width:Dimensions.get('window').width*0.55, backgroundColor:'#1ec0af', borderRadius:20, alignSelf:'center'}}>
            <Text style={styles.textStyle2}>Take A Tour</Text>
           </View>
           </TouchableOpacity>
        </Animated.View>   
        </View>
        

        <Animated.View style={{position:'absolute', bottom:50, opacity:fadeAnim, width:Dimensions.get('window').width}}>
           <View style={{ padding:10}}>
            <Text style={styles.textStyle}>{text}</Text>
           </View> 
        </Animated.View>
    </View>
    </SafeAreaView>)

}

const styles = StyleSheet.create({
    
    containerStyle:{
        flex:1,
        backgroundColor:'black'
    },textStyle:{
        alignSelf:'center',
        color:'white',
        fontFamily:'light',
        fontSize:45
    },
    textStyle2:{
        alignSelf:'center',
        color:'white',
        fontFamily:'regular',
        fontSize:25
    }
})

export default CategoryScreen