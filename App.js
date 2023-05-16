import { Provider } from "react-redux";
import { store } from "./app/store";
import { NavigationContainer } from "@react-navigation/native";
import StateContext, { useStateContext } from "./context/StateContext";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "./screens/Search";
import Channels from "./screens/Channels";
import VideoDetails from "./screens/VideoDetails";
import Nav from "./components/Nav";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { StatusBar, StyleSheet } from "react-native";
import Trending from "./screens/Trending";
import Anime from "./screens/Anime";
import Coding from "./screens/Coding";
import Gadgets from "./screens/Gadgets";
import Gaming from "./screens/Gaming";
import Movies from "./screens/Movies";
import Netflix from "./screens/Netflix";
import Series from "./screens/Series";
import Trailers from "./screens/Trailers";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <StateContext>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <StatusBar backgroundColor="#1f1e1e" barStyle={"light-content"} />
            <Nav />
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Trending" component={Trending} />
              <Stack.Screen name="Anime" component={Anime} />
              <Stack.Screen name="Coding" component={Coding} />
              <Stack.Screen name="Gadgets" component={Gadgets} />
              <Stack.Screen name="Gaming" component={Gaming} />
              <Stack.Screen name="Movies" component={Movies} />
              <Stack.Screen name="Netflix" component={Netflix} />
              <Stack.Screen name="Series" component={Series} />
              <Stack.Screen name="Trailers" component={Trailers} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="Channels" component={Channels} />
              <Stack.Screen name="VideoDetails" component={VideoDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </StateContext>
    </Provider>
  );
}

const styles = StyleSheet.create({});
