import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from '../src/screen/categoryScreen';
import CarProfile from '../src/screen/carProfile';
import CarListScreen from '../src/screen/carListScreen';
import ColorScreen from '../src/screen/colorScreen';
import CategoryScreen2 from '../src/screen/cattegoryScreen2';
import pumpLocation from '../src/screen/pumpLocation';






const vehicleStack = createStackNavigator()

const Appnav = () => {

    return(

        <NavigationContainer>

            <vehicleStack.Navigator>
            <vehicleStack.Screen name = 'Category' component={CategoryScreen2} options={{header:()=>{return false}}} />
            <vehicleStack.Screen name = 'CarList' component={CarListScreen} options={{header:()=>{return false}}} />
            <vehicleStack.Screen name = 'CarProfile' component={CarProfile} options={{header:()=>{return false}}} />            
            <vehicleStack.Screen name = 'CategoryVehicle' component={CategoryScreen} options={{header:()=>{return false}}} />
            </vehicleStack.Navigator>

        </NavigationContainer>
    )
}

export default Appnav
