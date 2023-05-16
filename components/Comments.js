import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Comments = ({ data }) => {
  // console.log("sdsd");
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <Image
          source={{ uri: data?.author?.avatar[2]?.url }}
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            marginRight: 10,
          }}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "900" }}>
              {data?.author?.title} &#x2022;
            </Text>
            <Text style={{ color: "white" }}> {data?.publishedTimeText}</Text>
          </View>
          <Text style={{ color: "white", width: "20%" }}>{data?.content}</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 15,
          }}
        >
          <AntDesign name="like1" size={24} color="white" />
          <Text style={{ color: "white", fontWeight: "900", marginLeft: 10 }}>
            {data?.stats?.votes}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="chat" size={24} color="white" />
          <Text style={{ color: "white", fontWeight: "900", marginLeft: 10 }}>
            {data?.stats?.replies}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({});
