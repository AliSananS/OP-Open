import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({
  buttonText,
  buttonContainer,
  linerContainerStyle,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <LinearGradient
        colors={["rgba(173, 10, 255, 1)", "rgba(0, 87, 255, 1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={linerContainerStyle}
      >
        <View style={[styles.buttonContainer, buttonContainer]}>
          <Text style={textStyle}>{buttonText}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "97.5%",
    height: "92%",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GradientButton;
