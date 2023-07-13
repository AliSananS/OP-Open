import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RecentActivityPopup = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -200 }, { translateY: -400 }],
    width: 400,
    height: 800,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
});

export default RecentActivityPopup;
