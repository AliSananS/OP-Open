import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BoxShadow } from "react-native-shadow";
import ProfileInfo from "../../../data/ProfileInfo.json";
import UserContainer from "./UserContainer";

const RankingList = () => {
  const shadowOpt = {
    width: 400,
    height: 600,
    color: "#000",
    border: 10,
    radius: 10,
    opacity: 0.08,
    x: 0,
    y: 0,
    style: {
      alignItems: "flex-start",
      justifyContent: "flex-end",
      marginTop: 15,
    },
  };

  return (
    <BoxShadow setting={shadowOpt}>
      <View style={styles.content}>
        <View style={styles.listHeading}>
          <Text style={styles.rank}>Rank</Text>
          <Text style={styles.user}>User</Text>
          <Text style={styles.followers}>Followers</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
          }}
        >
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
          <UserContainer />
        </ScrollView>
      </View>
    </BoxShadow>
  );
};

export default RankingList;

const styles = StyleSheet.create({
  content: {
    width: "101%",
    height: "101%",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#f4f4f4",
    borderRadius: 13,
    paddingBottom: 10,
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 20,
  },
  listHeading: {
    width: "95%",
    height: 35,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginTop: 15,
  },
  rank: {
    flex: 1,
    color: "#A1a1a1",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16,
  },
  userContainer: {
    width: "95%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 7,
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
  },
  user: {
    flex: 3,
    fontWeight: "500",
    color: "#A1a1a1",
  },
  followers: {
    flex: 1,
    fontWeight: "500",
    color: "gray",
  },
});
