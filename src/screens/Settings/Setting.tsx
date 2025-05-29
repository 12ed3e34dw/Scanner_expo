import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";

function Setting() {
    const [isFirstStyle, setIsFirstStyle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFirstStyle(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text_button}>{'<'}</Text>
                <Image source={require('')} style={styles.image_1} />
            </TouchableOpacity>



            <Text style={styles.Text_settings}>
                Settings
            </Text>

            <Text style={styles.Text_Support}>
                Support
            </Text>

            <View style={styles.Vibrate}>
                <Image source={require('')} style={isFirstStyle ? styles.image : styles.image_main} />
                <Text style={styles.text_Vibrate}>
                    Vibrate
                </Text>

                <Text style={styles.text_Vibrate_1}>
                    Vibration when scan is done.
                </Text>


            </View>


            <View style={styles.Beep}>
                <Image source={require('')} style={isFirstStyle ? styles.image_1:styles.image_1_main} />
                <Text style={styles.text_Beep}>
                    Beep
                </Text>
                <Text style={styles.text_Beep_1}>
                    Beep when scan is done.
                </Text>
            </View>


            <View style={styles.Rete_Us}>
                <Image source={require('')} style={isFirstStyle ? styles.image_2:styles.image_2_main} />
                <Text style={styles.text_rate_us}>
                    Rate Us
                </Text>
                <Text style={styles.text_rate_us_1}>
                    Your best reward to us.
                </Text>


            </View>


            <Image source={require('')} style={isFirstStyle ? styles.image_3:styles.image_3_main} />
            <Text style={styles.text_Share}>
                Share
            </Text>
            <Text style={styles.text_Share_1}>
                Share app with others.
            </Text>
            <Text style={styles.text_privacy_Policy}>
                Privacy Policy
            </Text>
            <Image source={require('')} style={isFirstStyle ? styles.image_4:styles.image_4_main} />
            <Text style={styles.text_privacy_Policy_1}>
                Follow our policies that benefits you.
            </Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333D6",
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text_settings: {
        fontSize:24,
        color: "#FDB623",
        left:-120,
        top:-40,
    },
    Text_Support: {
        top:180,
        fontSize:24,
        left:-120,
        color: "#FDB623",
    },
    Vibrate: {
        width: 338,
        borderRadius:10,
        height: 68,
        top:-60,
        backgroundColor: "#00000040",
    },
    Beep:{
        width: 338,
        borderRadius:10,
        height: 68,
        top:-35,
        backgroundColor: "#00000040",
    },
    Rete_Us:{
        width: 338,
        borderRadius:10,
        height: 188,
        top:70,
        backgroundColor: "#00000040",
    },
    text_rate_us: {
        marginLeft:60,
        top:-8,
        color:"white",
    },
    text_privacy_Policy: {
        marginLeft:-120,
        color:"white",
        top:-40,
    },
    text_Share: {
        top:-60,
        marginLeft:-170,
        color:"white",
    },
    text_Share_1:{
        top:-55,
        marginLeft:-65,
        color:"white",
    },
    text_Beep: {
        marginLeft:60,
        top:-5,
        color:"white",
    },
    text_Beep_1:{
        top:0,
        marginLeft:60,
        color:"white",
    },
    text_Vibrate: {
        marginLeft:60,
        top:-5,
        color:"white",
    },
    text_Vibrate_1:{
        marginLeft:60,
        top:0,
        color:"white",
    },
    text_rate_us_1:{
        top:-3,
        marginLeft:60,
        color:"white",
    },
    text_privacy_Policy_1:{
        marginLeft:20,
        color:"white",
        top:-55,
    },
    image:{
        width:18,
        height:18,
        left:20,
        top:25,
    },
    image_1:{
        width:18,
        height:18,
        left:20,
        top:25,
    },
    image_2:{
        width:18,
        height:18,
        left:20,
        top:25,
    },
    image_3:{
        width:18,
        height:20,
        left:-135,
        top:-30,
    },
    image_4:{
        width:16,
        height:20,
        left:-135,
        top:-50,
    },
    buttonText:{

    },
    button:{
        borderRadius:6,
        width:40,
        top:20,
        left:20,
        height:40,
        backgroundColor:'#333333',
        position:'absolute',

    },
    text_button:{
        top:-2,
        left:10.2,
        fontSize:30,
        color:"#FDB623",
    },
    image_main:{
        width:18,
        height:18,
        left:20,
        top:25,
        color:"#FDB623",
    },
    image_1_main:{
        width:18,
        height:18,
        left:20,
        top:25,
        color:"#FDB623",
    },
    image_2_main:{
        width:18,
        height:18,
        left:20,
        top:25,
        color:"#FDB623",
    },
    image_3_main:{
        width:18,
        height:20,
        left:-135,
        top:-30,
        color:"#FDB623",
    },
    image_4_main:{
        width:16,
        height:20,
        left:-135,
        top:-50,
        color:"#FDB623",
    },
});

export default Setting;
