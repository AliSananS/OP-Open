import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Username from "../components/rankingScreen/Username";
import Title from "../components/rankingScreen/Title";
import ListToggleButton from "../components/rankingScreen/ListToggleButton";
import RankingList from "../components/rankingScreen/RankingList";
import NavBar from "../components/NavBar";

const Ranking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Username />
      </View>

      <View style={styles.title}>
        <Title />
      </View>

      <View style={styles.listToggleButton}>
        <ListToggleButton />
      </View>

      <View style={styles.rankingList}>
        <RankingList />
      </View>
      <NavBar />
    </View>
  );
};

export default Ranking;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    flex: 1,
    width: "100%",
    marginTop: 10,
    justifyContent: "flex-end",
  },
  title: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  listToggleButton: {
    flex: 1,
    width: "100%",
    marginLeft: 90,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  rankingList: {
    width: "100%",
    height: "100%",
    flex: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
