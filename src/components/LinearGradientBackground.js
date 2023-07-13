import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const LinearGradientBackground = ({ children, linearGradientStyle }) => {
  return (
    <LinearGradient
      colors={["#B207FF", "#1469FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={linearGradientStyle}
    >
      {children}
    </LinearGradient>
  );
};

export default LinearGradientBackground;

const styles = StyleSheet.create({});
