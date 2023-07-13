import { View, StyleSheet } from "react-native";
import Header from "../components/signupscreen/Header";
import Welcome from "../components/signupscreen/welcome";
import Forum from "../components/signupscreen/Forum";
import OthersLogin from "../components/signupscreen/OthersLogin";

const SignupScreen = () => {
  const handleButtonPress = () => {
    // Define the function logic here
    console.log("Sign in!");
  };

  return (
    <View style={styles.container}>
      <Header
        signMethod={"Login"}
        width={"100%"}
        buttonAction={handleButtonPress}
      />
      <Welcome />
      <Forum />
      <OthersLogin />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default SignupScreen;
