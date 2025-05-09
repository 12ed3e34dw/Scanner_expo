import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';

// Splash Screens
import Splash_1 from '@splash/Splash_Screen_active/Splash_Screen_Page_1';
import Splash_2 from '@splash/Splash_Screen_active/Splash_Screen_Page_2';

//Scanner
import Scanner from './src/Components/Scanners/Scanner';

export default function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondPage(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        {showScanner ? (
            <Scanner />
        ) : showSecondPage ? (
            <Splash_2 onStart={() => setShowScanner(true)} />
        ) : (
            <Splash_1 />
        )}
      </View>
  );
}
