import React from "react";
import { StyleSheet, View, Text, Image, TextInput,Button } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>LOGIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  textLogin: {
    padding: 25,
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: 55,
  }
});

export default Header;