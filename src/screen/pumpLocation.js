import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, FlatList, Animated, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';

const {width, height} = Dimensions.get('window')
const pumpLocation = () => {

  const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ]

  const listofPump = [{name:'Volttic Charging Station', lat:'19.00013', long:'73.10938'},
  {name:'ChargeGrid', lat:'19.07434', long:'72.9869988'},
  {name:'Electric Vehicle Charging Station', lat:'19.08551', long:'72.88764'},
  {name:'Electric Vehicle Charging Station', lat:'19.08551', long:'72.88764'}]

  

  const AnimatedMapView = Animated.createAnimatedComponent(MapView)
  const AnimatedMarker = Animated.createAnimatedComponent(Marker)



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
      return(
    <AnimatedMapView
      customMapStyle={mapStyle}
    region={{
      latitude:parseFloat(item.lat),
      longitude: parseFloat(item.long),
      latitudeDelta: 0.000922,
      longitudeDelta: 0.0421,
    }} 
    
    style={{position:'absolute', height:height, width:width, opacity:scrollX.interpolate({
      inputRange:[(index -1)*(ITEM_SIZE+40), (index)*(ITEM_SIZE+40), (index +1)*(ITEM_SIZE+40)],
      outputRange:[0,1,0]
    })}} 
    >
    <AnimatedMarker
      opacity={scrollX.interpolate({
      inputRange:[(index -1)*(ITEM_SIZE+40), (index)*(ITEM_SIZE+40), (index +1)*(ITEM_SIZE+40)],
      outputRange:[0,1,0]
    })}
      coordinate={{ latitude:parseFloat(item.lat),
      longitude: parseFloat(item.long) }}
    >
      <Animated.View style={{
        height:30,
        width:30
        }}>
        <Image
          style={{width:'100%', height:'100%'}}
          source={{uri:'https://firebasestorage.googleapis.com/v0/b/merchant-admin.appspot.com/o/taxiClone%2Fstore.png?alt=media&token=bb3edcc3-f56e-4815-b750-e9a6c81ea22c'}}
        />
       </Animated.View>
    </AnimatedMarker>
    </AnimatedMapView>
    )})}
    
    <FlatList
      contentContainerStyle={{}}
      horizontal
      data={listofPump}
      keyExtractor={x=>x.name}
      renderItem={({item}) =>{
        return<View style={{justifyContent:'center', width:100, padding:8, borderRadius:8, backgroundColor:'black', height:40, marginHorizontal:6, borderRadius:4, borderWidth:0.2, borderColor:'white'}}>
          <Text style={{fontFamily:'regular', color:'white', alignSelf:'center'}}>Navi Mumbai</Text>
        </View>
      }}
    />
    
    <Animated.FlatList
      onScroll={Animated.event( [ { nativeEvent : { contentOffset : { x : scrollX } } } ],{useNativeDriver:true})}
      horizontal
      contentContainerStyle={{alignSelf:'flex-end',bottom:100}}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={ITEM_SIZE+40}
      
      data={listofPump}
      keyExtractor={(_,i)=>i.toString()}
      renderItem={({item}) => {
        return<View style={{width:ITEM_SIZE,  borderRadius:8,  height:ITEM_SIZE/2, marginHorizontal:20}}>
        <BlurView tint='dark' intensity={125} style={[StyleSheet.absoluteFillObject, {borderRadius:8,padding:10,backgroundColor:'black'}]}>
          <Text style={{fontFamily:'regular', color:'white', fontSize:20, opacity:1}}>Hello! I am bluring contents underneath</Text>
        </BlurView>
        </View>

      }}
    />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    height:Dimensions.get('screen').height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').height,
  },
});

export default pumpLocation