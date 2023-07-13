import { View, Text, UIManager, LayoutAnimation } from "react-native";
import React, { useState, useEffect } from "react";
import DashBoardScreen from "./src/screens/DashBoardScreen";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Ranking from "./src/screens/Ranking";
import * as Font from "expo-font";
import useFonts from "./hooks/useFonts";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  useEffect(() => {
    const loadFonts = async () => {
      await useFonts();
      setIsReady(true);
    };

    loadFonts();
  }, []);

  if (!isReady) {
    console.log("Loading fonts...");
  }

  return <DashBoardScreen />;
}
