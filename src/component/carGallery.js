import React from 'react'
import { Dimensions, View, Image } from 'react-native'

const CarGallery = ({link}) => {

    const ITEM_WIDTH = Dimensions.get('window').width
    const ITEM_HEIGHT = Dimensions.get('window').height*0.75

    return(
        <View style={{width:ITEM_WIDTH, height:ITEM_HEIGHT, backgroundColor:'black'}}>
            <Image
                source={{uri:link}}
                style={{width:'100%', height:'100%'}}
                resizeMode='contain'
            />
        </View>
    )

}
export default CarGallery