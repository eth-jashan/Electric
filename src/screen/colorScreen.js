import React  from 'react'
import { useState } from 'react'
import {View, StyleSheet, Text,  Image, Dimensions,} from 'react-native'
import { Directions, State } from 'react-native-gesture-handler'
import { FlingGestureHandler } from 'react-native-gesture-handler'
import {SafeAreaView } from 'react-native-safe-area-context'

const ColorScreen = () => {

    const data = [ {bgColor:'gold'}, {bgColor:'blue'}, {bgColor:'purple'}, {bgColor:'white'} ]
    const [index, setIndex] = useState(0)

    return(
        <FlingGestureHandler
            key='left'
            direction={Directions.LEFT}
            onHandlerStateChange={(ev)=>{
                
                if(ev.nativeEvent.state === State.END){
                    setIndex(index+1)
                }
            }}
        >
        <FlingGestureHandler
            key='right'
            direction={Directions.RIGHT}
            onHandlerStateChange={(ev)=>{
                
                if(ev.nativeEvent.state === State.END){
                    setIndex(index-1)
                }
            }}
        >
        
        <SafeAreaView style={{backgroundColor:data[index].bgColor, height:Dimensions.get('screen').height}}>
        
        <View style={{width:300, height:150}}>
        <Text style={{fontFamily:'regular', fontSize:36, alignSelf:'center',color:'black'}}>{data[index].bgColor}</Text>
            <Image
                style={{width:'100%', height:'100%',alignSelf:'center', justifyContent:'center'}}
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/inventory-managment-1f9cc.appspot.com/o/Hyundai-Kona-Electric-Right-Front-Three-Quarter-162180-removebg-preview.png?alt=media&token=51f12f7e-0d9b-46cf-987a-00e5366d717d'}}
            />
        </View>
        </SafeAreaView>

        </FlingGestureHandler>
        </FlingGestureHandler>

    )


}

export default ColorScreen