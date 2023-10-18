import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
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
        
        <button style={styles.btn}>
            <Text style={styles.t6}>4 MÀU-CHỌN MÀU</Text>
        </button>

        <button style={styles.btn2}>
            <Text style={styles.cm}>CHỌN MUA</Text>
        </button>

    <View>
      
      </View>
      </View>
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
    btn:{
        width: 350,
        height: 40,
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 15,
    },
    t6:{
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 30,
        marginLeft: 20,
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
});