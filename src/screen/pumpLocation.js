import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, FlatList, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window')
const pumpLocation = () => {

  const listofPump = [{name:'Volttic Charging Station', lat:'19.00013', long:'73.10938'},
  {name:'ChargeGrid', lat:'19.07434', long:'72.9869988'},
  {name:'Electric Vehicle Charging Station', lat:'19.08551', long:'72.88764'}]

  

  const AnimatedMapView = Animated.createAnimatedComponent(MapView)



  const ITEM_SIZE = width*0.74
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [currentIndex, setIndex] = React.useState('1')
    
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
    let index = 0
    const onViewableItemChanged = React.useRef(({viewableItem,changed}) => {
        
        setIndex(changed[0].key)
        index = changed[0].key
        console.log('Viewaaa', index)
        
        

    })
  
  return (
    
    <SafeAreaView style={styles.container}>
    {listofPump.map((item, index)=>{
      return<AnimatedMapView
    region={{
      latitude:parseFloat(item.lat),
      longitude: parseFloat(item.long),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} 
    style={{position:'absolute', height:height, width:width, opacity:scrollX.interpolate({
      inputRange:[(index -1)*(ITEM_SIZE+40), (index)*(ITEM_SIZE+40), (index +1)*(ITEM_SIZE+40)],
      outputRange:[0,1,0]
    })}} 
    ></AnimatedMapView>
    })}
    
    <Animated.FlatList
      onScroll={Animated.event( [ { nativeEvent : { contentOffset : { x : scrollX } } } ],{useNativeDriver:true})}
      horizontal
      contentContainerStyle={{justifyContent:'center', alignSelf:'center'}}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={ITEM_SIZE+40}
      
      data={listofPump}
      keyExtractor={(_,i)=>i.toString()}
      renderItem={({item}) => {
        return<View style={{width:ITEM_SIZE, padding:10, borderRadius:8, backgroundColor:'white', height:ITEM_SIZE/2, marginHorizontal:20}}>
          <Text>{item.name}</Text>
        </View>

      }}
    />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default pumpLocation