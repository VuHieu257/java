import * as React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../screen/GlobalStyles";

const VerificationCode = ({ navigation }) => {
  return (
    <View style={styles.verificationCode}>
    <Image
      style={[styles.patternIcon, styles.childPosition]}
      contentFit="cover"
      source={require("../assets/firstpage/pattern1.png")}
    />
    <View style={[styles.text, styles.textPosition]}>
      <Text style={[styles.tittle, styles.nextFlexBox]}>{`Enter 4-digit
Verification code`}</Text>
      <Text style={[styles.subTitle, styles.nextFlexBox]}>
        Code send to +6282045**** . This code will expired in 01:30
      </Text>
    </View>
    <View style={[styles.codeBox, styles.codeLayout]}>
      <View style={[styles.codeBoxChild, styles.codeLayout]} />
      <View style={styles.codeNumber}>
        <Text style={[styles.text1, styles.textTypo,styles.borderW]}>1</Text>
        <Text style={[styles.text2, styles.textTypo,styles.borderW]}>9</Text>
        <Text style={[styles.text3, styles.textLayout,styles.borderW]}>2</Text>
        <Text style={[styles.text4, styles.textLayout,styles.borderW]}>3</Text>
      </View>
    </View>
    <View style={[styles.iconBack, styles.textPosition]}>
      <View style={styles.rectangle} />
      <Image
        style={styles.vectorIcon}
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
      <Text style={[styles.next, styles.nextFlexBox]}>Next</Text>
    </View>
  </View>
  );
};


const styles = StyleSheet.create({
    childPosition: {
      top: 0,
      left: 0,
    },
    textPosition: {
      left: "8.67%",
      position: "absolute",
    },
    nextFlexBox: {
      textAlign: "left",
      position: "absolute",
    },
    codeLayout: {
      height: 103,
      width: 347,
      position: "absolute",
    },
    textTypo: {
      textAlign: "center",
      fontFamily: FontFamily.bentonSansMedium,
      lineHeight: 50,
      fontSize: FontSize.size_14xl,
      height: 48,
      color: Color.colorGray_100,
      top: 0,
      position: "absolute",
    },
    textLayout: {
      width: 18,
      textAlign: "center",
      fontFamily: FontFamily.bentonSansMedium,
      lineHeight: 50,
      fontSize: FontSize.size_14xl,
      height: 48,
      color: Color.colorGray_100,
      top: 0,
      position: "absolute",
    },
    ctaLayout: {
      height: 57,
      width: 157,
      position: "absolute",
    },
    patternIcon: {
      width: 450,
      left: 0,
      position: "absolute",
      height: 1000,
    },
    tittle: {
      marginTop: -64.5,
      fontSize: 26,
      lineHeight: 33,
      fontWeight:"700",
      color: Color.colorGray_100,
      textAlign: "left",
      fontFamily: FontFamily.bentonSansBold,
      left: "0%",
      top: "50%",
    },
    subTitle: {
      top: 85,
      fontSize: 14,
      lineHeight: 22,
      fontWeight:"500",
      fontFamily: FontFamily.bentonSansBook,
      color: "#000",
      width: 239,
      left: 0,
    },
    text: {
      marginTop: -303,
      width: "63.73%",
      right: "29.6%",
      height: 129,
      top: "50%",
      left: "6.67%",
    },
    codeBoxChild: {
      borderRadius: 22,
      backgroundColor: Color.colorWhite,
      shadowColor: "rgba(90, 108, 234, 0.07)",
      shadowOffset: {
        width: 12,
        height: 26,
      },
      shadowRadius: 50,
      elevation: 20,
      shadowOpacity: 1,
      left: 0,
      top: 0,
    },
   
    text1: {
      width:11,
      left: 0,
     
    },
    text2: {
      left: 82,
      width: 20,
    },
    text3: {
      left: 169,
    },
    text4: {
      left: 255,
    },
    codeNumber: {
      top: 28,
      left: 37,
      width: 273,
      height: 48,
      position: "absolute",
    },
    codeBox: {
      top: 270,
      left: 34,
    },
    rectangle: {
      height: "100%",
      top: "0%",
      right: "0%",
      bottom: "0%",
      backgroundColor: "#f9a84d",
      opacity: 0.1,
      borderRadius: Border.br_mini,
      left: "0%",
      position: "absolute",
      width: "100%",
    },
    vectorIcon: {
      height: "36.36%",
      width: "22.22%",
      top: "31.11%",
      right: "40%",
      bottom: "32.52%",
      left: "37.78%",
      maxWidth: "100%",
      maxHeight: "100%",
      position: "absolute",
      overflow: "hidden",
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
      fontSize: 16,
      lineHeight: 21,
      color: Color.colorWhite,
      fontFamily: FontFamily.bentonSansBold,
      textAlign: "left",
    },
    ctaButton: {
      top: 695,
      left: 109,
    },
    verificationCode: {
      borderRadius: 20,
      backgroundColor: "#fefeff",
      flex: 1,
      overflow: "hidden",
      height: 812,
      width: "100%",
    },
  });

export default VerificationCode;
