import * as React from "react";
import { Text, StyleSheet, View,Image, TouchableOpacity } from "react-native";
// import { FontFamily, Color } from "./GlobalStyles";
import { LinearGradient } from 'expo-linear-gradient';

const StartScreen1 = ({ navigation }) => {
  return (
    <View style={styles.onboarding}>
    <View style={styles.text}>
      <Text style={[styles.subTiitle, styles.tiitleFlexBox]}>
          {/* Find your Comfort Food here */}
          Tìm đồ ăn & đồ uống ngay tại đây 
      </Text>
      <Text style={[styles.tiitle, styles.tiitleFlexBox]}>
          {/* Here You Can find a chef or dish for every taste and color. Enjoy! */}
          Bạn có thể tìm được các món yêu thích ngay tại đây.Hãy Thử ngay nào 
      </Text>
    </View>
      <TouchableOpacity style={[styles.ctaButton, styles.ctaLayout]}
      onPress={() => navigation.navigate('SignUp')}
      >
      <LinearGradient
      style={[styles.ctaButton1, styles.ctaLayout]}
      locations={[0, 1]}
          colors={["#53e88b", "#15be77"]}
          
      // colors={["#12b818", "#42e3a5"]}
    />
        <Text style={styles.ctaButtonText}
        >Next</Text>
  </TouchableOpacity>
  <Image
    style={styles.illustartionIcon}
    contentFit="cover"
    source={require("../assets/firstpage/Illustartion.png")}
  />
</View>
  );
};

const styles = StyleSheet.create({
    tiitleFlexBox: {
      textAlign: "center",
      position: "absolute",
    },
    ctaLayout: {
      height: 57,
      width: 157,
      position: "absolute",
    },
    subTiitle: {
      left: 5,
      fontSize: 30,
      fontWeight:'bold',
      lineHeight: 29,
      color: "#1a104a",
      width: 280,
      // fontFamily: FontFamily.bentonSansBold,
      top: 0,
    },
    tiitle: {
      top: 78,
      fontSize: 13,
      fontWeight:'600',
      lineHeight: 22,
      // fontFamily: FontFamily.bentonSansBook,
      color: "#2b62a6",
      left: 6,
      width: 274,
    },
    text: {
      top: 500,
      left: 66,
      height: 122,
      width: 244,
      position: "absolute",
    },
    ctaButton1: {
      borderRadius: 15,
      // backgroundColor: Color.linear,
      left: 0,
      top: 0,
    },
    ctaButtonText: {
      top: 18,
      left: 60,
      fontSize: 18,
      lineHeight: 21,
      color: "white",
      textAlign: "left",
      // fontFamily: FontFamily.bentonSansBold,
      position: "absolute",
    },
    ctaButton: {
      top: 730,
      left: 135,
    },
    illustartionIcon: {
      height: "53.48%",
      width: "100%",
      top: "5%",
      // right: "-8.93%",
      bottom: "39.53%",
      left: "0%",
      maxWidth: "100%",
      maxHeight: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    onboarding: {
      borderRadius: 20,
      backgroundColor: "#fff",
      flex: 1,
      width: "100%",
      height: 812,
      overflow: "hidden",
    },
  });

export default StartScreen1;
