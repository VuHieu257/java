import * as React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../screen/GlobalStyles";

const Message = ({ navigation }) => {
  return (
    <View style={styles.message}>
      <Image
        style={[styles.patternIcon, styles.iconPosition3]}
        contentFit="cover"
        source={require("../assets/firstpage/pattern1.png")}
      />
      <View style={styles.menuBar}>
        <View style={styles.menuBarChild} />
        <Image
          style={[styles.homeIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/firstpage/iconlybulkhome.png")}
        />
        <Image
          style={[styles.iconProfile, styles.iconProfileLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/iconlybulkprofile.png")}
        />
        <View style={[styles.iconChatActive, styles.iconLayout]}>
          <LinearGradient
            style={[styles.iconChatActiveChild, styles.iconLayout]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          />
          <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
          <Image
            style={[styles.iconChat, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/firstpage/Message.png")}
          />
        </View>
        <View style={styles.iconCart}>
          <Image
            style={[styles.iconlybulkbuy, styles.rectanglePosition]}
            contentFit="cover"
            source={require("../assets/firstpage/iconlybulkbuy.png")}
          />
          <View style={[styles.notificationCart, styles.notificationPosition]}>
            <Image
              style={[
                styles.notificationCartChild,
                styles.notificationPosition,
              ]}
              contentFit="cover"
              source={require("../assets/firstpage/ellipse163.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>7</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconBack}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/firstpage/Path.png")}
        />
      </View>
      <View style={[styles.text1, styles.text1Position]}>
        <Text style={[styles.tiitle, styles.text1Position]}>Chat</Text>
      </View>
      <View style={[styles.chating1, styles.chatingLayout]}>
        <View style={styles.childShadowBox} />
        <Text style={[styles.sampleName, styles.text1Position]}>Anamwp</Text>
        <Text style={[styles.chatNotification, styles.timeTypo]}>
          Your Order Just Arrived!
        </Text>
        <Image
          style={[styles.photoProfileIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/photo-profile2.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>20:00</Text>
      </View>
      <View style={[styles.chating2, styles.chatingLayout]}>
        <View style={styles.childShadowBox} />
        <Text style={[styles.sampleName, styles.text1Position]}>
          Guy Hawkins
        </Text>
        <Text style={[styles.chatNotification, styles.timeTypo]}>
          Your Order Just Arrived!
        </Text>
        <Image
          style={[styles.photoProfileIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/photo-profile3.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>20:00</Text>
      </View>
      <View style={[styles.chating3, styles.chatingLayout]}>
        <View style={styles.childShadowBox} />
        <Text style={[styles.sampleName, styles.text1Position]}>
          Leslie Alexander
        </Text>
        <Text style={[styles.chatNotification, styles.timeTypo]}>
          Your Order Just Arrived!
        </Text>
        <Image
          style={[styles.photoProfileIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/photo-profile4.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>20:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition3: {
    top: 0,
    left: 0,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconProfileLayout: {
    opacity: 0.5,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: 44,
    width: 105,
    position: "absolute",
  },
  chatTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bentonSansMedium,
    color: Color.colorGray_100,
  },
  rectanglePosition: {
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  notificationPosition: {
    width: 13,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
  },
  text1Position: {
    top: "50%",
    position: "absolute",
  },
  chatingLayout: {
    height: 81,
    width: 335,
    left: 30,
    position: "absolute",
  },
  timeTypo: {
    opacity: 0.3,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bentonSansRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  patternIcon: {
    width: 406,
    left: 0,
    position: "absolute",
    height: 812,
    top: 0,
  },
  menuBarChild: {
    shadowColor: "rgba(90, 108, 234, 0.1)",
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xl,
    height: 74,
    width: 355,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeIcon: {
    width: "5.35%",
    right: "83.52%",
    left: "11.13%",
    bottom: "36.49%",
    top: "36.49%",
    height: "27.03%",
  },
  iconProfile: {
    width: "4.51%",
    right: "65.07%",
    left: "30.42%",
    bottom: "36.49%",
    top: "36.49%",
    height: "27.03%",
    position: "absolute",
  },
  iconChatActiveChild: {
    borderRadius: 12,
    backgroundColor: Color.linear,
    opacity: 0.1,
    left: 0,
    top: 0,
  },
  chat: {
    top: 14,
    left: 53,
    fontSize: 13,
    lineHeight: 16,
    position: "absolute",
  },
  iconChat: {
    height: "59.09%",
    width: "26.67%",
    top: "18.18%",
    right: "60.95%",
    bottom: "22.73%",
    left: "12.38%",
  },
  iconChatActive: {
    top: 15,
    left: 234,
  },
  iconlybulkbuy: {
    height: "92.31%",
    width: "85.71%",
    top: "7.69%",
    right: "14.29%",
    left: "0%",
    opacity: 0.5,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  notificationCartChild: {
    height: 13,
    left: 0,
  },
  text: {
    top: 2,
    left: 4,
    fontSize: 9,
    lineHeight: 12,
    color: Color.colorWhite,
    position: "absolute",
  },
  notificationCart: {
    left: 15,
    height: 14,
  },
  iconCart: {
    height: "35.14%",
    width: "7.89%",
    top: "31.08%",
    right: "42.54%",
    bottom: "33.78%",
    left: "49.58%",
    position: "absolute",
  },
  menuBar: {
    top: 768,
    left: 30,
    height: 74,
    width: 355,
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    borderRadius: 15,
    backgroundColor: "#f9a84d",
    left: "0%",
    opacity: 0.1,
    width: "100%",
    bottom: "0%",
  },
  vectorIcon: {
    height: "36.36%",
    width: "22.22%",
    top: "31.11%",
    right: "40%",
    bottom: "32.52%",
    left: "37.78%",
  },
  iconBack: {
    height: "5.54%",
    width: "12%",
    top: "4.68%",
    right: "81.33%",
    bottom: "89.78%",
    left: "6.67%",
    position: "absolute",
  },
  tiitle: {
    marginTop: -16.5,
    fontSize: 25,
    lineHeight: 33,
    fontWeight:"bold",
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    left: "0%",
    color: Color.colorGray_100,
    top: "50%",
  },
  text1: {
    marginTop: -304,
    width: "15.73%",
    right: "77.6%",
    height: 33,
    left: "6.67%",
  },
  childShadowBox: {
    borderWidth:0.4,
    shadowColor: "rgba(90, 108, 234, 0.07)",
    height: 81,
    width: 345,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  sampleName: {
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    left: "26.1%",
    marginTop: -20.5,
    textAlign: "left",
    fontFamily: FontFamily.bentonSansMedium,
    color: Color.colorGray_100,
  },
  chatNotification: {
    marginTop: 7.5,
    left: "26.1%",
  },
  photoProfileIcon: {
    height: "76.54%",
    width: "18.51%",
    top: "12.35%",
    right: "79.1%",
    bottom: "11.11%",
    left: "2.39%",
    borderRadius: Border.br_base,
  },
  time: {
    left: "85.88%",
    marginTop: -20.5,
  },
  chating1: {
    top: 167,
  },
  chating2: {
    top: 268,
  },
  chating3: {
    top: 369,
  },
  message: {
    borderRadius: 20,
    backgroundColor: "#fefeff",
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Message;
