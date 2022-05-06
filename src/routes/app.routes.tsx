import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detalhes from '../screens/Detalhes';
import Favoritos from '../screens/Favoritos';

const Stack = createNativeStackNavigator();

export function AppRoutes(){
    return(    
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Favoritos" component={Favoritos}/>
            <Stack.Screen name="Detalhes" component={Detalhes}/>
        </Stack.Navigator>            
    );
}