import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import { useNavigation } from "@react-navigation/native";

const QuickSearch = () => {
  const { quicksearch, selected, setSelected } = useStateContext();
  const navigation = useNavigation();
  const handleQuickSearch = (item) => {
    setSelected(item.title);
    navigation.navigate(item.Route);
  };
  // useEffect(() => {
  //   selected === "Recommands"
  //     ? navigation.navigate("Home")
  //     : navigation.navigate("Explore");
  // }, [selected]);
  return (
    <View>
      {/* <Text></Text> */}
      <FlatList
        horizontal
        data={quicksearch}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={[
              {
                marginVertical: 5,
                marginHorizontal: 5,
                marginTop: 10,
                padding: 5,
                borderRadius: 10,
              },
              selected === item.title ? { backgroundColor: "white" } : "",
            ]}
            onPress={() => handleQuickSearch(item)}
          >
            <Text
              style={[
                { fontWeight: "bold" },
                selected === item.title
                  ? { color: "black" }
                  : { color: "white" },
              ]}
            >
              {item.title}
            </Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

export default QuickSearch;

const styles = StyleSheet.create({});
