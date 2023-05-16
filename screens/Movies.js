import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  useMoviesQuery,
  useSearchQuery,
  useTrendingQuery,
} from "../app/services";
import Videos from "../components/Videos";

const Movies = ({ navigation }) => {
  const search = useMoviesQuery();
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

export default Movies;

const styles = StyleSheet.create({});
