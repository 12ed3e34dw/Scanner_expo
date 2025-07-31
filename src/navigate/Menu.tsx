
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import foto_Scanner from '../../src/assets/assets_Navigate/foto_Scanner.png';
import foto_generate from '../../src/assets/assets_Navigate/foto_generate.png';
import foto_history from '../../src/assets/assets_Navigate/foto_history.png';
import foto_gallery from '../../src/assets/assets_Navigate/foto_gallery.png';
import foto_flash from '../../src/assets/assets_Navigate/foto_flashlight.png';
import foto_camera from '../../src/assets/assets_Navigate/foto_camera.png';

import ScannerScreen from "../components/Scanners/Scanner";
//import { HistoryScreen } from "../screens/History/History_QR";
//import HistoryScreen from "../screens/History/History_QR";

const Stack = createNativeStackNavigator();

function GenerateScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Generate Screen</Text>
        </View>
    );
}

function HistoryScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center'}}>
            <Text>History Screen</Text>




            </View>
    );
}

function Menu({ navigation }) {
    return (

        <View style={styles.container}>

            <TouchableOpacity>
            <View style={styles.container_gallery}>
                <Image source={foto_gallery} style={styles.Img_gallery} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.container_flashlight}>
                    <Image source={foto_flash} style={styles.Img_flashlight} />
                </View>
            </TouchableOpacity>

             <TouchableOpacity>
               <View style={styles.container_camera}>
                   <Image source={foto_camera} style={styles.Img_camera} />
                </View>
             </TouchableOpacity>

            <View style={styles.container_1}>
                <TouchableOpacity onPress={() => navigation.navigate('Generate')}>
                    <View style={styles.container_generate}>
                        <Image source={foto_generate} style={styles.Img_generate} />
                        <Text style={styles.Text_generate}>Generate</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.container_scanner}>
                    <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>
                        <Image source={foto_Scanner} style={styles.Img_Scanner} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('History')}>
                    <View style={styles.container_history}>
                        <Image source={foto_history} style={styles.Img_history} />
                        <Text style={styles.Text_history}>History</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Generate" component={GenerateScreen} />
                <Stack.Screen name="Scanner" component={ScannerScreen} />
                <Stack.Screen name="History" component={HistoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({

    Img_camera:{
        width:25,
        height:25,
        left:40,
        top:5,
    },
    Img_flashlight:{
        width:17,
        height:25,
        left:40,
        top:5,
    },

    Img_gallery:{
        left:30,
        top:8,
        width:25,
        height:25,
    },
    container_flashlight:{
        width:100,
        height:40,
        top:30,
        left:130,
        backgroundColor:'#333333',
    },
    container_camera:{
        width:100,
        height:40,
        top:-10,
        left:230,
        backgroundColor:'#333333',
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
    },

    container_gallery:{
        width:100,
        height:40,
        top:70,
        left:40,
        backgroundColor:'#333333',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    container_1: {
        flex: 1,
    },
    Text_generate: {
        color: 'white',
        left: 30,
        top: 13,
    },
    Text_history: {
        left: 64,
        top: 13,
        color: 'white',
    },
    container_history: {
        position: 'absolute',
        width: 160,
        height: 70,
        backgroundColor: '#333333',
        top: 570,
        left: 180,
        zIndex: 1,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
    },
    container_generate: {
        position: 'absolute',
        width: 150,
        height: 70,
        backgroundColor: '#333333',
        top: 570,
        left: 30,
        zIndex: 1,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
    },
    container_scanner: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: '#FDB623',
        left: 155,
        borderRadius: 30,
        top: 555,
        zIndex: 99999,
    },
    Img_Scanner: {
        width: 70,
        height: 80,
        left: -10,
        top: -15.5,
    },
    Img_generate: {
        width: 30,
        height: 30,
        left: 40,
        top: 8,
    },
    Img_history: {
        width: 30,
        top: 5,
        height: 30,
        left: 70,
    },
});
