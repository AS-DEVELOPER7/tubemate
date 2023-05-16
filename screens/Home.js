import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useAnimeQuery, useRecommandedQuery } from "../app/services";
import Videos from "../components/Videos";
import { useStateContext } from "../context/StateContext";

const Home = ({ navigation }) => {
  const { tags, setTags } = useStateContext();
  const recommanded = useRecommandedQuery();
  // const [refresh, setRefresh] = useState(false);
  // console.log(recommanded);
  useEffect(() => {
    setTags(true);
  }, []);
  // const handlerefresh = () => {
  //   recommanded?.refetch();
  //   recommanded?.isFetching ? setRefresh(flase) : setRefresh(true);
  // };
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
        // refreshControl={() => {
        //   handlerefresh();
        // }}
        // refreshing={refresh}
        data={recommanded?.data?.contents}
        keyExtractor={(item, id) => id}
        renderItem={({ item }) => (
          <Videos item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
