import * as React from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../screen/GlobalStyles";

const SetLocation = ({navigation}) => {
  return (
    <View style={styles.setLocation}>
      <Image
        style={[styles.mapsIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/firstpage/secondpage/Maps.png")}
      />
      <Image
        style={styles.pinRadarIcon}
        contentFit="cover"
        source={require("../assets/firstpage/secondpage/pin-radar.png")}
      />
      <View style={[styles.location, styles.frameLayout]}>
        <View style={[styles.frame, styles.childShadowBox]} />
        <View style={[styles.ctaSetLocationButton, styles.ctaLayout]}>
          <LinearGradient
            style={[styles.ctaSetLocationButtonChild, styles.ctaLayout]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          />
          <Text style={[styles.call, styles.locationFlexBox]}>
            Set Location
          </Text>
        </View>
        <Text style={[styles.location1, styles.locationFlexBox]}>
          Your Location
        </Text>
        <View style={styles.location2}>
          <Text style={[styles.address, styles.locationFlexBox]}>
            4517 Washington Ave. Manchester, Kentucky 39495
          </Text>
          <Image
            style={[styles.iconLocation, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/firstpage/secondpage/PinLogo.png")}
          />
        </View>
      </View>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.searchLayout]} />
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/iconsearch.png")}
        />
        <Text style={[styles.findYourLocation, styles.locationFlexBox]}>
          FInd Your Location
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 181,
    width: 395,
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
    shadowColor: "rgba(90, 108, 234, 0.07)",
    left: 0,
    top: 0,
  },
  ctaLayout: {
    height: 57,
    width: 362,
    position: "absolute",
  },
  locationFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  searchLayout: {
    height: 69,
    width: 372,
    position: "absolute",
  },
  mapsIcon: {
    width: 500,
    height: 1000,
  },
  pinRadarIcon: {
    top: 224,
    left: 72,
    width: 216,
    height: 216,
    position: "absolute",
  },
  frame: {
    borderRadius: Border.br_3xl,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    backgroundColor: Color.colorWhite,
    height: 181,
    width: 382,
    position: "absolute",
  },
  ctaSetLocationButtonChild: {
    borderRadius: 15,
    backgroundColor: Color.linear,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    left: 0,
    top: 0,
  },
  call: {
    marginTop: -7.5,
    width: "58.26%",
    left: "36.02%",
    fontWeight: "500",
    fontFamily: FontFamily.rubikMedium,
    color: "#f6fafe",
    height: 28,
    letterSpacing: 1,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: "50%",
  },
  ctaSetLocationButton: {
    top: 114,
    left: 10,
  },
  location1: {
    marginTop: -66.5,
    left: "2.92%",
    fontFamily: FontFamily.bentonSansRegular,
    color: "#3b3b3b",
    opacity: 0.3,
    letterSpacing: 1,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: "50%",
  },
  address: {
    marginTop: -20,
    width: "84.49%",
    left: "15.51%",
    fontSize: 15,
    lineHeight: 20,
    fontFamily: FontFamily.bentonSansMedium,
    color: "#09051c",
    top: "50%",
  },
  iconLocation: {
    width: 33,
    height: 33,
  },
  location2: {
    marginTop: -36.5,
    width: "88.6%",
    right: "8.19%",
    left: "3.22%",
    height: 40,
    top: "50%",
    position: "absolute",
  },
  location: {
    top: 656,
    left: 17,
  },
  searchChild: {
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    left: 0,
    top: 0,
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhite,
  },
  searchIcon: {
    top: 23,
    left: 28,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  findYourLocation: {
    top: 29,
    left: 71,
    fontSize: 12,
    fontFamily: FontFamily.robotoRegular,
    color: "#da6317",
    opacity: 0.4,
    letterSpacing: 1,
    textAlign: "left",
  },
  search: {
    top: 41,
    left: 27,
  },
  setLocation: {
    borderRadius: 33,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default SetLocation;
