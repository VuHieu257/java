import * as React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../screen/GlobalStyles";

const ResetPassword = ({navigation}) => {
  return (
    <View style={styles.password}>
    <Image
      style={[styles.patternIcon, styles.patternIconPosition]}
      contentFit="cover"
      source={require("../assets/firstpage/Pattern11.png")}
    />
    <View style={[styles.text, styles.textPosition]}>
      <Text style={[styles.tittle, styles.tittleFlexBox]}>
        Reset your password here
      </Text>
      <Text style={[styles.subTittle, styles.tittleFlexBox]}>
        Select which contact details should we use to reset your password
      </Text>
    </View>
    <View style={[styles.newPasswordForm, styles.passwordLayout]}>
      <View style={styles.passwordChildShadowBox} />
      <Text style={[styles.newPassword, styles.tittleFlexBox]}>
        New Password
      </Text>
      <Image
        style={[styles.eyeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/eyeicon.png")}
      />
    </View>
    <View style={[styles.confirmPasswordForm, styles.passwordLayout]}>
      <View style={styles.passwordChildShadowBox} />
      <Text style={[styles.newPassword, styles.tittleFlexBox]}>
        Confirm Password
      </Text>
      <Image
        style={[styles.eyeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/eyeicon1.png")}
      />
    </View>
    <View style={[styles.iconBack, styles.textPosition]}>
      <View style={styles.rectangle} />
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
      <Text style={[styles.next, styles.tittleFlexBox]}>Next</Text>
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
      left: "8.13%",
      position: "absolute",
    },
    tittleFlexBox: {
      textAlign: "left",
      position: "absolute",
    },
    passwordLayout: {
      height: 61,
      width: 347,
      left: 34,
      position: "absolute",
    },
    iconLayout: {
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    ctaLayout: {
      height: 57,
      width: 157,
      position: "absolute",
    },
    patternIcon: {
      width: 407,
      left: 0,
      position: "absolute",
      height: 812,
      top: 0,
    },
    tittle: {
      marginTop: -60,
      width: "99.24%",
      left: "0.76%",
      fontSize: 27,
      lineHeight: 33,
      color: "#09051c",
      fontWeight:"bold",
      fontFamily: FontFamily.bentonSansBold,
      textAlign: "left",
      top: "50%",
    },
    subTittle: {
      top: 76,
      fontSize: 14,
      lineHeight: 22,
      fontFamily: FontFamily.bentonSansBook,
      color: "#000",
      width: 224,
      left: 0,
    },
    text: {
      marginTop: -303,
      width: "70.13%",
      right: "23.73%",
      height: 120,
      top: "50%",
    },
    passwordChildShadowBox: {
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
      height: 61,
      width: 347,
      left: 0,
      top: 0,
      position: "absolute",
    },
    newPassword: {
      top: 24,
      left: 18,
      fontSize: FontSize.size_sm,
      letterSpacing: 1,
      fontFamily: FontFamily.bentonSansRegular,
      color: Color.colorDarkslategray,
      opacity: 0.3,
    },
    eyeIcon: {
      height: "24.59%",
      width: "6.34%",
      top: "37.7%",
      right: "5.19%",
      bottom: "37.7%",
      left: "88.47%",
    },
    newPasswordForm: {
      top: 263,
    },
    confirmPasswordForm: {
      top: 344,
    },
    rectangle: {
      height: "100%",
      top: "0%",
      right: "0%",
      bottom: "0%",
      left: "0%",
      backgroundColor: "#f9a84d",
      opacity: 0.1,
      borderRadius: Border.br_mini,
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
    },
    iconBack: {
      height: "5.54%",
      width: "12%",
      top: "4.68%",
      right: "81.87%",
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
      fontSize: FontSize.bodyNormalRegular_size,
      lineHeight: 21,
      color: Color.colorWhite,
      fontFamily: FontFamily.bentonSansBold,
      textAlign: "left",
    },
    ctaButton: {
      top: 695,
      left: 129,
    },
    password: {
      borderRadius: 20,
      backgroundColor: "#fefeff",
      flex: 1,
      overflow: "hidden",
      height: 812,
      width: "100%",
    },
  });

export default ResetPassword;
