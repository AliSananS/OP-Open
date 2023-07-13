import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import SignupBtn from "./SignupBtn";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Forum = () => {
  signupButtonHandler = () => {
    console.log("Sign up clicked!");
  };
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.inputBox} placeholder="Email address" />
      </View>
      <View style={styles.textInputContainer}>
        <Text
          style={{ marginLeft: 10, fontWeight: "bold", position: "absolute" }}
        >
          /@
        </Text>
        <TextInput style={styles.inputBox} placeholder="Username" />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.inputBox} placeholder="Password" />
      </View>
      <SignupBtn
        buttonText={"Sign up"}
        style={styles.signupButton}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

export default Forum;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textInputContainer: {
    width: "80%",
    height: 50,
    backgroundColor: "#f6f6f6",
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#E5E5E5",
    borderWidth: 1,
  },
  inputBox: {
    height: "100%",
    width: "100%",
    marginLeft: 30,
    fontSize: 16,
    fontFamily: "Inter-Medium",
  },
  signupButton: {
    margin: 20,
    width: "80%",
    height: 50,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Inter-Bold",
    fontSize: 18,
  },
});
