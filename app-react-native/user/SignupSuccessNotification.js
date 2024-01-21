
import * as React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily } from "../screen/GlobalStyles";

const SignupSuccessNotification = ({navigation}) => {
  return (
    <View style={styles.ForgotSuccessNotification}>
    <Image
      style={[styles.patternIcon, styles.iconLayout]}
      contentFit="cover"
      source={require("../assets/firstpage/Pattern11.png")}
    />
    <View style={styles.text}>
      <Text style={[styles.ForgotDetails, styles.ForgotTypo]}>
      Password reset succesful
      </Text>
      <Text style={[styles.ForgotCompleted, styles.ForgotTypo]}>Congrats!</Text>
    </View>
    <View style={styles.ctaTryForgot}>
      <LinearGradient
        style={[styles.ctaTryForgotChild, styles.patternIconPosition]}
        locations={[0, 1]}
        colors={["#53e88b", "#15be77"]}
      />
      <Text style={styles.tryForgot}>Back</Text>
    </View>
    <Image
      style={[styles.illustrationIcon, styles.iconLayout]}
      contentFit="cover"
      source={require("../assets/firstpage/illustration.png")}
    />
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
  ForgotTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bentonSansBold,
    position: "absolute",
  },
  patternIconPosition: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  patternIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
  },
  ForgotDetails: {
    top: "62.96%",
    fontSize: 23,
    lineHeight: 30,
    color: "#09051c",
    left: "10%",
    fontWeight:"600"
  },
  ForgotCompleted: {
    left: "26.92%",
    fontSize: 30,
    fontWeight:"700",
    lineHeight: 39,
    top: "0%",
    textAlign: "center",
  },
  text: {
    height: "9.98%",
    width: "83.2%",
    top: "51.97%",
    right: "8.53%",
    bottom: "38.05%",
    left: "13.27%",
    position: "absolute",
    
  },
  ctaTryForgotChild: {
    borderRadius: 15,
    backgroundColor: Color.linear,
    left: "0%",
    position: "absolute",
  },
  tryForgot: {
    top: "31.58%",
    left: "35.75%",
    fontSize: 18,
    lineHeight: 21,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.bentonSansBold,
    fontWeight:"600",
    position: "absolute",
  },
  ctaTryForgot: {
    height: "7.02%",
    width: "35.87%",
    top: "85.59%",
    right: "29.07%",
    bottom: "7.39%",
    left: "32%",
    position: "absolute",
  },
  illustrationIcon: {
    height: "19.95%",
    width: "40.87%",
    top: "27.96%",
    right: "26.93%",
    bottom: "52.09%",
    left: "31.2%",
  },
  ForgotSuccessNotification: {
    borderRadius: 20,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});



export default SignupSuccessNotification;
