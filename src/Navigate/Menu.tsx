import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';


//foto Navigate
import foto_Scanner from '../../src/assets/assets_Navigate/foto_Scanner.png';
import foto_generate from '../../src/assets/assets_Navigate/foto_generate.png';
import foto_history from '../../src/assets/assets_Navigate/foto_history.png';



export default function Menu() {
    return (
        <View style={styles.container}>
<View style={styles.container_1}>
    <TouchableOpacity>
        <View style={styles.container_history}>
            <Image source={foto_history} style={styles.Img_history} />
        <Text style={styles.Text_history}>History</Text>
        </View>
    </TouchableOpacity>
    <View style={styles.container_scanner}>
        <TouchableOpacity>
<Image source={foto_Scanner} style={styles.Img_Scanner}/>
        </TouchableOpacity>
    </View>
    <TouchableOpacity>
        <View style={styles.container_generate}>
<Image source={foto_generate} style={styles.Img_generate}/>
        <Text style={styles.Text_generate}>Generate</Text>
        </View>
    </TouchableOpacity>
</View>
        </View>
    );
}

const styles = StyleSheet.create({
   container: {},
    Text_generate: {
        color:'white',
        left:30,
        top:13,
    },
    Text_history: {
       left:64,
        top:13,
        color:'white',
    },
    container_1: {

    },
   container_history: {
       width:160,
       height:70,
       backgroundColor:'#333333',
       top:670,
       left:180,

   },
    container_generate: {
       width:150,
        height:70,
        backgroundColor: '#333333',
        top:550,
        left:30,
    },
    container_scanner: {
       width:50,
        height:50,
        backgroundColor: '#FDB623',
        left:155,
        borderRadius: 30,
top:580,
        zIndex:9999,
    },
    Img_Scanner: {
       width:70,
        height:80,
        left:-10,
        top:-15.5,
    },
    Img_generate: {
       width:30,
        height:30,
       left:40,
        top:8,
    },
    Img_history: {
       width:30,
        top:5,
        height:30,
        left:70,
    },
});
