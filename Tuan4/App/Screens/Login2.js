import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../Components/Login2/header";
import Body from "../Components/Login2/body";
import Footer from "../Components/Login2/footer";

const Login2 = () => {
    return(
        <View style={styles.container}>
            <Header/>
            <Body/>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'#f6c600'
    }
})

export default Login2;