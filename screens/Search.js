import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  useAnimeQuery,
  useRecommandedQuery,
  useSearchPageQuery,
  useSearchQuery,
} from "../app/services";
import { useStateContext } from "../context/StateContext";
import Videos from "../components/Videos";
const Search = ({ navigation }) => {
  const { searchValue, setTags, tags } = useStateContext();
  const [filter, setFilter] = useState("");
  const [label, setLabel] = useState("");
  const handleFilter = (title, filters) => {
    setLabel(title);
    setFilter(filters);
  };
  const search = useSearchQuery({ searchValue });
  // console.log(search);
  useEffect(() => {
    setTags(false);
  }, []);
  return (
    <View
      style={{
        backgroundColor: "#1f1e1e",
        color: "white",
        flex: 1,
        paddingHorizontal: 10,
      }}
    >
      {/* <View style={{ marginVertical: 10 }}>
        <FlatList
          horizontal
          data={search?.data?.filterGroups[0]?.filters}
          keyExtractor={(item, id) => id}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => handleFilter(item.label, item.cursorSelect)}
            >
              <Text
                style={[
                  { marginHorizontal: 10, padding: 5, borderRadius: 10 },
                  label === item.label
                    ? { color: "black", backgroundColor: "white" }
                    : { color: "white" },
                ]}
              >
                {item.label}
              </Text>
            </TouchableHighlight>
          )}
        />
      </View> */}
      <FlatList
        removeClippedSubviews
        data={search?.data?.contents}
        keyExtractor={(item, id) => id}
        renderItem={({ item }) => (
          <Videos item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
