import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const TypeScrollable = ({data, index, color}) => {

    

    return(
        <View style={{margin:12, backgroundColor:color, padding:6, borderRadius:6}}>
            <Text style={styles.textStyle}>{data}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    textStyle:{
        color:'white',
        fontSize:20,
        fontFamily:'light'
    },
    containerStyle:{
        margin:12,
        
    }
})

export default TypeScrollable