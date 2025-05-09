import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


import splash1 from '../../assets/assets_Splash_Screen/foto_Splash_2.png';
import splash2 from '../../assets/assets_Splash_Screen/foto_1.png';

export default function SplashScreenPage1() {
    const [isFirstStyle, setIsFirstStyle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFirstStyle(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={isFirstStyle ? styles.container : styles.container_main}>
            <Image source={isFirstStyle ? splash1 : splash2} style={{ width: 150, height: 150, marginBottom: 20 }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDB623",
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_main: {
        flex: 1,
        backgroundColor: "#333333",
        justifyContent: 'center',
        alignItems: 'center',
    },
});

