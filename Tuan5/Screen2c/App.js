import React, { useState } from 'react';
import { Pressable, StyleSheet,Text, TextInput} from 'react-native';
import { Button, CheckBox, View } from 'react-native-web';
const SC2c =()=>{
    const [isSelected, setSelection] = useState(true);
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(true);
    const [isSelected3, setSelection3] = useState(false);

return (
  <View style={styles.container}>
    <View style={styles.txt1}>
        PASSWORD <br/>
        GENERATOR 
    </View>
    <View style={styles.sc3}>
        <TextInput style={styles.input} 
        placeholder=''>

        </TextInput>
    </View>
    <View style={styles.sc3}>
    <Text style={styles.txt2}>Password lenght</Text>
    <TextInput style={styles.input2} 
        placeholder=''>

        </TextInput>
        
        
    </View>
    <View style={styles.sc3}>
    <Text style={styles.txt3}>Include lower case letters</Text>
    <CheckBox style={styles.cb1}
            value={isSelected}
            onValueChange={setSelection}
    ></CheckBox>  
    </View>

    <View style={styles.sc3}>
    <Text style={styles.txt4}>Include upCase letters</Text>
    <CheckBox style={styles.cb2}
            value={isSelected1}
            onValueChange={setSelection1}></CheckBox>  
    </View>

    <View style={styles.sc3}>
    <Text style={styles.txt5}>Include number</Text>
    <CheckBox style={styles.cb3}
            value={isSelected2}
            onValueChange={setSelection2}></CheckBox>  
    </View>

    <View style={styles.sc3}>
    <Text style={styles.txt6}>Include special symbol</Text>
    <CheckBox style={styles.cb4}
            value={isSelected3}
            onValueChange={setSelection3}></CheckBox>  
    </View>

    <Pressable style={styles.btn} >
        <p style={styles.txtfooter}>GENERATE PASSWORD</p>
      </Pressable>
  </View>
  
);
};

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#22235b',
  },

  sc3:{
    flexDirection: "row"
  },
  input:{
    height: 60,
    width:370,
    margin:10,
    padding:10,
    marginTop: 25,
    backgroundColor: '#151537',

  },
  input2:{
    height: 50,
    width:175,
    margin:10,
    padding:10,
    backgroundColor: '#ffffff',
  },
  
  txt2:{
    marginTop:30,
    fontFamily: 'arial',
    color: "white",
    marginRight:35,
    fontSize: 18,
   },
   txt3:{
    marginTop:30,
    fontFamily: 'arial',
    color: "white",
    marginRight:130,
    fontSize: 18,
    
   },
   txt4:{
    marginTop:30,
    fontFamily: 'arial',
    color: "white",
    marginRight:145,
    fontSize: 18,
    
   },
   txt5:{
    marginTop:30,
    fontFamily: 'arial',
    color: "white",
    marginRight:192,
    fontSize: 18,
    
   },
   txt6:{
    marginTop:30,
    fontFamily: 'arial',
    color: "white",
    marginRight:132,
    fontSize: 18,
   },
   cb1:{
    marginTop:30,
    height:25,
    width: 25,

   },
   cb2:{
    marginTop:30,
    marginLeft: 10,
    height: 25,
    width: 25,

   },
   cb3:{
    marginTop:30,
    marginLeft: 17,
    height:25 ,
    width: 25,

   },
   cb4:{
    marginTop:30,
    marginLeft: 17,
    width: 25,
    height: 25
   },
   
   btn:{
    height: 60,
    width:330,
    margin: 12,
    backgroundColor:'#3b3c98',
    marginTop: 40,
    

  },
  txtfooter:{
    textAlign: 'center',
    color: "#ffffff",
    marginTop: 10,
    fontSize: "25px",
    fontWeight: "bold",
  },

  txt1: {
    marginTop: 30,
    textAlign: 'center',
    color: "#ffffff",
    fontSize: "30px",
    fontWeight: "bold",
  }
});

export default SC2c;