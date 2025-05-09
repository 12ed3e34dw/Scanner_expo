import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Scanner from "../Scanners/Scanner";  // Убедитесь, что у вас правильно настроен компонент Scanner

export default function Scanners() {

    return (
        <View style={styles.container}>
            <Scanner style={{width:'100%', height:'100%'}} />
        </View>
    );
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        padding: 120,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
});
