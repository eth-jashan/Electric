import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import React from 'react'
import { useRef } from 'react'
import { View, Text, Dimensions ,Animated, Pressable, Image} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context'
import CustomBackground from '../component/backgroundComponent'
import CarGallery from '../component/carGallery'
import { LinearGradient } from 'expo-linear-gradient'

import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import PerformanceCard from '../component/performanceCard'



const features = [{value:'4 hrs',title:'Battery',component:<Feather style={{alignSelf:'center'}} name="battery-charging" size={24} color={"#1ec0af"} />}, 
{value:'420Km',title:'Range','component':<FontAwesome5 style={{alignSelf:'center'}} name="road" size={24} color={"#1ec0af"} />},
{value:'400',title:'Horse','component':<FontAwesome5 style={{alignSelf:'center'}} name="horse-head" size={24} color={"#1ec0af"} />},
{value:'353Nm',title:'Torque','component':<FontAwesome style={{alignSelf:'center'}} name="gears" size={24} color={"#1ec0af"} />},
{value:'8.9s',title:'0-100Km/h','component':<MaterialCommunityIcons style={{alignSelf:'center'}} name="speedometer" size={24} color={"#1ec0af"} />},
]


const CarProfile = () => {

    const scrollY = useRef(new Animated.Value(0)).current
    const {width, height} = Dimensions.get('window')
    
    const feature = ['1', '2', '3', '4', '5']
    const carGallery = ['https://firebasestorage.googleapis.com/v0/b/bookworm-60f6f.appspot.com/o/kona%20front%20trans.png?alt=media&token=27bd2a85-1845-458d-ab6c-d73911c03442',
'https://firebasestorage.googleapis.com/v0/b/bookworm-60f6f.appspot.com/o/kona%20top%20trans.png?alt=media&token=49e3497d-8fee-4045-927e-38d148d99e22',
'https://firebasestorage.googleapis.com/v0/b/merchant-admin.appspot.com/o/images%2FKONAINT.png?alt=media&token=ce5bd6e8-82c1-4a32-a729-abb49818f555',
'https://firebasestorage.googleapis.com/v0/b/bookworm-60f6f.appspot.com/o/kona%20side%20trans.png?alt=media&token=3e6957e1-98c4-4118-a093-3d4ad6e4227c']

    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{height:Dimensions.get('window').height*0.75, overflow:'hidden'}}>
        <Animated.FlatList
            onScroll={Animated.event( [ { nativeEvent : { contentOffset : { y : scrollY } } } ],{useNativeDriver:true})}
            snapToInterval={Dimensions.get('window').height*0.75}
            snapToAlignment='start'
            decelerationRate='fast'
            data={carGallery}
            keyExtractor={x=>x}
            renderItem={({item})=>{
                return<CarGallery
                    link={item}
                />
            }}
        />
        <View style={{position:'absolute', top:(Dimensions.get('window').height*0.75)/2, left:10}}>
        {carGallery.map((_,index)=>{
                return<View
                    key={index}
                    style={{height:8, width:8, borderRadius:16, backgroundColor:'white', marginBottom:8}}
                />
            })}
            <Animated.View
                style={{height:16, width:16, borderRadius:16,borderWidth:1, borderColor:'white', position:'absolute', left:-4, top:-4, transform:[{translateY:Animated.divide(scrollY,Dimensions.get('window').height*0.75).interpolate({
                    inputRange:[0,1],
                    outputRange:[0,16]
                })}]}}
            />
        </View>
        </View>
        <BottomSheet backgroundComponent={CustomBackground} style={{backgroundColor:'black'}} containerHeight={height} snapPoints={[height-(height*0.75), height/2, height]}>
            <BottomSheetScrollView style={{backgroundColor:'#171615'}}>
                <View style={{padding:8, flexDirection:'row', justifyContent:'space-between'}}>
                
                <View>
                <Text style={{fontFamily:'semi-bold', fontSize:30,color:'white' }}>Hyundai Kona</Text>
                <Text style={{fontFamily:'extra-light', fontSize:28,color:'white',marginVertical:8}}>Starting <Text style={{fontFamily:'black', color:'#1ec0af'}}>@</Text><Text style={{marginVertical:8}}> ₹ 14 Lacs</Text></Text>
                </View>

                <View style={{margin:8}}>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                <AntDesign style={{alignSelf:'center'}} name="star" size={24} color="gold" />
                <Text style={{fontFamily:'regular',fontSize:20, alignSelf:'center',color:'white',marginVertical:4}}>4.5/5</Text>
                </View>
                <Text style={{alignSelf:'center',fontFamily:'extra-light',marginVertical:4, color:'white'}}>230 reviews</Text>
                </View>

                </View>

                <Pressable style={{width:width*0.9, backgroundColor:'black', borderWidth:0.75, borderColor:'white',padding:8, borderRadius:8, alignSelf:'center', marginVertical:8}}>
                    <Text style={{fontFamily:'light', color:'white', alignSelf:'center', fontSize:20}}>Emi Calculator</Text>
                </Pressable>

                <Pressable style={{width:width*0.9, backgroundColor:'#00aa99', padding:8, borderRadius:8, alignSelf:'center', marginVertical:8}}>
                    <Text style={{fontFamily:'light', color:'white', alignSelf:'center', fontSize:20}}>Book a test drive</Text>
                </Pressable>

                <Pressable style={{width:width*0.9, backgroundColor:'black', borderWidth:0.75, borderColor:'white',padding:8, borderRadius:8, alignSelf:'center', marginVertical:8}}>
                    <Text style={{fontFamily:'light', color:'white', alignSelf:'center', fontSize:20}}>Variants by color</Text>
                </Pressable>

                <View style={{marginTop:16}}/>
                <Text style={{fontFamily:'light', fontSize:16, color:'#1ec0af', alignSelf:'center',textAlign:'center',marginVertical:12}}>Versatile and powerful, the KONA Electric will be the first All-Electric SUV in India. Its power packed performance provides a thrilling driving experience with high acceleration over long distances. KONA Electric is here to change the way people think about going electric.</Text>

                <View style={{marginTop:16}}/>
                <Text style={{fontFamily:'light', fontSize:24, color:'white', alignSelf:'center',}}>Power and Performance</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={features}
                    keyExtractor={(_,index) => index.toString()}
                    renderItem={({item}) =>{
                        return<PerformanceCard
                            icon={item.component}
                            title={item.title}
                            number={item.value}
                        />
                    }}
                />
                <View style={{marginTop:16}}/>
                <Text style={{fontFamily:'light', fontSize:24, color:'white', alignSelf:'center',}}>Comfort and Interior</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={feature}
                    renderItem={({item})=>{
                        return<View style={{backgroundColor:'black', margin:12,  borderRadius:10,width:width*0.6}}>
                        <View style={{width:width*0.6, height:width*0.6/2,  borderRadius:10}}>
                            <Image
                                style={{width:'100%', height:'100%',  borderRadius:10}}
                                source={{uri:'https://firebasestorage.googleapis.com/v0/b/bookworm-60f6f.appspot.com/o/kona%20interior.jpg?alt=media&token=74e0bd78-121b-4328-8d9b-c3002be3d703'}}
                            />
                        </View>
                        <Text style={{fontFamily:'regular', fontSize:18, alignSelf:'center', color:'white', margin:12}}>Shift-by-Wire Automatic Transmission</Text>
                        </View>
                    }}
                />

                <View style={{marginTop:16}}/>
                <Text style={{fontFamily:'light', fontSize:24, color:'white', alignSelf:'center',}}>Exterior and Safety</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={feature}
                    renderItem={({item})=>{
                        return<View style={{backgroundColor:'black', margin:12,  borderRadius:10,width:width*0.6}}>
                        <View style={{width:width*0.6, height:width*0.6/2,  borderRadius:10}}>
                            <Image
                                style={{width:'100%', height:'100%',  borderRadius:10}}
                                source={{uri:'https://firebasestorage.googleapis.com/v0/b/bookworm-60f6f.appspot.com/o/kona%20interior.jpg?alt=media&token=74e0bd78-121b-4328-8d9b-c3002be3d703'}}
                            />
                        </View>
                        <Text style={{fontFamily:'regular', fontSize:18, alignSelf:'center', color:'white', margin:12}}>Shift-by-Wire Automatic Transmission</Text>
                        </View>
                    }}
                />
            </BottomSheetScrollView>
        </BottomSheet> 
       
        </SafeAreaView>
    )

}

export default CarProfile