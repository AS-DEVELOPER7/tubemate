import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSearchQuery, useTrendingQuery } from "../app/services";
import Videos from "../components/Videos";

const Trending = ({ navigation }) => {
  const search = useTrendingQuery();
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

export default Trending;

const styles = StyleSheet.create({});
