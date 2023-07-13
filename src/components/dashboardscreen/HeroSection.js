import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import LinearGradientBackground from "../LinearGradientBackground";
import ProfileInfo from "../../../data/ProfileInfo.json";

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <LinearGradientBackground linearGradientStyle={styles.profileContainer}>
        <Image
          // source={require("../../icons/Profile.png")}
          source={{ uri: ProfileInfo.image }}
          style={styles.profile}
        />
      </LinearGradientBackground>
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>
          {ProfileInfo.username.toLowerCase()}
        </Text>
      </View>
      <Text style={styles.followersCount}>
        {ProfileInfo.followersCount.toLocaleString("en-US")}
        {"\n"} <Text style={styles.followers}>Followers</Text>
      </Text>
    </View>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  container: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 123,
    height: 123,
    padding: 1,
    borderRadius: 100,
    // shadows
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 20,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  profile: {
    width: "99%",
    height: "99%",
    borderRadius: 100,
  },
  usernameContainer: {
    marginTop: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 4,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  username: {
    fontSize: 15,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    color: "#000",
  },
  followersCount: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Inter-SemiBold",
    //shadows
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  followers: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 24,
    lineHeight: 30,
    fontFamily: "Inter-Medium",
  },
});
