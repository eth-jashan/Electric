import {Dimensions, View, Image, FlatList} from 'react-native'
import MaskedView from '@react-native-community/masked-view'
import { LinearGradient } from 'react-native-svg'
import React, { useState } from 'react'

const {width, height} = Dimensions.get('window')


const BackDrop = () => {

    const [mainImage, setMainImage] = useState([{index:'1'}, {index:'2'}, {index:'3'}, {index:'4'}, {index:'5'}, {index:'6'}, {index:'7'}])

return<View style={{width:width, height:height*0.7, position:'absolute'}}>
    <FlatList
        horizontal
        data={mainImage}
        keyExtractor={(_,i)=>i.toString()}
        renderItem={({item}) =>{
            return <View style={{width:width, height:height*0.7, }}>
                
                    <Image  
                        resizeMode='cover'
                        style={{width:'100%', height:'100%'}}
                        source={{uri:'https://www.techexplorist.com/wp-content/uploads/2019/05/mercedes-eqc-2.jpg'}}
                    />
                
                </View>
        }}
    />
    <LinearGradient
        colors={['transparent', 'white']}
        style={{
                height: height*0.75,
                width,
                position: 'absolute',
                bottom: 0,
            }}
        />
        </View>
    
}
export default BackDrop