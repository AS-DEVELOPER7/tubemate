// import * as React from "react";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  Modal,
  Alert,
  Pressable,
  TouchableHighlight,
  StatusBar,
  ScrollView,
} from "react-native";
import Videos from "../components/Videos";

import { Video } from "expo-av";
// import Video from "react-native-video";
import { useStateContext } from "../context/StateContext";
import {
  useVideoCommentsQuery,
  useVideoDetailsQuery,
  useVideoRelatedContentsQuery,
  useVideoStreamingDataQuery,
} from "../app/services";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import DescModal from "../components/DescModal";
import Comments from "../components/Comments";
import CommentModal from "../components/CommentModal";
// import Comments from "../components/comments";
const VideoDetails = ({ navigation }) => {
  const video = React.useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [status, setStatus] = useState({});
  const { videoId, setTags, setChannelId } = useStateContext();
  const videoStreaming = useVideoStreamingDataQuery(videoId);
  const videoDetails = useVideoDetailsQuery(videoId);
  const videoRelatedContent = useVideoRelatedContentsQuery(videoId);
  const [type, setType] = useState();
  const videoComment = useVideoCommentsQuery({ videoId, type });
  // console.log(videoStreaming);
  useEffect(() => {
    setTags(false);
    videoId.length === 0
      ? navigation.navigate("Home")
      : setType(videoComment?.data?.filters[0]?.cursorFilter);
  }, []);
  const handleChannel = (id) => {
    navigation.navigate("Channels");
    setChannelId(id);
  };
  // console.group("status", status);
  return (
    <ScrollView
      style={{
        backgroundColor: "#1f1e1e",
        color: "white",
        flex: 1,
      }}
    >
      {/* <StatusBar /> */}
      <View style={{ position: "relative" }}>
        {videoStreaming?.data?.isProtectedContent ? (
          <View
            style={{
              backgroundColor: "gray",
              width: "100%",
              height: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "900" }}>
              Video Is Not Available
            </Text>
          </View>
        ) : (
          <Video
            ref={video}
            style={{ height: 200, width: "100%" }}
            source={{
              uri: videoStreaming?.data?.formats[1]?.url,
            }}
            // volume={true}
            useNativeControls={true}
            resizeMode="contain"
            // controls

            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        )}
        {/* <AntDesign
          style={{
            position: "absolute",
            // right: 0,
            left: "40%",
            top: "40%",
            // bottom: 0,
            // backgroundColor: "black",
            width: 50,
            height: 50,
          }}
          size={50}
          color={"white"}
          name={status.isPlaying ? "pause" : "caretright"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        /> */}
      </View>
      <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          {videoDetails?.data?.title}
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Text style={{ color: "gray", marginRight: 10 }}>
            {videoDetails?.data?.stats?.views} Views
          </Text>
          <Text style={{ color: "gray" }}>
            {videoDetails?.data?.publishedDate}
          </Text>
          <TouchableHighlight onPress={() => setModalVisible(!modalVisible)}>
            <Text style={{ color: "white", fontWeight: "900", marginLeft: 10 }}>
              ...More
            </Text>
          </TouchableHighlight>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            // style={{ backgroundColor: "#1f1e1e", flex: 1 }}
            onRequestClose={() => {
              // Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <DescModal
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
              videoDetails={videoDetails}
            />
          </Modal>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginVertical: 10,
          }}
        >
          <Image
            source={{ uri: videoDetails?.data?.author?.avatar[2]?.url }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              marginRight: 10,
            }}
          />
          <View>
            <Text
              style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              onPress={() =>
                handleChannel(videoDetails?.data?.author?.channelId)
              }
            >
              {videoDetails?.data?.author?.title}
            </Text>
            <Text style={{ color: "gray", fontWeight: "900" }}>
              {videoDetails?.data?.author?.stats?.subscribersText}
            </Text>
          </View>
        </View>
        <TouchableHighlight
          style={{ backgroundColor: "gray", borderRadius: 10, padding: 10 }}
          onPress={() => setCommentModalVisible(!commentModalVisible)}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                  marginRight: 10,
                }}
              >
                Comments
              </Text>
              <Text style={{ color: "white", fontWeight: "900" }}>
                {videoDetails?.data?.stats?.comments}
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Comments data={videoComment?.data?.comments[0]} />
            </View>
          </View>
        </TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={true}
          visible={commentModalVisible}
          // style={{ backgroundColor: "#1f1e1e", flex: 1 }}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setCommentModalVisible(!commentModalVisible);
          }}
        >
          <CommentModal
            setCommentModalVisible={setCommentModalVisible}
            commentModalVisible={commentModalVisible}
            videoComment={videoComment}
            type={type}
            setType={setType}
          />
        </Modal>
      </View>
      <View style={{ marginTop: 20 }}>
        {videoRelatedContent?.data?.contents &&
          videoRelatedContent?.data?.contents?.map((data, id) => (
            <View key={id}>
              <Videos item={data} navigation={navigation} />
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default VideoDetails;

const styles = StyleSheet.create({});
