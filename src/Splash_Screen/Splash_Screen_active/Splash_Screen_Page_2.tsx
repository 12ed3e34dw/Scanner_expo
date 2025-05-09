import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from "react";

// Ico
import splash1 from "../../assets/assets_Splash_Screen/foto_Splash_2.png";
import splash2 from "../../assets/assets_Splash_Screen/foto_1.png";

// Page
import Scanner from '../../Components/Scanners/Scanners';  // импорт для корректного использования

export default function SplashScreenPage2({ onStart }) {
    const [isFirstStyle, setIsFirstStyle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFirstStyle(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={isFirstStyle ? styles.container_main : styles.container}>
            <>
                <Image source={isFirstStyle ? splash1 : splash2} style={{ width: 150, height: 150, marginBottom: 10, top: 170 }} />
                <Text style={isFirstStyle ? styles.text_main : styles.text}>
                    Go and enjoy our features for free and
                </Text>
                <Text style={isFirstStyle ? styles.text_1_main : styles.text_1}>
                    make your life easy with us.
                </Text>
                <TouchableOpacity
                    style={isFirstStyle ? styles.button_main : styles.button}
                    onPress={onStart}  // Вызываем onStart из пропсов
                >
                    <Text style={isFirstStyle ? styles.buttonText_main : styles.buttonText}>
                        Let’s Start
                    </Text>
                </TouchableOpacity>
            </>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        marginTop: 380,
    },
    text_1: {
        color: 'white',
    },
    button: {
        backgroundColor: "#FDB623",
        width: 319,
        alignItems: "center",
        left: -2.5,
        margin: 50,
        height: 58,
        marginTop: 40,
        borderRadius: 8,
    },
    buttonText: {
        margin: 17,
        fontWeight: 'bold',
    },
    image: {
        borderRadius: 8,
        top: 140,
        width: 200,
        height: 200,
    },
    image_1: {
        marginLeft: 230,
        top: -38.3,
    },

    container_main: {
        flex: 1,
        backgroundColor: "#FDB623",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_main: {
        color: 'black',
        marginTop: 380,
    },
    text_1_main: {
        color: 'black',
    },
    button_main: {
        backgroundColor: "#333333",
        width: 319,
        alignItems: "center",
        left: -2.5,
        margin: 50,
        height: 58,
        marginTop: 40,
        borderRadius: 8,
    },
    buttonText_main: {
        color: 'white',
        margin: 17,
        fontWeight: 'bold',
    },
    image_1_main: {
        marginLeft: 230,
        top: -38.3,
    },
});

