import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';


//foto Menu



export default function App() {

return (
  <View style={styles.container}>

<TouchableOpacity onPress={() => {}}>
    <View style={styles.generate_container}>
        <Text style={styles.Text_Generate}>Generate</Text>
    </View>
</TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
          <View style={styles.scanner_container}></View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
          <View style={styles.history_container}>
              <Text style={styles.Text_History}>History</Text>
          </View>
      </TouchableOpacity>
  </View>


)
}

const styles = StyleSheet.create({
    container: {},

    generate_container: {
        position: 'absolute',
        width: 150,
        height: 65,
        left: 20,
        top: 630,
        backgroundColor: '#333333',
        zIndex: 4,
    },

    scanner_container: {
        position: 'absolute',
        left: 130,
        top: 590,
        width: 70,
        height: 70,
        backgroundColor: '#FDB623',
        borderRadius: 100,
        zIndex: 1, // выше остальных
    },

    history_container: {
        position: 'absolute',
        top: 630,
        left: 170,
        width: 180,
        height: 65,
        backgroundColor: '#333333',
        zIndex: 4,

    },

    Text_Generate: {
        color: 'white',
        top: 30,
        left: 40,
    },

    Text_History: {
        top: 20,
        left: 40,
        color: 'white',
    },
});


