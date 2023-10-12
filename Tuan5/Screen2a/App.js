import React, { useState } from 'react';
import {SafeAreaView, StyleSheet,Text, TextInput,Pressable, Image} from 'react-native';
import { View } from 'react-native-web';
const SC2a =()=>{

  var [name, setName] = useState("");
  var [pass, setPass] = useState("");
  var data = [{ name: "VanTu", pass: "123456" }];

const ClickButton =()=>{
   const user = data.find((user) => user.name == name && user.pass == pass);
    if (user) {
      alert("Login thành công!");
 
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
  };

return (
  <View style={styles.container}>
   
    <Text style={styles.txt1}>LOGIN</Text>
  
    <View style={styles.v1}>
        <Image source={require("./assets/userlg2.png")} style={styles.img}></Image>
      <TextInput
       style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
      />
    </View>
       <View style={styles.v1}>
       <Image source={require("./assets/passlg2.png")} style={styles.img}></Image>
       <TextInput
       style={styles.input}
          value={pass}
          onChangeText={(text) => setPass(text)}
          placeholder="Password"
      
        />
       <Image source={require("./assets/eye.png")} style={styles.imgeye}></Image>
       </View>
       <Pressable style={styles.btn} onPress={ClickButton}>
        <Text style={styles.txtLogin}>LOGIN</Text>
      </Pressable>
    <text style={styles.txt2}>Forgot your password? </text>

  </View>

);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#d9b000',
  },
   v1:{
    flexDirection: "row"

   },
   txt1:{
    fontSize: 50,
    paddingBottom: 50,
    marginRight: 230,
    fontWeight: 'bold',
   },
  txt2 :{
    textAlign:'center',
    paddingTop:30,
    fontSize: '20px',
    marginTop: 10,
    fontWeight: 'bold',
   },
  img:{
    width: 25,
    height: 25,
    position: "absolute",
    marginTop: 25,
    marginLeft: 20,
  
  },
  imgeye:{
    marginLeft: 325,
    width: 25,
    height: 25,
    position: "absolute",
    marginTop: 25,
  
  },
  input: {
    height: 50,
    width:360,
    margin: 12,
    padding: 10,
    backgroundColor:'#d7ba3a',
    paddingLeft: 50,
    
  },
  btn:{
    height: 60,
    width:350,
    marginTop: 40,
    backgroundColor:'black',
    color:'white',
    
  },
  txtLogin:{
    color:'white',
    textAlign:'center',
    marginTop: 13,
    fontSize: '25px',
  }
  
});

export default SC2a;