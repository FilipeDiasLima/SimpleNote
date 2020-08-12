import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

import { Overlock_400Regular, Overlock_700Bold, useFonts } from '@expo-google-fonts/overlock'

export default function App() {
  let [fontsLoaded] = useFonts({
    Overlock_400Regular,
    Overlock_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Routes />
      <StatusBar barStyle="dark-content" backgroundColor="#E0C5DF" translucent />
    </>
  );
}