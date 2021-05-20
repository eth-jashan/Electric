
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {View, Text, StyleSheet, FlatList, Dimensions, Image, Animated, Platform, ImageBackground, Pressable} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackDrop from '../component/backDrop'

const {width, height} = Dimensions.get('screen')



const CategoryScreen2 = ({navigation}) => {
    const url1 = 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20200904110617_EQC-front-track.jpg&h=795&w=1200&c=1'
    const url2 = 'https://ev-database.org/img/auto/Mercedes_EQC/Mercedes_EQC-01.jpg'

    const [mainImage, setMainImage] = useState([{index:'1', uri:url1}, {index:'2',uri:url2}, {index:'3',uri:url1}, {index:'4',uri:url2}, {index:'5',uri:url1}, {index:'6',uri:url2}, {index:'7',uri:url1}, {index:'7',uri:url2}])
    // useEffect(()=>{
    //     setMainImage([{ key: 'empty-left' }, ...mainImage, ])
    // },[])
   
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const ITEM_SIZE = width*0.72
    const SPACER_SIZE = (width - ITEM_SIZE)/2
    return(
        <SafeAreaView style={{width:width, height:height,  backgroundColor:'#0c111b'}}>
            {mainImage.map((item, index)=>{
                return<Animated.Image
                    key={index}
                    blurRadius={2}
                    style={{width:'100%', height:400, zIndex:0, left:0, right:0, position:'absolute', opacity:scrollX.interpolate({
                        inputRange:[(index -1)*(ITEM_SIZE+40), (index)*(ITEM_SIZE+40), (index +1)*(ITEM_SIZE+40)],
                        outputRange:[0,1,0]
                    })}}
                    source={{uri:item.uri}}
                />
            })}
            <LinearGradient
                colors={["rgba(0, 0, 0, 0.3)", '#0c111b']}
                style={{position:'absolute', height:400, right:0, left:0, top:0}}
            />
            <Animated.FlatList
                onScroll={Animated.event( [ { nativeEvent : { contentOffset : { x : scrollX } } } ],{useNativeDriver:true})}
                data={mainImage}
                horizontal
                snapToInterval={ITEM_SIZE + 40}
                decelerationRate='fast'
                snapToAlignment='start'
                contentContainerStyle={{justifyContent:'center', alignSelf:'center'}}
                keyExtractor={(_,i)=>i.toString()}
                renderItem={({item})=>{
                    return(
                    <View style={{backgroundColor:'black', width:ITEM_SIZE, height:height/2,  margin:20, borderRadius:8, padding:10, shadowColor:'black',elevation:2, shadowOffset:{height:0, width:0}, shadowOpacity:0.7, shadowRadius:4}}>
                    <LinearGradient
                        style={{right:0, bottom:0,left:0,top:0, position:'absolute'}}
                        
                        colors={['transparent', 'black']}
                    />
                    <Image 
                    resizeMode='contain' 
                    style={{width:'100%', height:'50%',borderRadius:8}} 
                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/merchant-admin.appspot.com/o/images%2Fmercedes-benz-9-logo-png-transparent.png?alt=media&token=223742c3-2e10-4825-aee4-dc77bee80ebf'}}/>
                    <Text style={{fontFamily:'semi-bold', fontSize:30,color:'white', alignSelf:'center', marginVertical:16}}>Mercedes</Text>
                    
                    <Pressable onPress={()=>navigation.navigate('CarProfile')} style={{marginVertical:16, padding:10, width:'50%', backgroundColor:'#1ec0af', borderRadius:20, alignSelf:'center'}}>
                    <Text style={{fontFamily:'light', alignSelf:'center', color:'white'}}>Take A Tour</Text>
                    </Pressable>
                    <Pressable onPress={()=>navigation.navigate('CarList')} style={{marginVertical:16, padding:10, width:'50%', backgroundColor:'#1ec0af', borderRadius:20, alignSelf:'center'}}>
                    <Text style={{fontFamily:'light', alignSelf:'center', color:'white'}}>Take A Tour</Text>
                    </Pressable>
                    </View>)
                }}
            />
        
        </SafeAreaView>
    )


}

export default CategoryScreen2