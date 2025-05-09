import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

// Splash Screens
import Splash_1 from './src/Splash_Screen/Splash_Screesn_Page_1';


export default function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondPage(true);
    }, 10000); // 10 секунд

    return () => clearTimeout(timer);
  }, []);

  return (
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        { <Splash_1 />}
      </View>
  );

}
