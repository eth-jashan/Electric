import React from 'react'
import { View, Text } from 'react-native'

const PerformanceCard = ({icon, title, number}) => {

    return(
        <View style={{backgroundColor:'black', padding:8, borderRadius:8, marginVertical:8, marginHorizontal:4, width:150}}>
            {icon}
            <Text style={{fontFamily:'regular', fontSize:18, color:'#1ec0af',alignSelf:'center'}}>{number}</Text>
            <Text style={{fontFamily:'regular', fontSize:18, color:'white',alignSelf:'center'}}>{title}</Text>
        </View>
    )

}

export default PerformanceCard