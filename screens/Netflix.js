import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  useNetflixQuery,
  useSearchQuery,
  useTrendingQuery,
} from "../app/services";
import Videos from "../components/Videos";

const Netflix = ({ navigation }) => {
  const search = useNetflixQuery();
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

export default Netflix;

const styles = StyleSheet.create({});
