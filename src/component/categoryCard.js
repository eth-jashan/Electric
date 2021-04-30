import React from 'react'
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native'
import FadeInView from './fadeInView'

const CategoryCard = ({index, viewableIndex}) => {

    let status = Boolean(index === viewableIndex)
    

    return<View style={styles.cardStyle}>
        <Image
            resizeMode='cover'
            style={styles.imageStyle}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/merchant-admin.appspot.com/o/images%2Fmercedes-benz-9-logo-png-transparent.png?alt=media&token=223742c3-2e10-4825-aee4-dc77bee80ebf'}}
        />
        
    </View>
    
}

const styles = StyleSheet.create({
    cardStyle:{
        width:Dimensions.get('window').width, 
        height:Dimensions.get ('window').height
    },
    imageStyle:{
        width:Dimensions.get('window').width/1.5, 
        height:Dimensions.get ('window').height/3,
        alignSelf:'center',
        marginVertical:50
    },
    
    
})

export default CategoryCard