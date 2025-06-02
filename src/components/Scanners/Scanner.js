import { StyleSheet, Text, View, Animated, Easing, Pressable } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Slider from '@react-native-community/slider';
import Scanners from './Scanners';
import Menu from "../../navigate/Menu";





export default function Scanner() {
    const [done, setDone] = useState(false);
    const [permission, setPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [zoom, setZoom] = useState(0);
    const [torchOn, setTorchOn] = useState(false); // 🔧 добавлено

    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const getPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setPermission(status === 'granted');
        };
        getPermissions();
    }, []);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: BOX_HEIGHT - 4,
                    duration: 1500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 1500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [animatedValue]);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`${data}`);
    };

    if (permission === null) return <Text>Requesting camera permission</Text>;
    if (permission === false) return <Text>Camera access denied</Text>;
    if (done) return <Scanners />;

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                zoom={zoom}
                torchMode={torchOn ? 'on' : 'off'}
            />

            {/* 🔦 Кнопка фонарика (над фоном, поверх BarCodeScanner) */}
            <View style={styles.flashWrapper}>
                <Pressable
                    style={styles.flashButton}
                    onPress={() => setTorchOn((prev) => !prev)}
                >
                    <Text style={styles.buttonText}>
                        {torchOn ? 'Фонарик выкл.' : 'Фонарик вкл.'}
                    </Text>
                </Pressable>
            </View>

            {/* Затенённые области и рамка */}
            <View style={styles.overlay}>
                <View style={styles.maskTop} />
                <View style={styles.maskCenter}>
                    <View style={styles.maskSide} />
                    <View style={styles.focusBox}>
                        <Animated.View
                            style={[
                                styles.scanLine,
                                { transform: [{ translateY: animatedValue }] },
                            ]}
                        />
                    </View>
                    <View style={styles.maskSide} />
                </View>
                <View style={styles.maskBottom} />
            </View>

            {/* Ползунок zoom */}
            <View style={styles.sliderContainer}>
                <Text style={styles.sliderLabel}>Zoom</Text>
                <Slider
                    style={{ width: 200 }}
                    minimumValue={0}
                    maximumValue={1}
                    value={zoom}
                    onValueChange={(val) => setZoom(val)}
                    minimumTrackTintColor="#1C82AD"
                    maximumTrackTintColor="#aaa"
                    thumbTintColor="#1C82AD"
                />
            </View>

            {/* Кнопка "Сканировать ещё" */}
            {scanned && (
                <Pressable
                    style={styles.scanAgainButton}
                    onPress={() => setScanned(false)}
                >
                    <Text style={styles.buttonText}>Сканировать ещё</Text>
                </Pressable>
            )}



            {/* Test */}
            {/* <Menu/> */}




        </View>
    );
}

const BOX_HEIGHT = 300;
const BOX_WIDTH = 300;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flashWrapper: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 10, // ⬆ поверх других элементов
    },
    flashButton: {
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        opacity: 0.8,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    maskTop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
    },
    maskCenter: {
        flexDirection: 'row',
        height: BOX_HEIGHT,
        width: '100%',
    },
    maskSide: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    focusBox: {
        width: BOX_WIDTH,
        height: BOX_HEIGHT,
        borderWidth: 2,
        borderColor: 'yellow',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        borderRadius: 5,
    },
    maskBottom: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
    },
    scanLine: {
        width: '100%',
        height: 3.5,
        backgroundColor: 'yellow',
        position: 'absolute',
    },
    sliderContainer: {
        position: 'absolute',
        bottom: 100,
        alignSelf: 'center',
        alignItems: 'center',
    },
    sliderLabel: {
        color: 'white',
        marginBottom: 5,
        fontSize: 16,
    },
    scanAgainButton: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 28,
        borderRadius: 30,
        elevation: 3,
        zIndex: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
