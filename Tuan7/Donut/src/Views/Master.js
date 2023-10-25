import React from "react";
import { StyleSheet, Text, View, Image, Pressable, FlatList, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Data = [
    {
        image: require('../Image/donut_yellow.png'),
        name: 'Tasty Donut',
        name2: 'Spicy tasty donut family',
        price: 10.00,
        image2: require("../Image/cong.png"),
    },
    {
        image: require('../Image/tasty_donut.png'),
        name: 'Pink Donut',
        name2: 'Spicy tasty donut family',
        price: 20.00,
        image2: require("../Image/cong.png"),
    },
    {
        image: require('../Image/green_donut.png'),
        name: 'Floating Donut',
        name2: 'Spicy tasty donut family',
        price: 30.00,
        image2: require("../Image/cong.png"),
    },
    {
        image: require('../Image/donut_red.png'),
        name: 'Tasty Donut',
        name2: 'Spicy tasty donut family',
        price: 40.00,
        image2: require("../Image/cong.png"),
    },
]

function Master({navigation}){
    var [state, setState] = React.useState(Data);

    var [color, setColor] = React.useState(1);
    return(
        <View style={styles.container}>
            <Text style={styles.t1}> Welcome, Jala! </Text>
            <Text style={styles.t2}> Choice you Best food </Text>
            <View style={styles.btn}>
                <TextInput style={styles.input} placeholder="Search food"></TextInput>
                <Image source={require("../Image/TimKiem.png")} style={styles.imgtk}></Image>
            </View>

            <View style={styles.chinh}>
                    <Pressable 
                        style={([{ 
                            height: 45,
                            width: 105,
                            borderRadius: 8,
                            borderWidth: 1, },
                            (color == 1 ? { backgroundColor: '#f1af00' } : null)])
                        }
                        title = "Donut"
                        onPress={() => {
                            setState(Data);
                            setColor(1);
                        }}
                        >
                        <Text style={styles.t3}> Donut </Text>
                    </Pressable>
                    <Pressable 
                        style={([{ 
                            height: 45,
                            width: 105,
                            borderRadius: 8,
                            borderWidth: 1, },
                            (color == 2 ? { backgroundColor: '#f1af00' } : null)])
                        }
                        title = "Pink Donut"
                        onPress={() => {
                        var newdata = Data.filter((item) => {
                            return item.name == 'Pink Donut';});
                            setState(newdata);
                            setColor(2);
                        }}
                        >
                        <Text style={styles.t4}> Pink Donut </Text>
                    </Pressable>
                    <Pressable 
                        style={
                            ([{ 
                                height: 45,
                                width: 105,
                                borderRadius: 8,
                                borderWidth: 1, },
                                (color == 3 ? { backgroundColor: '#f1af00' } : null)])
                        }
                        title="Floating"
                        onPress={() => {
                        var newdata = Data.filter((item) => {
                            return item.name == 'Floating Donut';});
                            setState(newdata);
                            setColor(3);
                        }}
                        >
                        <Text style={styles.t5}> Floating </Text>
                    </Pressable>
            </View>

            <View style={{ flex: 8 }}>
                <FlatList
                numColumns={1}
                data={state}
                renderItem={({ item }) => {
                    return (
                    <Pressable
                        style={{
                        height: '110px',
                        width: '95%',
                        borderRadius: '10px',
                        backgroundColor: 'pink',
                        shadowOffset: { width: '3px', height: '3px' },
                        shadowColor: 'grey',
                        shadowOpacity: '0.5',
                        margin: '5px',
                        flexDirection: 'row',
                        }}>
                        <Image source={item.image} style={{ width: '105px', height: '105px', margin: 5}} resizeMode="contain"/>
                        <View style={{ marginLeft: 10, alignItems: 'flex-start', margin: 10}}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>{item.name}</Text>
                            <Text style={{ fontSize: 16, marginBottom: 10 }}>{item.name2}</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold'}}>${item.price.toFixed(2)}
                            </Text>
                        </View>
                        <Pressable 
                            onPress={() => {
                            navigation.navigate('Detail');
                            }}>
                            <Image source={item.image2} style={{width: '30px', height: '30px', marginTop: 80, marginLeft: 35}} resizeMode="contain" ></Image>
                        </Pressable>
                        

                    </Pressable>
                    );
                }}
                />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    t1:{
        fontSize: 18,

    },
    t2:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    btn:{
        flexDirection: 'row'
    },
    input: {
        height: 55,
        width: 280,
        margin: 12,
        padding: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18,
    },
    imgtk:{
        height: 55,
        width: 55,
        margin: 12,
        borderRadius: 8,
    },
    chinh:{
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-around',
    },
    t3:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    t4:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    t5:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
});
export default Master;


