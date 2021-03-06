import React from 'react';
import { Welcome } from './src/pages/Welcome';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoadind from 'expo-app-loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return (
      <AppLoadind />
    )
  }

  return (
    <Welcome />
  )
}