import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <button style={styles.btn}>LOGIN</button>
      <Text style={styles.textW}>CREATE ACCOUNT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    height: 50,
    width: 320,
    backgroundColor: "#000000",
    boder: "none",
    borderRadius: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 45,
  },
  textW: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: 45,
  }
});

export default Footer;