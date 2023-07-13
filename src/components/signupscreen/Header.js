import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Header({ signMethod, buttonAction }) {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>One Profile</Text>
      <TouchableOpacity
        style={styles.signin}
        onPress={buttonAction}
        activeOpacity={0.8}
      >
        <Text style={styles.signinBtn}>{signMethod}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },

  logo: {
    color: "#1766ff",
    fontFamily: "OpenSans-Bold",
    fontSize: 30,
  },

  signin: {
    width: 89,
    height: 43,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    //border
    borderRadius: 21.5,
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
  },
  signinBtn: {
    fontSize: 15,
    fontFamily: "OpenSans-Bold",
    color: "#FF4E4E",
  },
});
