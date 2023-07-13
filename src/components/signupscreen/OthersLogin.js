import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import FacebookLogo from "../../icons/Facebook.png";
import GoogleLogo from "../../icons/Google.png";
import TwitterLogo from "../../icons/Twitter.png";
import AppleLogo from "../../icons/Apple.png";

export default function OthersLogin() {
  const GradientButton = ({ children }) => (
    <LinearGradient
      colors={["#B207FF", "#1469FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.linearContainer}
    >
      <View style={styles.btnContainer}>{children}</View>
    </LinearGradient>
  );

  const Spacer = () => (
    <View style={styles.spacerContainer}>
      <View style={styles.line}></View>
      <Text style={styles.or}>OR</Text>
      <View style={styles.line}></View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Spacer />

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log("Fackebook Login")}
        >
          <GradientButton>
            <Image source={FacebookLogo} style={styles.logo} />
          </GradientButton>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log("Google Login")}
        >
          <GradientButton>
            <Image source={GoogleLogo} style={styles.logo} />
          </GradientButton>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log("Twitter Login")}
        >
          <GradientButton>
            <Image source={TwitterLogo} style={styles.logo} />
          </GradientButton>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log("Apple Login")}
        >
          <GradientButton>
            <Image source={AppleLogo} style={styles.logo} />
          </GradientButton>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },
  linearContainer: {
    marginVertical: 20,
    width: 65,
    height: 65,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  spacerContainer: {
    width: "70%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  or: {
    color: "#929292",
    fontSize: 10,
    fontFamily: "Poppins-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    marginHorizontal: 10,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D7D7D7",
  },

  iconsContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  btnContainer: {
    width: 63,
    height: 63,
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "70%",
    height: "70%",
  },
});
