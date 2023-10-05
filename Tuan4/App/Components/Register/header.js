import React from "react";
import { StyleSheet, View, Text, Image, TextInput,Button } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textRegister}>REGISTER</Text>
      <TextInput style={styles.textInput} placeholder="Name"></TextInput>
      <TextInput style={styles.textInput} placeholder="Phone"></TextInput>
      <TextInput style={styles.textInput} placeholder="Email"></TextInput>
      <View>
        <TextInput style={styles.textInput} placeholder="Password"></TextInput>{" "}
        <Image
          source={require("./../../../assets/eye.png")}
          style={styles.imgEye}
        />
      </View>
      <TextInput style={styles.textInput} placeholder="Birthday"></TextInput>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textRegister: {
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: 20,
  },
  textInput: {
    width: 30,
    height: 14,
    padding: 10,
    backgroundColor: "#C4C4C44D",
    marginTop: 60,
    fontSize: 16,
  },
  imgEye: {
    width: 28,
    height: 26,
    position: "absolute",
    marginTop: 70,
    marginLeft:200,
  },
});

export default Header;