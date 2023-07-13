import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import LinearGradientBackground from "./LinearGradientBackground";
import ProfileInfo from "../../data/ProfileInfo.json";

const buttons = [
  { source: require("../icons/Ranking.png"), key: "Ranking" },
  { source: require("../icons/Dashboard.png"), key: "Dashboard" },
  { source: require("../icons/Add.png"), key: "Add" },
  { source: require("../icons/Profile.png"), key: "Profile", isProfile: true },
];

const NavBar = () => {
  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.key}
          activeOpacity={0.8}
          style={styles.buttonContainer}
        >
          {button.isProfile ? (
            <LinearGradientBackground
              linearGradientStyle={styles.profileContainer}
            >
              <Image source={ProfileInfo.image} style={styles.profile} />
            </LinearGradientBackground>
          ) : (
            <Image source={button.source} style={styles.button} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "space-around",
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: "#f6f6f6",
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: "lightgray",
  },
  buttonContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 25,
    height: 25,
  },
  //profile icon
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    width: "70%",
    padding: 1,
    borderRadius: 100,
  },
  profile: {
    width: "99%",
    height: "99%",
    borderRadius: 100,
  },
});
