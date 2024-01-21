import * as React from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { Color, Border, FontFamily, FontSize } from "../screen/GlobalStyles";

const EditLocation = ({navigation}) => {
  return (
    <View style={styles.editLocation}>
      <Image
        style={styles.patternIcon}
        contentFit="cover"
        source={require("../assets/firstpage/pattern1.png")}
      />
      <View style={styles.group}>
        <View style={styles.rectangle} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/firstpage/vector.png")}
        />
      </View>
      <View style={[styles.text, styles.textLayout]}>
        <Text style={styles.orderDetails}>Shipping</Text>
      </View>
      <View style={[styles.orderLocation, styles.orderLayout]}>
        <View
          style={[styles.orderLocationChild, styles.locationChildShadowBox]}
        />
        <Text style={[styles.address, styles.addressTypo]}>
          8502 Preston Rd. Inglewood, Maine 98380
        </Text>
        <Text style={[styles.orderLocation1, styles.deliverToPosition]}>
          Order Location
        </Text>
        <Image
          style={[styles.iconLocation, styles.textLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/PinLogo.png")}
        />
      </View>
      <View style={[styles.deliverLocation, styles.deliverLayout]}>
        <View style={[styles.deliverLocationChild, styles.deliverLayout]} />
        <Text style={[styles.address1, styles.addressTypo]}>
          4517 Washington Ave. Manchester, Kentucky 39495
        </Text>
        <Text style={[styles.deliverTo, styles.deliverToPosition]}>
          Deliver To
        </Text>
        <Text style={styles.setLocation}>set location</Text>
        <Image
          style={[styles.iconLocation, styles.textLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/PinLogo.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    height: 33,
    position: "absolute",
  },
  orderLayout: {
    height: 107,
    width: 335,
    position: "absolute",
  },
  locationChildShadowBox: {
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  addressTypo: {
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    left: "17.91%",
    textAlign: "left",
    color: Color.colorGray_100,
    top: "50%",
    position: "absolute",
  },
  deliverToPosition: {
    opacity: 0.3,
    color: Color.colorDarkslategray,
    left: "5.58%",
    fontFamily: FontFamily.bentonSansRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  deliverLayout: {
    height: 141,
    width: 335,
    position: "absolute",
  },
  patternIcon: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: 15,
    backgroundColor: "#f9a84d",
    opacity: 0.1,
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
  group: {
    height: "5.54%",
    width: "12%",
    top: "4.68%",
    right: "81.33%",
    bottom: "89.78%",
    left: "6.67%",
    position: "absolute",
  },
  orderDetails: {
    marginTop: -16.5,
    fontSize: 25,
      lineHeight: 33,
    fontWeight:"bold",
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    color: Color.colorGray_100,
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  text: {
    marginTop: -304,
    width: "29.33%",
    right: "64%",
    top: "50%",
    height: 33,
    left: "6.67%",
  },
  orderLocationChild: {
    height: 107,
    width: 335,
    position: "absolute",
  },
  address: {
    marginTop: -6.5,
    width: "74.63%",
  },
  orderLocation1: {
    marginTop: -36.5,
  },
  iconLocation: {
    top: 47,
    left: 13,
    width: 33,
  },
  orderLocation: {
    top: 175,
    left: 20,
  },
  deliverLocationChild: {
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  address1: {
    marginTop: -23.5,
    width: "76.42%",
  },
  deliverTo: {
    marginTop: -53.5,
  },
  setLocation: {
    marginTop: 36.5,
    fontFamily: FontFamily.bentonSansRegular,
    letterSpacing: 1,
      fontSize: FontSize.size_sm,
      color:"#32d280",
    left: "17.91%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  deliverLocation: {
    top: 302,
    left: 20,
  },
  editLocation: {
    borderRadius: 20,
    backgroundColor: "#fefeff",
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default EditLocation;
