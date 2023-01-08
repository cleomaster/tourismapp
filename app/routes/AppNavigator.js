import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CurrentLocationScreen from "../screens/CurrentLocationScreen";
import HomeScreen from "../screens/HomeScreen";
import PlaceScreen from "../screens/PlaceScreen";
import StartScreen from "../screens/StartScreen";
import AboutPage from "../screens/AboutPage";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import BookScreen from '../screens/BookScreen';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer({ navigation, route }) {
  const { longitude, latitude } = route.params;
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      useLegacyImplementation
    >
      <Drawer.Screen
        name="HomeScreen1"
        options={{ title: "Home" }}
        initialParams={{ longitude, latitude }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="AboutPage"
        options={{ title: "About" }}
        component={AboutPage}
      />
    </Drawer.Navigator>
  );
}

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="StartScreen" component={StartScreen} />
    <Stack.Screen name="BookScreen" component={BookScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="HomeScreen" component={MyDrawer} />
    <Stack.Screen
      name="CurrentLocationScreen"
      component={CurrentLocationScreen}
    />
    <Stack.Screen name="PlaceScreen" component={PlaceScreen} />
  </Stack.Navigator>
);

function AppNavigator(props) {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default AppNavigator;
