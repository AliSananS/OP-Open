import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import DashBoardScreen from "./screens/DashBoardScreen";
import LoginScreen from "./screens/LoginScreen";
import Ranking from "./screens/Ranking";
import SignupScreen from "./screens/SignupScreen";
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}
        initialRouteName="Login"
      >
        <Stack.Screen name="Dashboard" component={DashBoardScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Ranking" component={Ranking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
