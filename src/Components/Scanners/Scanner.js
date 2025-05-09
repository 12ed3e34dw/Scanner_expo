import { StyleSheet, Text, Pressable, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Scanners from './Scanners';

export default function Scanner() {
    const [done, setDone] = useState(false);
    const [permission, setPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setPermission(status === 'granted');
        };

        getPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`${data}`);
        setDone(true);
    };

    if (permission === null) {
        return <Text>Requesting camera permission</Text>;
    }
    if (permission === false) {
        return <Text>Camera access denied</Text>;
    }
    if (scanned || done) {
        return <Scanners />;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {/* Полупрозрачный слой на весь экран */}
            <View style={styles.blurOverlay} />

            {/* Кнопка поверх всех слоёв */}
            <Pressable style={styles.button} onPress={() => setDone(true)}>
                <Text style={styles.buttonText}>Home</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blurOverlay: {
        ...StyleSheet.absoluteFillObject,
       // backgroundColor: 'rgba(255, 255, 255, 0.4)', // Полупрозрачный эффект
        zIndex: 1,
    },
    button: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        backgroundColor: '#1C82AD',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        zIndex: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});
