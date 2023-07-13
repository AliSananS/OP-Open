import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import ProfileInfo from "../../../data/ProfileInfo.json";

const UserContainer = () => {
  return (
    <View style={styles.userContainer}>
      <Text style={styles.rank}>1</Text>
      <Image source={ProfileInfo.image} style={styles.profileImage} />
      <Text style={styles.user}>{ProfileInfo.username}</Text>
      <Text style={styles.followers}>
        {ProfileInfo.followersCount.toLocaleString("en-us")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    width: "95%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 7,
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
  },
  rank: {
    flex: 1,
    color: "#A1a1a1",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  user: {
    flex: 3,
    marginLeft: 5,
    fontWeight: "600",
    color: "#363636",
  },
  followers: {
    flex: 1,
    fontWeight: "400",
    color: "gray",
  },
});

export default UserContainer;
