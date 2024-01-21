import * as React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../screen/GlobalStyles";

const Payments = ({navigation}) => {
  return (
    <View style={styles.payments}>
      <Image
        style={[styles.patternIcon, styles.patternIconPosition]}
        contentFit="cover"
        source={require("../assets/firstpage/pattern1.png")}
      />
      <View style={[styles.text, styles.textLayout]}>
        <Text style={styles.tittle}>Confirm Order</Text>
      </View>
      <View style={[styles.deliverLocation, styles.deliverLayout]}>
        <View style={[styles.deliverLocationChild, styles.childShadowBox]} />
        <Text style={styles.address}>
          4517 Washington Ave. Manchester, Kentucky 39495
        </Text>
        <Text style={[styles.deliverTo, styles.deliverToPosition]}>
          Deliver To
        </Text>
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
        <Image
          style={[styles.iconLocation, styles.textLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/PinLogo.png")}
        />
      </View>
      <View style={[styles.paymentMethod, styles.paymentLayout]}>
        <View style={[styles.paymentMethodChild, styles.paymentLayout]} />
        <Image
          style={styles.paypalLogoIcon}
          contentFit="cover"
          source={require("../assets/firstpage/paypal.png")}
        />
        <Text style={styles.text1}>2121 6352 8465 ****</Text>
        <Text style={[styles.paymentMethod1, styles.edit1Position]}>
          Payment Method
        </Text>
        <Text style={[styles.edit1, styles.edit1Position]}>Edit</Text>
      </View>
      <View style={[styles.priceInfo, styles.priceLayout]}>
        <LinearGradient
          style={[styles.priceInfoChild, styles.priceLayout]}
          locations={[0, 1]}
          colors={["#53e88b", "#15be77"]}
        />
        <Image
          style={[styles.patternIcon1, styles.priceLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/pattern1.png")}
        />
        <View style={styles.text2}>
          <Text style={[styles.discount, styles.discountPosition]}>
            Discount
          </Text>
          <Text style={[styles.deliveryCharge, styles.deliveryPosition]}>
            Delivery Charge
          </Text>
          <Text style={[styles.subTotal, styles.subPosition]}>Sub-Total</Text>
          <Text style={[styles.discountPrice, styles.discountPosition]}>
            20 $
          </Text>
          <Text style={[styles.deliveryChargePrice, styles.deliveryPosition]}>
            10 $
          </Text>
          <Text style={[styles.subTotalPrice, styles.subPosition]}>120 $</Text>
          <Text style={[styles.total, styles.totalTypo]}>Total</Text>
          <Text style={[styles.totalPrice, styles.totalTypo]}>150$</Text>
        </View>
        <View style={[styles.ctaPlaceOrderButton, styles.rectangleLayout1]}>
          <View style={[styles.rectangle, styles.rectangleLayout]} />
          <Text style={styles.checkOut}>Place My Order</Text>
        </View>
      </View>
      <View style={styles.group}>
        <View style={[styles.rectangle1, styles.rectangleLayout]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/firstpage/vector.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  patternIconPosition: {
    left: 0,
    top: 0,
  },
  textLayout: {
    height: 33,
    position: "absolute",
  },
  deliverLayout: {
    height: 108,
    width: 335,
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
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  deliverToPosition: {
    opacity: 0.3,
    left: "4.58%",
    color: Color.colorDarkslategray,
  },
  editTypo: {
    fontFamily: FontFamily.bentonSansRegular,
    letterSpacing: 1,
      fontSize: FontSize.size_sm,
      color:"#32d280",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  paymentLayout: {
    height: 100,
    width: 355,
    position: "absolute",
  },
  edit1Position: {
    marginTop: -30,
    fontFamily: FontFamily.bentonSansRegular,
    letterSpacing: 1,
      fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  priceLayout: {
    height: 206,
    position: "absolute",
  },
  discountPosition: {
    color: Color.colorGray_100,
    marginTop: -5.5,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  deliveryPosition: {
    marginTop: -26.5,
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  subPosition: {
    marginTop: -47.5,
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  totalTypo: {
    fontSize: FontSize.size_lg,
    marginTop: 29.5,
    color: Color.colorGray_100,
    letterSpacing: 1,
    textAlign: "left",
    fontFamily: FontFamily.bentonSansBold,
    top: "50%",
    position: "absolute",
  },
  rectangleLayout1: {
    height: 57,
    width: 325,
  },
  rectangleLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  patternIcon: {
    width: 375,
    position: "absolute",
    height: 812,
  },
  tittle: {
    marginTop: -16.5,
    fontSize: 25,
    lineHeight: 33,
      textAlign: "left",
    fontWeight:"bold",
    color: Color.colorGray_201,
    fontFamily: FontFamily.bentonSansBold,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -304,
    width: "46.93%",
    right: "46.4%",
    left: "6.67%",
    top: "50%",
  },
  deliverLocationChild: {
    backgroundColor: Color.colorWhite,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    height: 108,
    width: 355,
    position: "absolute",
  },
  address: {
    marginTop: -7,
    width: "85.42%",
    left: "17.91%",
    fontSize: 15,
    lineHeight: 20,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    color: Color.colorGray_200,
    top: "50%",
    position: "absolute",
  },
  deliverTo: {
    marginTop: -35,
    fontFamily: FontFamily.bentonSansRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  edit: {
    marginTop: -34,
    left: "89.97%",
  },
  iconLocation: {
    top: 47,
    left: 13,
    width: 33,
  },
  deliverLocation: {
    top: 175,
    left: 20,
  },
  paymentMethodChild: {
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  paypalLogoIcon: {
    top: 54,
    width: 86,
    height: 23,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    marginTop: 11,
    left: "51.04%",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bentonSansRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  paymentMethod1: {
    opacity: 0.3,
    left: "4.58%",
    color: Color.colorDarkslategray,
  },
  edit1: {
      left: "85.97%",
    color:"#32d280",
      
  },
  paymentMethod: {
    top: 303,
    left: 20,
  },
  priceInfoChild: {
    backgroundColor: "transparent",
    width: 347,
    height: 206,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  patternIcon1: {
    width: 346,
    left: 0,
    top: 0,
  },
  discount: {
    left: "0%",
  },
  deliveryCharge: {
    left: "0%",
  },
  subTotal: {
    left: "0%",
  },
  discountPrice: {
    left: "88.47%",
  },
  deliveryChargePrice: {
    left: "89.49%",
  },
  subTotalPrice: {
    left: "86.44%",
  },
  total: {
    left: "0%",
  },
  totalPrice: {
    left: "84.41%",
  },
  text2: {
    marginTop: -83,
    width: "85.01%",
    right: "6.63%",
    left: "8.36%",
    height: 95,
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    height: 57,
    width: 325,
    left: 0,
    top: 0,
    backgroundColor: Color.colorGray_101,
  },
  checkOut: {
    marginTop: -6.5,
    left: "32.62%",
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.bentonSansBold,
    top: "50%",
    position: "absolute",
  },
  ctaPlaceOrderButton: {
    top: 137,
    left: 12,
    position: "absolute",
  },
  priceInfo: {
    top: 610,
    left: 34,
    width: 347,
    height: 206,
  },
  rectangle1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: "#f9a84d",
    opacity: 0.1,
    left: "0%",
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
  payments: {
    borderRadius: 20,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_101,
  },
});

export default Payments;
