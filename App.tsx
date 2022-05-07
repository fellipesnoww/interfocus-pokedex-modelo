import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';
import { StatusBar } from 'react-native';
import Splash from './src/screens/Splash';


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <Splash />;
  }
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        translucent
        backgroundColor="transparent" 
        barStyle='dark-content'
      />
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  );
}

