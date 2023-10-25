import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Detail(){
    return(
        <View style={styles.container}>
            <Image source={require("../Image/pink_donut.png")} style={styles.imgpink}></Image>
            <Text style={styles.t1}> Pink Donut </Text>
            <View style={styles.tdo}>
                <Text style={styles.t2}> Spicy tasty donut family </Text>
                <Text style={styles.t3}> $20.00 </Text>
            </View>
            <View style={styles.mid}>
                <Image source={require("../Image/Vector.png")} style={styles.imggio}></Image>
                <Text style={styles.t4}> Delivery in  </Text>
            </View>
            <View style={styles.mid2}>
                <Text style={styles.tp}> 30 min </Text>
                <View style={styles.tc}>
                    <Image source={require("../Image/tru.png")} style={styles.imtru}></Image>
                    <Text style={styles.tso}> 1 </Text>
                    <Image source={require("../Image/cong.png")} style={styles.imcong}></Image>
                </View>
                
            </View>

            <Text style={styles.tres}> Restaurants info </Text>
            <Text style={styles.torder}> Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range. </Text>

            <Pressable style={styles.btn}>
                <Text style={styles.tadd}> Add to cart </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    imgpink:{
        height: 240,
        width: 240,
        resizeMode: 'contain',
        marginLeft: 70,
    },
    t1:{
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
    },
    tdo:{
        flexDirection: 'row',
    },
    t2:{
        fontSize: 18,
        marginLeft: 10,
        marginRight: 70,
    },
    t3:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    mid:{
        flexDirection: 'row',
        marginTop: 30,
        marginLeft:15,
    },
    imggio:{
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    t4:{
        fontSize: 15,
        marginLeft: 10, 
    },
    mid2:{
        flexDirection: 'row'
    },
    tp:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 5,
        marginRight: 160,
    },
    tc:{
        flexDirection: 'row',
    },
    imtru:{
        height: 21,
        width: 21,
        marginTop: 10,
        borderRadius: 1,
    },
    tso:{
        fontSize: 20,
        padding: 5,
    },
    imcong:{
        height: 21,
        width: 21,
        marginTop: 10,
        borderRadius: 1,
    },
    tres:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 12,
    },
    torder:{
        fontSize: 17,
        marginLeft: 15,
        textAlign: 'left',
        marginTop: 10,
    },
    btn:{
        height: 60,
        width:350,
        backgroundColor: "#f1af00",
        marginLeft: 20,
        marginTop: 15,
        borderRadius: 10,
        borderWidth: 1,
    },
    tadd:{
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: "white",
        fontWeight: 'bold',
    },
});
export default Detail;