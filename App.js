import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appnav from './appNav/navigator';
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading"

const fontLoading = () =>{ 
  return Font.loadAsync({
    'black':require('./assets/fonts/Ambit-Black.ttf'),
    'bold':require('./assets/fonts/Ambit-Bold.ttf'),
    'extra-light':require('./assets/fonts/Ambit-ExtraLight.ttf'),
    'regular':require('./assets/fonts/Ambit-Regular.ttf'),
    'light':require('./assets/fonts/Ambit-Light.ttf'),
    'semi-bold':require('./assets/fonts/Ambit-SemiBold.ttf'),
    'thin': require('./assets/fonts/Ambit-Thin.ttf')
})}

export default function App() {

  const[fontLoad, setFontLoad] = useState(false)

  if(!fontLoad)
      {
        return <AppLoading
        startAsync ={fontLoading}
        onFinish = {() => setFontLoad(true)}
        onError = {(test)=> console.log(test) }
        /> 
      }

  return (
    <Appnav/>
  );
}


