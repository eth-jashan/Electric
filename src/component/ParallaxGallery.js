import React, { useRef, useState } from 'react'
import { Animated, View, Text, StyleSheet, Dimensions, Button,Image} from 'react-native'
import { FlatList} from 'react-native-gesture-handler'



const ParallaxGallery = ({imageList}) => {

    
    const {width, height} = Dimensions.get("window")
    const scrollX = useRef(new Animated.Value(0)).current
    console.log('Image :',imageList)

    return(
        <Animated.FlatList
            onScroll={Animated.event( [ { nativeEvent : { contentOffset : { x : scrollX } } } ],{useNativeDriver:true})}
            data={imageList}
            keyExtractor={x=>x}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) =>{

                const inputRange = [
                    (index-1) * width,
                    (index* width),
                    (index+1)*width
                ]
                const translatex = scrollX.interpolate({
                    inputRange,
                    outputRange:[-width*0.7, 0, width*0.7]
                })


                return(
                    <View style={{width:width, alignItems:'center'}}>
                    <View style={{}}>
                    <View style={{width:width, height:height/2.5, alignContent:'center',overflow:'hidden'}}>    
                        <Animated.Image
                            
                            style={{width:width, height:width/2, transform:[{translateX:translatex}]}}
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/bookworm-60f6f.appspot.com/o/kona%20interior.jpg?alt=media&token=74e0bd78-121b-4328-8d9b-c3002be3d703'}}
                            resizeMode='cover'
                            
                        />
                    </View>
                    </View>
                    <Text style={{fontFamily:'regular', fontSize:20, alignSelf:'center'}}>Comfort Interior</Text>
                    </View>
                )
            }}
        />
    )
}

    
export default ParallaxGallery
// let username = 'rzp_test_OgR4artfYBvJM6';
// let password = 'lHWZbgIrR7e4geiGp7CctJDm';
// let url = `https://api.razorpay.com/v1/customers`
// let authString = `${username}:${password}`
// let headers = new Headers();
// headers.set('Authorization', 'Basic ' + btoa(authString))
// fetch(url,{method: 'POST', headers: headers})