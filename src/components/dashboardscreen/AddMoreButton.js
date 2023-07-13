import {
  StyleSheet,
  Text,
  View,
  Vibration,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import LinearGradientBackground from "../LinearGradientBackground";
const AddMoreButton = () => {
  const onPress = () => {
    console.log("add more links button Pressed!");
  };
  const onLongPress = () => {
    Vibration.vibrate(30);
    console.log("add more links button Long Pressed!");
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.addMoreButton}
      onLongPress={onLongPress}
      onPress={onPress}
    >
      <LinearGradientBackground
        linearGradientStyle={styles.linearGradientContainer}
      >
        <Image
          source={require("../../icons/AddWhite.png")}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Text style={styles.text}>Add more links</Text>
      </LinearGradientBackground>
    </TouchableOpacity>
  );
};

export default AddMoreButton;

const styles = StyleSheet.create({
  addMoreButton: {
    width: "100%",
    height: 52,
  },
  linearGradientContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "gray",
    elevation: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: -2,
      height: 2,
    },
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
