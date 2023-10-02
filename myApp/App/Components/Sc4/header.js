import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textF}>
          CODE 
      </Text>

      <Text style={styles.textG}>
          VERIFICATION
      </Text>

      <Text style={styles.textP}>
        Enter ontime password sent on ++849092605798
      </Text>
      <View style={styles.ovuong}>
        <TextInput style={styles.textInput}></TextInput>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textF: {
    textAlign: "center",
    fontSize: "70px",
    fontWeight: "bold",
    margin: 15,
    marginTop: 80,
  },
  textG: {
    textAlign: "center",
    fontSize: "25px",
    fontWeight: "bold",
    margin: 15,
    marginTop: 40,
  },
  textP: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
    margin: 15,
    marginTop: 40,
  },
  ovuong: {
    flexDirection: "column",
  },
  textInput: {
    width:325,
    height:55,
    backgroundColor:'#c4c4c4',
  },
});

export default Header;