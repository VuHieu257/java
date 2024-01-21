import * as React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontSize, FontFamily } from "../screen/GlobalStyles";

const ViaMethod = ({navigation}) => {
  return (
    <View style={styles.viaMethod}>
      <Image
        style={[styles.patternIcon, styles.patternIconPosition]}
        contentFit="cover"
        source={require("../assets/firstpage/Pattern11.png")}
      />
      <View style={[styles.text, styles.textPosition]}>
        <Text style={[styles.tittle, styles.tittleFlexBox]}>
          Forgot password?
        </Text>
        <Text style={[styles.subTittle, styles.tittleFlexBox]}>
          Select which contact details should we use to reset your password
        </Text>
      </View>
      <View style={[styles.viaSmsButton, styles.viaLayout1]}>
        <View style={[styles.viaSmsButtonChild, styles.viaChildShadowBox]} />
        <View style={[styles.content, styles.contentLayout]}>
          <View style={[styles.number, styles.numberPosition]}>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.frameParentFlexBox}>
                <Image
                  style={styles.frameLayout}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse_1.png")}
                />
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-2.png")}
                />
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-3.png")}
                />
                {/* <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-4.png")}
                /> */}
              </View>
              <View style={[styles.ellipseGroup, styles.frameParentFlexBox]}>
                <Image
                  style={styles.frameLayout}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse_1.png")}
                />
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-2.png")}
                />
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-3.png")}
                />
                {/* <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-4.png")}
                /> */}
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>7355</Text>
            </View>
            <Text style={[styles.viaSms, styles.viaSmsPosition]}>Via sms:</Text>
          </View>
          <Image
            style={[styles.iconMessage, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/firstpage/Message.png")}
          />
        </View>
      </View>
      <View style={[styles.viaEmailButton, styles.viaLayout]}>
        <View style={[styles.viaEmailButtonChild, styles.viaLayout]} />
        <View style={[styles.content1, styles.contentLayout]}>
          <View style={[styles.number1, styles.numberPosition]}>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.frameParentFlexBox}>
                <Image
                  style={styles.frameLayout}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse_1.png")}
                />
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-2.png")}
                />
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-3.png")}
                />
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-4.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameParentFlexBox]}>
                <Image
                  style={styles.frameLayout}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse_1.png")}
                />
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-2.png")}
                />
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-3.png")}
                />
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/firstpage/ellipse-4.png")}
                />
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>@gmail.com</Text>
            </View>
            <Text style={[styles.viaSms, styles.viaSmsPosition]}>
              Via email:
            </Text>
          </View>
          <Image
            style={[styles.iconEmail, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/firstpage/Email.png")}
          />
        </View>
      </View>
      <View style={[styles.iconBack, styles.textPosition]}>
        <View style={[styles.rectangle, styles.viaSmsPosition]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/Path.png")}
        />
      </View>
      <View style={[styles.ctaButton, styles.ctaLayout]}>
        <LinearGradient
          style={[styles.ctaButtonChild, styles.ctaLayout]}
          locations={[0, 1]}
          colors={["#53e88b", "#15be77"]}
        />
        <Text style={styles.next}>Next</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    patternIconPosition: {
      top: 0,
      left: 0,
    },
    textPosition: {
      left: "6.67%",
      position: "absolute",
    },
    tittleFlexBox: {
      textAlign: "left",
      position: "absolute",
    },
    viaLayout1: {
      height: 105,
      width: 347,
      position: "absolute",
    },
    viaChildShadowBox: {
      shadowOpacity: 1,
      elevation: 5,
      shadowRadius: 50,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowColor: "rgba(90, 108, 234, 0.07)",
      backgroundColor: Color.colorWhite,
      borderRadius: Border.br_3xl,
      left: 0,
      top: 0,
    },
    contentLayout: {
      height: 52,
      position: "absolute",
    },
    numberPosition: {
      left: 56,
      height: 52,
      top: 0,
      position: "absolute",
    },
    frameParentFlexBox: {
      alignItems: "center",
      flexDirection: "row",
    },
    frameLayout: {
      height: 8,
      width: 8,
    },
    text1Typo: {
      lineHeight: 24,
      fontSize: FontSize.bodyNormalRegular_size,
      textAlign: "left",
    },
    viaSmsPosition: {
      top: "0%",
      left: "0%",
      position: "absolute",
    },
    iconLayout: {
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    viaLayout: {
      height: 81,
      width: 347,
      position: "absolute",
    },
    ctaLayout: {
      height: 57,
      width: 157,
      position: "absolute",
    },
    patternIcon: {
      width: 410,
      left: 0,
      position: "absolute",
      height: 812,
      top: 0,
    },
    tittle: {
      marginTop: -48.5,
      fontSize: 27,
      lineHeight: 33,
      color: Color.colorGray_100,
      fontWeight:"bold",
      fontFamily: FontFamily.bentonSansBold,
      left: "5%",
      textAlign: "left",
      top: "50%",
    },
    subTittle: {
      top: 53,
      fontSize: 14,
      lineHeight: 22,
      fontFamily: FontFamily.bentonSansBook,
      color: "#000",
      width: 224,
      left: "5%",
    },
    text: {
      marginTop: -303,
      width: "59.73%",
      right: "33.6%",
      height: 97,
      top: "50%",
      left: "6.67%",
    },
    viaSmsButtonChild: {
      height: 105,
      width: 347,
      position: "absolute",
    },
    frameItem: {
      marginLeft: 4,
    },
    ellipseGroup: {
      marginLeft: 14,
    },
    text1: {
      fontFamily: FontFamily.bodyNormalRegular,
      marginLeft: 14,
      color: Color.colorGray_100,
    },
    frameParent: {
      top: 28,
      left: 0,
      position: "absolute",
    },
    viaSms: {
      fontFamily: FontFamily.bentonSansRegular,
      color: Color.colorGray3,
      lineHeight: 24,
      fontSize: FontSize.bodyNormalRegular_size,
      textAlign: "left",
    },
    number: {
      width: 153,
    },
    iconMessage: {
      width: "19.14%",
      right: "80.86%",
      bottom: "11.54%",
      top: "11.54%",
      height: "76.92%",
      maxWidth: "100%",
      left: "0%",
    },
    content: {
      top: 27,
      left: 23,
      width: 209,
    },
    viaSmsButton: {
      top: 235,
      left: 34,
    },
    viaEmailButtonChild: {
      shadowOpacity: 1,
      elevation: 5,
      shadowRadius: 50,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowColor: "rgba(90, 108, 234, 0.07)",
      backgroundColor: Color.colorWhite,
      borderRadius: Border.br_3xl,
      left: 0,
      top: 0,
    },
    frameView: {
      display: "none",
      marginLeft: 14,
    },
    number1: {
      width: 148,
    },
    iconEmail: {
      width: "19.61%",
      right: "80.39%",
      bottom: "11.54%",
      top: "11.54%",
      height: "76.92%",
      maxWidth: "100%",
      left: "0%",
    },
    content1: {
      top: 15,
      left: 26,
      width: 204,
    },
    viaEmailButton: {
      top: 360,
      left: 34,
    },
    rectangle: {
      height: "100%",
      right: "0%",
      bottom: "0%",
      backgroundColor: "#f9a84d",
      opacity: 0.1,
      borderRadius: Border.br_mini,
      width: "100%",
      top: "0%",
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
    ctaButtonChild: {
      backgroundColor: Color.linear,
      borderRadius: Border.br_mini,
      left: 0,
      top: 0,
    },
    next: {
      top: 18,
      left: 60,
      lineHeight: 21,
      color: Color.colorWhite,
      fontSize: FontSize.bodyNormalRegular_size,
      textAlign: "left",
      fontFamily: FontFamily.bentonSansBold,
      position: "absolute",
    },
    ctaButton: {
      top: 675,
      left: 129,
    },
    viaMethod: {
      borderRadius: 20,
      backgroundColor: "#fefeff",
      flex: 1,
      overflow: "hidden",
      height: 812,
      width: "100%",
    },
  });
export default ViaMethod;
