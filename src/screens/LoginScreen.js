import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../components/signupscreen/Header";
import Welcome from "../components/signupscreen/welcome";
import SignupBtn from "../components/signupscreen/SignupBtn";
import OthersLogin from "../components/signupscreen/OthersLogin";

const LoginScreen = () => {
  const handleButtonPress = () => {
    console.log("Sign up!");
  };

  const handleSignup = () => {
    console.log("Login button clicked!");
  };

  const handleForgotPassword = () => {
    console.log("Forgot password button clicked!");
  };

  return (
    <>
      <Header signMethod={"Sign up"} buttonAction={handleButtonPress} />
      <View style={styles.welcomeContainer}>
        <Welcome />
      </View>

      <View style={styles.forumContainer}>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.inputBox} placeholder="Email address" />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput style={styles.inputBox} placeholder="Password" />
        </View>

        <SignupBtn
          buttonText={"Login"}
          style={styles.signupButton}
          textStyle={styles.buttonText}
        />

        <OthersLogin />
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  welcomeContainer: {
    alignItems: "center",
  },
  forumContainer: {
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
    fontWeight: "500",
  },
  signupButton: {
    margin: 20,
    width: "40%",
    height: 40,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
