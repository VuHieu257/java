import * as React from "react";
import { StyleSheet, Text, View,Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontSize, FontFamily } from "../screen/GlobalStyles";

const ChatDetails = ({ navigation }) => {
  return (
    <View style={styles.chatDetails}>
      <Image
        style={[styles.patternIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/Pattern11.png")}
      />
      <View style={[styles.text, styles.textPosition]}>
        <Text style={[styles.tiitle, styles.tiitlePosition]}>Chat</Text>
      </View>
      <View style={[styles.profileSection, styles.profileLayout]}>
        <View style={[styles.profileSectionChild, styles.childShadowBox]} />
        <Text style={[styles.sampleName, styles.tiitlePosition]}>
          Dianne Russell
        </Text>
        <Image
          style={[styles.photoProfileIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/photo-profile2.png")}
        />
        <View style={styles.onlineNotification}>
          <Text style={styles.onlineNotification1}>Online</Text>
          <Image
            style={styles.onlineNotificationChild}
            contentFit="cover"
            source={require("../assets/firstpage/secondpage/ellipse-184.png")}
          />
        </View>
      </View>
      <Image
        style={styles.callLogoIcon}
        contentFit="cover"
        source={require("../assets/firstpage/secondpage/call-logo.png")}
      />
      <View style={styles.sampleChating}>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupBg]} />
          <Text style={[styles.sampleChat, styles.sampleTypo1]}>
            Just to order
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.sampleChat1, styles.sampleTypo1]}>
            Okay, wait a minute 👍
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <LinearGradient
            style={[styles.groupInner, styles.groupInnerPosition]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          />
          <Text style={[styles.sampleChat2, styles.sampleTypo]}>
            Okay, for what level of spiciness?
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.groupViewLayout]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          />
          <Text style={[styles.sampleChat3, styles.sampleTypo]}>
            Okay I'm waiting 👍
          </Text>
        </View>
      </View>
      <View style={[styles.textingForm, styles.textingLayout]}>
        <View style={[styles.textingFormChild, styles.textingLayout]} />
        <Text style={[styles.textingChat, styles.sampleTypo1]}>
          Okay I'm waiting 👍
        </Text>
        <Image
          style={styles.iconSend}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/icon-send.png")}
        />
      </View>
      <View style={[styles.iconBack, styles.textPosition]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/vector.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    left: "6.67%",
    position: "absolute",
  },
  tiitlePosition: {
    textAlign: "left",
    color: Color.colorGray_200,
    top: "50%",
    position: "absolute",
  },
  profileLayout: {
    height: 93,
    width: 347,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 41,
    width: 129,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorWhitesmoke,
      borderRadius: Border.br_smi,
    borderWidth:0.2,
    top: 0,
  },
  sampleTypo1: {
    opacity: 0.8,
    color: Color.colorGray_100,
      letterSpacing: 1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    width: 185,
    height: 41,
    left: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 265,
    height: 41,
    position: "absolute",
  },
  groupInnerPosition: {
    backgroundColor: Color.linear,
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
  },
  sampleTypo: {
    color: Color.colorWhite,
    opacity: 0.8,
    fontFamily: FontFamily.bentonSansBook,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  groupViewLayout: {
    width: 175,
    height: 40,
    position: "absolute",
  },
  textingLayout: {
    height: 74,
    width: 355,
    position: "absolute",
  },
  rectanglePosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
  },
  patternIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  tiitle: {
    marginTop: -16.5,
    fontSize: 27,
      lineHeight: 33,
    fontWeight:"bold",
    fontFamily: "BentonSans-Bold",
    left: "0%",
  },
  text: {
    marginTop: -304,
    width: "15.73%",
    right: "77.6%",
    height: 33,
    top: "50%",
  },
  profileSectionChild: {
    shadowColor: "rgba(90, 108, 234, 0.07)",
    height: 93,
    width: 367,
    position: "absolute",
  },
  sampleName: {
    marginTop: -21.5,
    left: "26.64%",
    fontSize: 15,
    lineHeight: 20,
    fontFamily: FontFamily.bentonSansMedium,
  },
  photoProfileIcon: {
    height: "66.67%",
    width: "17.87%",
    top: "16.13%",
    right: "78.39%",
    bottom: "17.2%",
    left: "3.75%",
    borderRadius: 16,
  },
  onlineNotification1: {
    left: "18.18%",
    fontFamily: FontFamily.bentonSansRegular,
    color: "#3b3b3b",
    opacity: 0.3,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    marginTop: -7,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  onlineNotificationChild: {
    top: 3,
    width: 6,
    height: 6,
    left: 0,
    position: "absolute",
  },
  onlineNotification: {
    marginTop: 2.5,
    width: "15.85%",
    right: "56.77%",
    left: "27.38%",
    height: 14,
    top: "50%",
    position: "absolute",
  },
  profileSection: {
    top: 175,
    left: 15,
  },
  callLogoIcon: {
    top: 201,
    left: 314,
    width: 40,
    height: 40,
    position: "absolute",
  },
  groupChild: {
    height: 41,
    width: 129,
    position: "absolute",
    left: 0,
  },
  sampleChat: {
    marginTop: -8.5,
    left: "9.3%",
    fontFamily: FontFamily.bentonSansBook,
    opacity: 0.8,
    color: Color.colorGray_100,
  },
  rectangleParent: {
    left: 3,
    top: 0,
    width: 129,
  },
  groupItem: {
    backgroundColor: Color.colorWhitesmoke,
      borderRadius: Border.br_smi,
      borderWidth:0.2,
    top: 0,
  },
  sampleChat1: {
    left: "8.11%",
    marginTop: -6.5,
    fontFamily: FontFamily.bentonSansBook,
    opacity: 0.8,
    color: Color.colorGray_100,
  },
  rectangleGroup: {
    top: 122,
  },
  groupInner: {
    width: 265,
    height: 41,
    position: "absolute",
  },
  sampleChat2: {
    left: "4.53%",
    marginTop: -6.5,
  },
  rectangleContainer: {
    top: 61,
    left: 70,
  },
  rectangleLineargradient: {
    backgroundColor: Color.linear,
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
  },
  sampleChat3: {
    left: "11.43%",
    marginTop: -7,
    color: Color.colorWhite,
  },
  groupView: {
    top: 183,
    left: 160,
  },
  sampleChating: {
    top: 288,
    left: 30,
    width: 335,
    height: 223,
      position: "absolute",
  },
  textingFormChild: {
    shadowColor: "rgba(90, 108, 234, 0.1)",
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  textingChat: {
    marginTop: -8,
    left: "7.04%",
    fontFamily: FontFamily.rubikRegular,
  },
  iconSend: {
    top: 25,
    left: 299,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  textingForm: {
    top: 768,
    left: 30,
  },
  rectangle: {
    borderRadius: 15,
    backgroundColor: "#f9a84d",
    opacity: 0.1,
    left: "0%",
    position: "absolute",
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
  },
  chatDetails: {
    borderRadius: 20,
    backgroundColor: "#fefeff",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChatDetails;
