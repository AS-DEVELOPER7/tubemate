import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  useChannelDetailsQuery,
  useChannelVideosQuery,
  useCodingQuery,
  useSearchQuery,
  useTrendingQuery,
} from "../app/services";
import { useStateContext } from "../context/StateContext";
import Videos from "../components/Videos";
const Channels = ({ navigation }) => {
  const { channelId, setTags } = useStateContext();
  const channelDetails = useChannelDetailsQuery(channelId);
  const channelVideos = useChannelVideosQuery(channelId);
  // console.log(channelVideos);
  const [viewMore, setViewMore] = useState(false);
  useEffect(() => {
    channelId.length === 0 ? navigation.navigate("Home") : "";
  }, [channelId]);
  useEffect(() => {
    setTags(false);
  }, []);
  return (
    <ScrollView
      style={{
        backgroundColor: "#1f1e1e",
        color: "white",
        flex: 1,
        paddingHorizontal: 10,
      }}
    >
      <Image
        source={{ uri: channelDetails?.data?.banner?.mobile[0]?.url }}
        style={{ width: "100%", height: 99, borderRadius: 10 }}
        resizeMode="contain"
      />
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image
          source={{ uri: channelDetails?.data?.avatar[2]?.url }}
          style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          {channelDetails?.data?.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "gray", fontWeight: "900", marginRight: 20 }}>
            {channelDetails?.data?.canonicalBaseUrl.slice(1)}
          </Text>
          <Text style={{ color: "gray", fontWeight: "900" }}>
            {channelDetails?.data?.stats?.subscribersText}
          </Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ color: "white" }} numberOfLines={viewMore ? 100 : 5}>
            {channelDetails?.data?.description}
          </Text>
          <Text
            style={{ color: "white", fontWeight: "900", marginTop: 10 }}
            onPress={() => setViewMore(!viewMore)}
          >
            {viewMore ? "View Less >" : "View More >"}
          </Text>
        </View>
      </View>
      <View>
        {channelVideos?.data?.contents?.map((data, id) => (
          <View key={id}>
            <Videos item={data} navigation={navigation} />
          </View>
        ))}
        {/* <FlatList
          nestedScrollEnabled
          data={channelVideos?.data?.contents}
          keyExtractor={(item, id) => id}
          renderItem={({ item }) => (
            <Videos item={item} navigation={navigation} />
          )}
        /> */}
      </View>
    </ScrollView>
  );
};

export default Channels;

const styles = StyleSheet.create({});
