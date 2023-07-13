import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradientBackground from "./LinearGradientBackground";

const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradientBackground>
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradientBackground>
    </MaskedView>
  );
};

export default GradientText;
