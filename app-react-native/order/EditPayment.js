import * as React from "react";
import { StyleSheet, View, Text ,Image} from "react-native";
import { Border, Color, FontFamily, FontSize } from "../screen/GlobalStyles";

const EditPayments = ({navigation}) => {
  return (
    <View style={styles.editPayments}>
      <Image
        style={styles.patternIcon}
        contentFit="cover"
        source={require("../assets/firstpage/pattern1.png")}
      />
      <View style={[styles.visaPayment, styles.paymentLayout]}>
        <View style={[styles.visaPaymentChild, styles.paymentChildLayout]} />
        <Image
          style={styles.visaLogoIcon}
          contentFit="cover"
          source={require("../assets/firstpage/visa.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>2121 6352 8465 ****</Text>
      </View>
      <View style={[styles.payoonerPayment, styles.paymentLayout]}>
        <View style={[styles.visaPaymentChild, styles.paymentChildLayout]} />
        <Image
          style={styles.payoneerLogoIcon}
          contentFit="cover"
          source={require("../assets/firstpage/MoMo_Logo_n.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>2121 6352 8465 ****</Text>
      </View>
      <View style={[styles.paypalPaymentActive, styles.paymentLayout]}>
        <View
          style={[styles.paypalPaymentActiveChild, styles.paymentChildLayout]}
        />
        <Image
          style={styles.paypalLogoIcon}
          contentFit="cover"
          source={require("../assets/firstpage/paypal.png")}
        />
        <Text style={[styles.text2, styles.text2FlexBox]}>
          2121 6352 8465 ****
        </Text>
      </View>
      <View style={[styles.group, styles.groupPosition]}>
        <View style={styles.rectangle} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/firstpage/vector.png")}
        />
      </View>
      <Text style={[styles.tittle, styles.groupPosition]}>{`Payment `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentLayout: {
    height: 73,
    width: 355,
    left: 20,
    position: "absolute",
  },
  paymentChildLayout: {
    borderRadius: Border.br_3xl,
    height: 73,
    width: 355,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    opacity: 0.3,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bentonSansRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  text2FlexBox: {
    textAlign: "left",
    top: "50%",
  },
  groupPosition: {
    left: "6.67%",
    position: "absolute",
  },
  patternIcon: {
    width: 407,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  visaPaymentChild: {
    backgroundColor: Color.colorWhitesmoke,
  },
  visaLogoIcon: {
    top: 6,
    left: 14,
    width: 60,
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    marginTop: -6.5,
    left: "50.15%",
  },
  visaPayment: {
    top: 265,
  },
  payoneerLogoIcon: {
    top: 20,
    left: 19,
    width: 83,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    marginTop: -9.5,
    left: "50.45%",
  },
  payoonerPayment: {
    top: 358,
  },
  paypalPaymentActiveChild: {
    backgroundColor: "#fff",
    shadowColor: "rgba(90, 108, 234, 0.07)",
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
  },
  paypalLogoIcon: {
    top: 22,
    width: 86,
    height: 23,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  text2: {
    marginTop: -7.5,
    left: "51.04%",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bentonSansRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  paypalPaymentActive: {
    top: 175,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#f9a84d",
    opacity: 0.1,
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
  },
  tittle: {
    marginTop: -304,
    fontSize: 25,
      lineHeight: 33,
    fontWeight:"bold",
    fontFamily: FontFamily.bentonSansBold,
    color: "#09051c",
    textAlign: "left",
    top: "50%",
    left: "6.67%",
  },
  editPayments: {
    borderRadius: 20,
    backgroundColor: "#fefeff",
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default EditPayments;
