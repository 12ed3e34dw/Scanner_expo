import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';


//foto Menu
import generate_foto from "";
import history_foto from "";
import scanner_foto from "";



export default function App() {

return (
    <View style={styles.container}>

<TouchableOpacity>
    <View style={styles.container_1}>

    </View>
</TouchableOpacity>






        <TouchableOpacity>
            <Text style={styles.Text_Histiry}>History</Text>
        </TouchableOpacity>


        <TouchableOpacity>

        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.Text_Generate}>Generate</Text>
        </TouchableOpacity>

    </View>
)
}

const styles = StyleSheet.create({
    container: {
        top:660,
        width:300,
        left:40,
        height:80,
        backgroundColor: '#333333',
        borderRadius:5,
    },
    Text_Generate: {
        left:25,
        top:-50,
        color:'white',
    },
    Text_Histiry: {
        color:'white',
        left:220,
        top:-30,
    },
container_1: {
        backgroundColor: '#FDB623',
    width:70,
    height:70,
    top:-40,
    left:115,
    borderRadius:45,
},
})
