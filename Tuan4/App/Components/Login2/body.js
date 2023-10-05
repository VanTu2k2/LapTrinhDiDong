import React from "react";
import { StyleSheet, View, Text, Image, TextInput, Button } from "react-native";

const Body = () => {
  return (
    <View style={styles.container}>
      <View style={styles.groupUP}>
        <Image
          source={require("./../../../assets/userlg2.png")}
          style={styles.imgUser}
        ></Image>
        <TextInput
          style={styles.textInputUser}
          placeholder="Name"
        ></TextInput>
      </View>{" "}
      <View style={styles.groupUP}>
        <Image
          source={require("./../../../assets/passlg2.png")}
          style={styles.imgPass}
        ></Image>
        <TextInput
          style={styles.textPass}
          placeholder="Password"
        ></TextInput>
        <Image
          source={require("./../../../assets/eye.png")}
          style={styles.imgEye}
        />
      </View>
    </View>

    // <View style={styles.container}>
    //   <View style={styles.groupUP}>
    //     <TextInput
    //       style={styles.textInputUser}
    //       placeholder="Name"
    //       inlineImageLeft={require("./../../../assets/userlg2.png")}
    //       inlineImagePadding={10} // Điều này đặt khoảng cách giữa ảnh và văn bản
    //     ></TextInput>
    //   </View>{" "}
    //   <View style={styles.groupUP}>
    //     <TextInput
    //       style={styles.textPass}
    //       placeholder="Password"
    //       inlineImageLeft={require("./../../../assets/passlg2.png")}
    //       inlineImagePadding={10}
    //     ></TextInput>
    //   </View>
    // </View>

  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  groupUP: {
    flexDirection: "row",
  },
  imgUser: {
    width: 30,
    height: 30,
    marginTop: 6,
  },
  imgPass: {
    width: 30,
    height: 30,
    marginTop: 35,
  },
  imgEye: {
    width: 28,
    height: 26,
    position: "absolute",
    marginTop: 35,
    marginLeft:305,
  },
  textInputUser: {
    fontSize: 16,
    height: 40,
    width: 400,
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomColor: "gray",
    paddingLeft: 40,
  },
  textPass: {
    fontSize: 16,
    height: 40,
    width: 400,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomColor: "gray",
    paddingLeft: 40,
  },
});

export default Body;

