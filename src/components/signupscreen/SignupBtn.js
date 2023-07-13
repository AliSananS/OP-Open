import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SignupBtn = ({ buttonText, onpress, style, textStyle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btnContainer, style]}
      onPress={onpress}
    >
      <LinearGradient
        colors={["#B207FF", "#1469FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.btnContainerLinear}
      >
        <Text style={textStyle}>{buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SignupBtn;

const styles = StyleSheet.create({
  btnContainerLinear: {
    borderRadius: 50,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
