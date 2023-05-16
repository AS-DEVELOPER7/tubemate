import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Home from "../screens/Home";
import Search from "../screens/Search";
import { useStateContext } from "../context/StateContext";
import QuickSearch from "./QuickSearch";
import { useAutoCompleteQuery } from "../app/services";

const Nav = () => {
  const navigation = useNavigation();
  const {
    searchValue,
    setSearchValue,
    tags,
    setTags,
    autoSearchValue,
    setAutoSearchValue,
  } = useStateContext();
  // const autoSearch = useAutoCompleteQuery(autoSearchValue);
  // console.log(autoSearch);
  const home = () => {
    setTags(true);
    setAutoSearchValue("");
    navigation.navigate("Home");
  };
  const handleenter = () => {
    // console.log("hello");
    setSearchValue(autoSearchValue);
    setAutoSearchValue("");
    navigation.navigate("Search");
  };
  return (
    <View
      style={[
        {
          backgroundColor: "#212121",
          paddingHorizontal: 3,
          paddingVertical: 10,
          position: "relative",
        },
        // autoSearch?.data ? { height: "100%" } : "",
      ]}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <AntDesign
          onPress={() => home()}
          name="youtube"
          size={40}
          color="red"
        />
        <View
          style={{
            borderColor: "#636161",
            borderWidth: 1,
            flex: 0.8,
            marginHorizontal: 5,
            borderRadius: 8,
            color: "white",
            paddingHorizontal: 8,
            paddingVertical: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            placeholder="Search..."
            placeholderTextColor="white"
            style={{ color: "white", flex: 1 }}
            // value={searchValue}
            // autoComplete
            onChangeText={setAutoSearchValue}
            value={autoSearchValue}
            onSubmitEditing={() => handleenter()}
          />
          <AntDesign name="search1" size={18} color="white" />
        </View>
      </View>
      {/* {autoSearch?.data ? (
        <View
          style={{
            alignItems: "center",
            position: "absolute",
            top: 50,
            backgroundColor: "#212121",
            zIndex: 10,
            width: "100%",
          }}
        >
          <FlatList
            data={autoSearch?.data?.results}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <View>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "900",
                    marginVertical: 10,
                  }}
                >
                  {item}
                </Text>
              </View>
            )}
          />
        </View>
      ) : (
        <></>
      )} */}
      {tags ? <QuickSearch /> : <></>}
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({});
