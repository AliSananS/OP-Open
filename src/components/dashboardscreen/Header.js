import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../signupscreen/OthersLogin";
import LinearGradientButton from "../buttons/LinearGradientButton";

const Header = () => {
  const ActionButtonHandler = () => {
    console.log("Share Profile Button Clicked!");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.bell}
        contentFit="contain"
        source={require("../../icons/Bell.png")}
      />

      <LinearGradientButton
        buttonText="Share Profile"
        linerContainerStyle={styles.shareButtonCorner}
        buttonContainer={styles.buttonContainer}
        textStyle={styles.buttonTextStyle}
        onPress={ActionButtonHandler}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "90%",
    height: 90,
  },
  bell: {
    width: 30,
    height: 30,
  },
  shareButtonCorner: {
    width: 130,
    height: 40,
    fontSize: 20,
    borderRadius: 14.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "white",
  },

  buttonTextStyle: {
    color: "#5C5C5C",
    fontFamily: "Inter-Bold",
  },
});
