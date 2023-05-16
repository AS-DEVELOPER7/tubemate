import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  useCodingQuery,
  useSearchQuery,
  useTrendingQuery,
} from "../app/services";
import Videos from "../components/Videos";

const Coding = ({ navigation }) => {
  const search = useCodingQuery();
  // console.log(search);
  return (
    <View
      style={{
        backgroundColor: "#1f1e1e",
        color: "white",
        flex: 1,
        paddingHorizontal: 10,
      }}
    >
      <FlatList
        data={search?.data?.contents}
        keyExtractor={(item, id) => id}
        renderItem={({ item }) => (
          <Videos item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Coding;

const styles = StyleSheet.create({});
