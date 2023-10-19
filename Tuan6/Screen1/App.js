import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Screen1({ navigation }) {
    return ( 
    <View style={styles.container}>
        <Image
          source={require("./assets/vs_blue.png")} style={styles.image}></Image>  
        <Text style={styles.t1}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.ngoisao}>
            <Image source={require("./assets/star.png")} style={styles.image2}></Image>
            <Image source={require("./assets/star.png")} style={styles.image2}></Image>
            <Image source={require("./assets/star.png")} style={styles.image2}></Image>
            <Image source={require("./assets/star.png")} style={styles.image2}></Image>
            <Image source={require("./assets/star.png")} style={styles.image2}></Image>
            <Text style={styles.t2}> (Xem 828 đánh giá) </Text>
        </View>

        <View style={styles.giatien}>
            <Text style={styles.t3}>1.790.000 đ</Text>
            <Text style={styles.t4}><del>1.790.000 đ</del></Text>
        </View>
        <View style={styles.ch}>
            <Text style={styles.t5}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image source={require("./assets/chamhoi.png")} style={styles.image3}></Image>
        </View>

        <View style={styles.nvg}>
            <Pressable style={styles.btn}  
                onPress={() => 
                navigation.navigate('Screen2')}> 
            <Text style={styles.t6}>4 MÀU - CHỌN MÀU</Text>
            </Pressable>
       </View>

        <button style={styles.btn2}>
            <Text style={styles.cm}>CHỌN MUA</Text>
        </button>
    </View>
    
    );
}

function Screen2({ navigation }) {
    return (
  
      <View style={styles.container}>
        <View  style={styles.sc2}>
        <Image source={require("./assets/vs_blue.png")} style={styles.imgsc2}></Image>
            <Text style={styles.tsc2}>Điện thoại Vsmart Joy 3                      Hàng Chính Hãng</Text>
        </View>

        <View  style={styles.sc21}>
         <Text style={styles.tsc2}>Chọn một màu bên dưới: </Text>
         <Image source={require("./assets/xanhnhat.png")} style={styles.imgcolor}></Image>
         <Image source={require("./assets/do.png")} style={styles.imgcolor}></Image>
         <Image source={require("./assets/den.png")} style={styles.imgcolor}></Image>
         <Image source={require("./assets/xanh.png")} style={styles.imgcolor}></Image>

         <Pressable  onPress={() => navigation.navigate('Screen1')} style={styles.btn3} >
           <Text style={styles.t7}> XONG </Text>
        </Pressable>
        </View>
         
      </View>
     );
   }

   const Stack = createNativeStackNavigator();

   function App() {
     return (
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Screen1" screenOptions={{headerShown: false}}>
           <Stack.Screen name="Screen1" component={Screen1} />
           <Stack.Screen name="Screen2" component={Screen2} />
         </Stack.Navigator>
       </NavigationContainer>
     );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: "column",
    },
    image: {
        width: 301,
        height: 361,
        left: 40,
    },
    t1:{
        fontSize: 18,
        marginTop: 10,
        marginLeft: 20,
    },
    ngoisao:{
        flexDirection: 'row',
    },
    image2:{
        marginTop: 15,
        marginLeft: 15,
        width: 20,
        height: 20,
    },
    t2:{
        fontSize: 18,
        marginTop: 13,
        marginLeft: 20,
    },
    giatien:{
        flexDirection: 'row'
    },
    t3:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
    },
    t4:{
        fontSize: 20,
        marginTop: 20,
        marginLeft: 50,
    },
    ch:{
        flexDirection: 'row',
    },
    t5:{
      marginLeft: 25,
        fontSize: 15,
        marginTop: 20,
        color: 'red'
    },
    image3:{
        marginTop: 20,
        marginLeft: 10,
        width: 20,
        height: 20,
    },
    nvg:{
        flexDirection: 'row',
    },
    btn:{
        width: 350,
        height: 45,
        marginLeft: 20,
        borderRadius: 15,
        borderWidth: 1,
        marginTop: 20,
    },
    t6:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 15,
        color: "black",
    },
    btn2:{
        width: 350,
        height: 45,
        marginTop: 30,
        marginLeft: 20,
        borderRadius: 15,
        backgroundColor: 'red',
    },
    cm:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        marginTop: 30,
        marginLeft: 20,
    },
    sc2:{
        flexDirection: 'row',
        height: 138,
        marginLeft: 10,
        marginTop: 10,
    },
    tsc2:{
        marginTop: 10,
        marginLeft: 10,
        fontSize: 16,
    },
    imgsc2:{
        height:120,
        width:100,
        marginRight: 20,
    },
    sc21:{
        flexDirection: 'column',
        backgroundColor: '#c4c4c4',
    },
    imgcolor:{
        height:100,
        width:100,
        marginLeft: 145,
        marginBottom: 5,
    },
    btn3 :{
        height: 45,
        width:350,
        backgroundColor: "blue",
        marginLeft: 20,
        marginTop: 15,
        borderRadius: 15,
        borderWidth: 1,
    },
    t7:{
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        color: "white",
        fontWeight: 'bold',
    },

});
export default App;