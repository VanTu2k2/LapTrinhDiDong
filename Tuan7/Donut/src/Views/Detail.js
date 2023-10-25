import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Detail(){
    return(
        <View style={styles.container}>
            <Image source={require("../Image/pink_donut.png")} style={styles.imgpink}></Image>
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
});
export default Detail;