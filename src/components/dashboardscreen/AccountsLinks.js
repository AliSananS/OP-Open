import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Vibration,
  ScrollView,
  BackHandler,
  LayoutAnimation,
  UIManager,
} from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import links from "./../../../data/FakeData.json";
import LinkContainer from "./LinkContainer";
import AddMoreButton from "./AddMoreButton";
import RecentActivityPopup from "../RecentActivityPopup";

const AccountsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const ActionButtonHandler = (link) => {
    console.log(`${link.platformName} link clicked!`);
  };

  const LongPressActionHandler = (link, index) => {
    Vibration.vibrate(30);
    console.log(`${link.platformName} link Long Pressed!`);
    setExpandedIndex(index);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  };

  BackHandler.addEventListener("hardwareBackPress", () => {
    setExpandedIndex(-1);
    return true;
  });

  return (
    <ScrollView
      vertical={true}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      {Object.values(links).map((link, index) => (
        <LinkContainer
          key={index}
          link={link}
          onPress={() => {
            ActionButtonHandler(link);
          }}
          LongPress={() => {
            LongPressActionHandler(link, index);
          }}
          expandedState={expandedIndex === index ? styles.expandedCard : null}
          usernameExpandedStyle={styles.usernameExpandedStyle}
          CardChildContainer={
            expandedIndex === index ? (
              <View style={styles.CardChildContainer}></View>
            ) : null
          }
        />
      ))}
    </ScrollView>
  );
};

export default AccountsSection;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    marginBottom: 65,
  },
  addMoreButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 380,
    marginVertical: 20,
  },
  expandedCard: {
    height: 450,
    width: 380,
    paddingRight: 0,
    flexDirection: "column",
  },
  usernameExpandedStyle: {
    fontFamily: "Inter-SemiBold",
  },
  CardChildContainer: {
    width: "99%",
    height: "95%",
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
