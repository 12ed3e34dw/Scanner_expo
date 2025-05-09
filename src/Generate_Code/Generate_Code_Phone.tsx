import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput, Alert, Image,} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [phone, setPhone] = useState('');

    const handleGenerate = () => {
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        if (!phoneRegex.test(phone)) {
            Alert.alert('Invalid Phone', 'Please enter a valid phone number.');
            return;
        }
        Alert.alert('Let’s Start!', `Phone: ${phone}`);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <TouchableOpacity style={styles.button_2}>
                <Text style={styles.text_button}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.text_text_2}>Phone</Text>

            <View style={styles.container_circle} />

            <View style={styles.container_Main}>
                <Image source={require('')} style={styles.image} />

                <Text style={styles.text_text}>Phone Number</Text>
                <TextInput
                    style={styles.input_text}
                    placeholder="+92xxxxxxxxxx"
                    placeholderTextColor="#aaa"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                />

                <TouchableOpacity style={styles.button} onPress={handleGenerate}>
                    <Text style={styles.buttonText}>Generate QR Code</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container_circle_2} />
        </View>
    );
}

const CIRCLE_SIZE = 310;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333D6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_Main: {
        width: 336,
        height: 335,
        backgroundColor: '#3B3B3BC7',
        position: 'absolute',
        top: '20%',
        borderRadius: 6,
        zIndex: 1,
        padding: 20,
        alignItems: 'center',
    },
    input_text: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 20,
        paddingHorizontal: 10,
        color: '#fff',
        top: 60,
        backgroundColor: '#444',
    },
    button: {
        height: 46,
        top: 70,
        borderRadius: 6,
        width: 153,
        backgroundColor: '#FDB623',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: '#000',
    },
    container_circle: {
        position: 'absolute',
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: '#3D3D3D',
        top: -100,
        left: '70%',
        marginLeft: -CIRCLE_SIZE / 2,
    },
    container_circle_2: {
        position: 'absolute',
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: '#3D3D3D',
        top: 440,
        left: '10%',
        marginLeft: -CIRCLE_SIZE / 2,
    },
    image: {
        top: 20,
        width: 50,
        height: 50,
    },
    text_text: {
        color: 'white',
        top: 45,
        left: -95,
        fontSize: 15,
    },
    text_text_2: {
        left: -110,
        top: -365,
        color: 'white',
        fontSize: 18,
    },
    text_button: {
        left: 10,
        top: -5,
        color: '#FDB623',
        fontSize: 35,
    },
    button_2: {
        left: -161,
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: '#333333',
        top: -334,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
