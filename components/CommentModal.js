import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Comments from "./Comments";

const CommentModal = ({
  CommentModalVisible,
  setCommentModalVisible,
  videoComment,
  type,
  setType,
}) => {
  const [commentType, setCommentType] = useState("Top comments");
  const commentHandle = (title, type) => {
    setType(type);
    setCommentType(title);
  };
  return (
    <ScrollView
      style={{
        backgroundColor: "#1f1e1e",
        height: "65%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 10,
        paddingTop: 10,
      }}
    >
      {/* <StatusBar backgroundColor="#1f1e1e" /> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 24, color: "white" }}>
          Comments
        </Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setCommentModalVisible(!CommentModal)}
        >
          <AntDesign name="close" size={24} color="white" />
        </Pressable>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
      >
        {videoComment?.data?.filters.map((data, id) => (
          <TouchableHighlight
            onPress={() => commentHandle(data.title, data.cursorFilter)}
            key={id}
          >
            <Text
              style={[
                {
                  padding: 10,
                  borderRadius: 20,
                  fontWeight: "900",
                  marginRight: 10,
                },
                commentType === data.title
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "gray" },
              ]}
            >
              {data.title}
            </Text>
          </TouchableHighlight>
        ))}
      </View>
      <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
        {videoComment?.data?.comments?.map((comment, id) => (
          <View key={id} style={{ marginBottom: 30 }}>
            <Comments data={comment} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CommentModal;

const styles = StyleSheet.create({});
