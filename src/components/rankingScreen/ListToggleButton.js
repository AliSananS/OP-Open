import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradientBackground from "../LinearGradientBackground";

const global = true;
const ListToggleButton = () => {
  return (
    <LinearGradientBackground linearGradientStyle={styles.container}>
      <View style={global ? styles.toggleActive : styles.toggle}>
        <Text style={global ? styles.textActive : styles.text}>Global</Text>
      </View>
      <View style={global ? styles.toggle : styles.toggleActive}>
        <Text style={global ? styles.text : styles.textActive}>Friends</Text>
      </View>
    </LinearGradientBackground>
  );
};

export default ListToggleButton;

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 50,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  toggle: {
    width: 85,
    height: 35,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleActive: {
    width: 85,
    height: 35,
    backgroundColor: "#f0f0f0",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "OpenSans",
    fontWeight: "700",
  },
  textActive: {
    color: "#000",
    fontFamily: "OpenSans",
    fontWeight: "700",
  },
});
