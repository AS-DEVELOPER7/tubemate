import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const DescModal = ({ setModalVisible, modalVisible, videoDetails }) => {
  const [view, setView] = useState(false);
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
      <StatusBar backgroundColor="#1f1e1e" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 24, color: "white" }}>
          Description
        </Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <AntDesign name="close" size={24} color="white" />
        </Pressable>
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "gray",
          width: "95%",
          height: 1,
          marginVertical: 20,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          //   marginTop: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            {videoDetails?.data?.stats?.likes}
          </Text>
          <Text style={{ color: "gray", fontWeight: "900" }}>Likes</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            {videoDetails?.data?.stats?.views}
          </Text>
          <Text style={{ color: "gray", fontWeight: "900" }}>Views</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            {videoDetails?.data?.publishedDate}
          </Text>
          <Text style={{ color: "gray", fontWeight: "900" }}>Punlished</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "gray",
          width: "95%",
          height: 1,
          marginVertical: 20,
        }}
      ></View>
      <View style={{}}>
        <View style={{ flexDirection: "row" }}>
          {videoDetails?.data?.superTitle?.items?.map((item, id) => (
            <Text style={{ color: "gray", marginRight: 10 }} key={id}>
              {item}
            </Text>
          ))}
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text numberOfLines={view ? 100 : 5} style={{ color: "white" }}>
            {videoDetails?.data?.description}
          </Text>
          <Pressable onPress={() => setView(!view)}>
            <Text style={{ color: "white", fontWeight: "900" }}>
              {view ? "Less..." : "More..."}
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "gray",
          width: "95%",
          height: 1,
          marginVertical: 20,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: 30,
        }}
      >
        <Image
          source={{ uri: videoDetails?.data?.author?.avatar[2]?.url }}
          style={{
            height: 60,
            width: 60,
            borderRadius: 60 / 2,
            marginRight: 10,
          }}
        />
        <View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            {videoDetails?.data?.author?.title}
          </Text>
          <Text style={{ color: "gray", fontWeight: "900" }}>
            {videoDetails?.data?.author?.stats?.subscribersText}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DescModal;

const styles = StyleSheet.create({});
