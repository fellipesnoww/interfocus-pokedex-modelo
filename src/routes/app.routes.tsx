import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Detalhes from '../screens/Detalhes';
import Favoritos from '../screens/Favoritos';
import Perfil from '../screens/Perfil';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Splash from '../screens/Splash';

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
    const tema = useTheme();
    return(    
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false, 
                tabBarActiveTintColor: tema.primary,
                tabBarInactiveTintColor: tema.ligth_gray
             }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeStack}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons 
                            name="home"
                            size={size}
                            color={color}
                        />
                    ))
                }} 
            />
            <Tab.Screen 
                name="Favoritos" 
                component={FavoritosStack}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons 
                            name="star"
                            size={size}
                            color={color}
                        />
                    ))
                }} 
             />
            <Tab.Screen 
                name="Perfil" 
                component={PerfilStack}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons 
                            name="person"
                            size={size}
                            color={color}
                        />
                    ))
                }} 
            />
        </Tab.Navigator>         
    );
}