import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Vibration,
} from "react-native";
import { Image } from "expo-image";
const LinkContainer = ({
  link,
  expandedState,
  followersCountStyle,
  onPress,
  LongPress,
  usernameExpandedStyle,
  CardChildContainer,
  onPressOut,
}) => {
  const [elevation, setElevation] = useState(4);

  const handlePress = () => {
    setElevation(0); // Set elevation to 0
    onPress(); // Call the provided onPress function
  };

  const handlePressRelease = () => {
    setElevation(4); // Set elevation to 0
  };

  const handleLongPress = () => {
    Vibration.vibrate(20);
    LongPress();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPressIn={handlePress}
        onPressOut={handlePressRelease}
        onLongPress={handleLongPress}
        delayLongPress={200}
        style={[styles.containerCorner, { elevation }, expandedState]}
      >
        {expandedState ? (
          <>
            <Text style={usernameExpandedStyle}>{link.username}</Text>
            {CardChildContainer}
          </>
        ) : (
          <>
            <Image
              source={{ uri: link.iconUrl }}
              contentFit="contain"
              style={styles.logo}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.username}
            >
              {link.username}
            </Text>
            <View style={styles.followersContainer}>
              <Text style={[styles.followersCount, followersCountStyle]}>
                {link.followersCount.toLocaleString("en-US")}
              </Text>
              <Text style={styles.followers}>Followers</Text>
            </View>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerCorner: {
    width: 380,
    height: 50,
    paddingRight: 10,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "gray",
    shadowOpacity: 0.2,
    elevation: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  followersContainer: {
    flex: 2.8,
    height: 16,
    flexDirection: "row",
  },
  logo: {
    marginLeft: 10,
    marginRight: 10,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  username: {
    flex: 3,
    fontSize: 12,
    fontWeight: "600",
  },
  followersCount: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
    marginRight: 10,
    textAlign: "right",
  },
  followers: {
    fontWeight: "600",
    fontSize: 12,
    textAlign: "left",
  },
});

export default LinkContainer;
