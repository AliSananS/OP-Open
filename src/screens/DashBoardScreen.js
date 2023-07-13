import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/dashboardscreen/Header";
import HeroSection from "../components/dashboardscreen/HeroSection";
import AccountsLinks from "../components/dashboardscreen/AccountsLinks";
import NavBar from "../components/NavBar";
import AddMoreButton from "../components/dashboardscreen/AddMoreButton";
import RecentActivityPopup from "../components/RecentActivityPopup";

const DashBoardScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <HeroSection />
      <AccountsLinks />
      {/* <RecentActivityPopup /> */}
      <View style={styles.navBarContainer}>
        <NavBar />
      </View>
    </View>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
  navBarContainer: {
    width: "100%",
    alignSelf: "flex-end",
  },
});
