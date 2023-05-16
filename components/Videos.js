import { View, Text, TouchableHighlight, Image } from "react-native";
import React from "react";
import { useStateContext } from "../context/StateContext";
import { useNavigation } from "@react-navigation/native";

const Videos = ({ item }) => {
  const navigation = useNavigation();
  const { setChannelId, setVideoId } = useStateContext();
  const handleVideo = (id) => {
    navigation.navigate("VideoDetails");
    setVideoId(id);
  };
  const handleChannel = (id) => {
    navigation.navigate("Channels");
    setChannelId(id);
  };
  return (
    <>
      {item?.type === "video" ? (
        <View style={{ alignItems: "flex-start", marginBottom: 30 }}>
          <TouchableHighlight
            onPress={() => handleVideo(item.video.videoId)}
            style={{
              height: 200,
              width: "100%",
              borderRadius: 10,
              overflow: "hidden",
              marginBottom: 10,
            }}
          >
            <Image
              source={{ uri: item?.video?.thumbnails[0]?.url }}
              style={{ height: 200, width: "100%" }}
              resizeMode="cover"
            />
          </TouchableHighlight>
          <Text
            style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
            numberOfLines={1}
          >
            {item?.video?.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 5,
              width: "100%",
            }}
          >
            {item?.video?.stats?.views ? (
              <Text style={{ color: "white" }}>
                Views: {item?.video?.stats?.views}
              </Text>
            ) : (
              <></>
            )}
            <Text style={{ color: "white" }}>
              {item?.video?.publishedTimeText}
            </Text>
            {item.video.author ? (
              <Text
                onPress={() => handleChannel(item.video.author.channelId)}
                style={{ color: "white" }}
              >
                {item?.video?.author?.title}
              </Text>
            ) : (
              <></>
            )}
          </View>
        </View>
      ) : item?.type === "playlist" ? (
        <></>
      ) : (
        <View
          style={{ alignItems: "flex-start", marginBottom: 30 }}
          onPress={() => handleChannel(item.channel.channelId)}
        >
          <TouchableHighlight
            style={{
              height: 200,
              width: "100%",
              borderRadius: 10,
              overflow: "hidden",
              marginBottom: 10,
            }}
          >
            <Image
              source={{ uri: item?.channel?.avatar[1]?.url }}
              style={{ height: 200, width: "100%" }}
              resizeMode="cover"
            />
          </TouchableHighlight>
          <Text
            style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
            numberOfLines={1}
          >
            {item?.channel?.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 5,
              width: "100%",
            }}
          >
            <Text style={{ color: "white" }}>
              {item?.channel?.stats?.subscribersText}
            </Text>

            {item.channel?.stats?.videos ? (
              <Text style={{ color: "white" }}>
                Videos: {item.channel?.stats?.videos}
              </Text>
            ) : (
              <></>
            )}
          </View>
        </View>
      )}
    </>
  );
};

export default Videos;
