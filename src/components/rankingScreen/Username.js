// THE USERNAME WITH THE GLOBAL RANKING NUMBER
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import ProfileInfo from "../../../data/ProfileInfo.json";
import LinearGradientBackground from "../LinearGradientBackground";

const Username = () => {
  return (
    <View style={styles.container}>
      <Image source={ProfileInfo.image} style={styles.profileImage} />
      {console.log(ProfileInfo.image)}
      <Text style={styles.username}>{ProfileInfo.username}</Text>
      <LinearGradientBackground linearGradientStyle={styles.rankContainer}>
        <Text style={styles.rankCount}>{`${ProfileInfo.globalRank}th`}</Text>
      </LinearGradientBackground>
    </View>
  );
};

export default Username;

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 50,
    backgroundColor: "#f9f9f9",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
  },
  rankContainer: {
    width: 35,
    height: 22,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  rankCount: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFF",
  },
});
