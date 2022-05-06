import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Detalhes from '../screens/Detalhes';
import Favoritos from '../screens/Favoritos';
import Perfil from '../screens/Perfil';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={Home}/>
            <Stack.Screen name="Detalhes" component={Detalhes}/>
        </Stack.Navigator> 
    );
}

function FavoritosStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FavoritosScreen" component={Favoritos}/>       
        </Stack.Navigator>   
    )
}

function PerfilStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PerfilScreen" component={Perfil}/>       
        </Stack.Navigator>   
    )
}

export function AppRoutes(){
    return(    
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Favoritos" component={FavoritosStack} />
            <Tab.Screen name="Perfil" component={PerfilStack} />
        </Tab.Navigator>         
    );
}