import { StyleSheet, Text, View } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        <Text style={styles.unleash}>Unleash</Text> The {"\n"}power of your
        <Text style={styles.profile}>{"\n"} Profile</Text>
      </Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    width: "90%",
  },
  message: {
    fontSize: 35,
    color: "#545454",
    textAlign: "center",
    textAlign: "center",
    fontFamily: "OpenSans-SemiBold",
    fontWeight: "600",
  },
  unleash: {
    color: "#000",
    fontFamily: "OpenSans-Bold",
  },
  profile: {
    color: "#1b64f4",
    fontFamily: "OpenSans-Bold",
  },
});
