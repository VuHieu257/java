import * as React from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, Border, FontFamily } from "../screen/GlobalStyles";

const YourOrders = ({navigation}) => {
  return (
    <View style={styles.yourOrders}>
      <Image
        style={[styles.patternIcon, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/firstpage/pattern1.png")}
      />
      <View style={[styles.ctaCheckOutButton, styles.rectangleLayout]}>
        <LinearGradient
          style={[styles.rectangle, styles.rectangleLayout]}
          locations={[0, 1]}
          colors={["#53e88b", "#15be77"]}
        />
        <Text style={[styles.checkOut, styles.checkOutTypo]}>Check out</Text>
      </View>
      <View style={styles.menuList}>
        <View style={[styles.activeMenu, styles.activeLayout1]}>
          <View style={[styles.menu1Active, styles.activeLayout]}>
            <View style={styles.activeChildShadowBox} />
            <Text style={[styles.menuName, styles.menuNameClr]}>
              Spacy fresh crab
            </Text>
            <Text style={[styles.restaurantName, styles.namePosition]}>
              Waroenk kita
            </Text>
            <Text style={styles.pricePosition}>$ 35</Text>
            <Image
              style={[styles.menuPhotoIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/firstpage/photomenu.png")}
            />
            <View style={styles.ctaProccessButton}>
              <LinearGradient
                style={[styles.ctaProccessButtonChild, styles.ctaLayout]}
                locations={[0, 1]}
                colors={["#53e88b", "#15be77"]}
              />
              <Text style={[styles.proccess, styles.proccessTypo]}>
                Proccess
              </Text>
            </View>
          </View>
          <View style={[styles.menu2Active, styles.activeLayout]}>
            <View style={styles.activeChildShadowBox} />
            <Text style={[styles.menuName, styles.menuNameClr]}>
              Spacy fresh crab
            </Text>
            <Text style={[styles.restaurantName, styles.namePosition]}>
              Waroenk kita
            </Text>
            <Text style={styles.pricePosition}>$ 35</Text>
            <Image
              style={[styles.menuPhotoIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/firstpage/secondpage/menuphoto4.png")}
            />
            <View style={styles.ctaProccessButton}>
              <LinearGradient
                style={[styles.ctaProccessButtonChild, styles.ctaLayout]}
                locations={[0, 1]}
                colors={["#53e88b", "#15be77"]}
              />
              <Text style={[styles.proccess, styles.proccessTypo]}>
                Proccess
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.notActiveMenu, styles.activeLayout1]}>
          <View style={[styles.menu1Active, styles.activeLayout]}>
            <View style={styles.menu3NotActiveChild} />
            <Text style={[styles.menuName, styles.menuNameClr]}>
              Spacy fresh crab
            </Text>
            <Text style={[styles.restaurantName, styles.namePosition]}>
              Waroenk kita
            </Text>
            <Text style={[styles.price2, styles.pricePosition]}>$ 35</Text>
            <Image
              style={[styles.menuPhotoIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/firstpage/secondpage/menuphoto6.png")}
            />
            <View style={styles.ctaProccessButton}>
              <View style={[styles.ctaProccessButtonInner, styles.ctaLayout]} />
              <Text style={[styles.proccess, styles.proccessTypo]}>
                Proccess
              </Text>
            </View>
          </View>
          <View style={[styles.menu2Active, styles.activeLayout]}>
            <View style={styles.menu3NotActiveChild} />
            <Text style={[styles.menuName, styles.menuNameClr]}>
              Spacy fresh crab
            </Text>
            <Text style={[styles.restaurantName, styles.namePosition]}>
              Waroenk kita
            </Text>
            <Text style={[styles.price2, styles.pricePosition]}>$ 35</Text>
            <Image
              style={[styles.menuPhotoIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/firstpage/secondpage/menuphoto5.png")}
            />
            <View style={styles.ctaProccessButton}>
              <View style={[styles.ctaProccessButtonInner, styles.ctaLayout]} />
              <Text style={[styles.proccess, styles.proccessTypo]}>
                Proccess
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.search, styles.searchPosition]}>
        <View style={[styles.rectangle1, styles.rectangle1Position]} />
        <Image
          style={styles.iconSearch}
          contentFit="cover"
          source={require("../assets/firstpage/iconsearch.png")}
        />
        <Text style={[styles.searcSample, styles.proccessTypo]}>
          What do you want to order?
        </Text>
      </View>
      <Image
        style={[styles.filterIcon, styles.searchPosition]}
        contentFit="cover"
        source={require("../assets/firstpage/iconfilter.png")}
      />
      <Image
        style={[styles.iconNotification, styles.rectangle1Position]}
        contentFit="cover"
        source={require("../assets/firstpage/iconnotification.png")}
      />
      <View style={[styles.text, styles.textLayout]}>
        <Text style={[styles.tiiitleText, styles.textLayout]}>
          Find Your Favorite Food
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    left: 0,
    top: 0,
  },
  rectangleLayout: {
    height: 57,
    width: 325,
    position: "absolute",
  },
  checkOutTypo: {
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
  },
  activeLayout1: {
    height: 226,
    width: 347,
    left: 0,
    position: "absolute",
  },
  activeLayout: {
    height: 103,
    width: 347,
    left: 0,
    position: "absolute",
  },
  menuNameClr: {
    color: Color.colorGray_200,
    textAlign: "left",
  },
  namePosition: {
    left: "26.93%",
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ctaLayout: {
    borderRadius: Border.br_mid_5,
    height: 29,
    width: 79,
    left: 0,
    top: 0,
    position: "absolute",
  },
  proccessTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    letterSpacing: 1,
    position: "absolute",
  },
  pricePosition: {
    lineHeight: 25,
    fontSize: FontSize.size_lgi,
    left: "27.06%",
    marginTop: 13.5,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  searchPosition: {
    bottom: "74.14%",
    top: "19.7%",
    height: "6.16%",
    position: "absolute",
  },
  rectangle1Position: {
    right: "0%",
    position: "absolute",
  },
  textLayout: {
    width: 233,
    position: "absolute",
  },
  patternIcon: {
    width: 406,
    position: "absolute",
    height: 812,
  },
  rectangle: {
    backgroundColor: Color.linear,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  checkOut: {
    marginTop: -6.5,
    left: "38.46%",
    color: Color.colorGray_101,
    fontWeight:"700",
    fontFamily: FontFamily.bentonSansBold,
    top: "50%",
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  ctaCheckOutButton: {
    top: 743,
    left: 46,
  },
  activeChildShadowBox: {
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
    height: 103,
    width: 347,
    left: 0,
    top: 0,
    position: "absolute",
  },
  menuName: {
    marginTop: -32.5,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    fontFamily: FontFamily.bentonSansMedium,
    left: "26.93%",
    top: "50%",
    position: "absolute",
  },
  restaurantName: {
    marginTop: -8.5,
    fontFamily: FontFamily.bentonSansRegular,
    color: Color.colorDarkslategray,
    opacity: 0.3,
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
  },
  menuPhotoIcon: {
    borderRadius: Border.br_base,
    left: "4.03%",
    bottom: "19.42%",
    right: "78.1%",
    top: "20.39%",
    width: "17.87%",
    height: "60.19%",
    maxWidth: "100%",
    position: "absolute",
  },
  ctaProccessButtonChild: {
    backgroundColor: Color.linear,
  },
  proccess: {
    top: 5,
    left: 8,
    color: Color.colorWhite,
    fontFamily: FontFamily.bentonSansMedium,
  },
  ctaProccessButton: {
    top: 37,
    left: 245,
    height: 29,
    width: 79,
    position: "absolute",
  },
  menu1Active: {
    top: 0,
  },
  menuPhotoIcon1: {
    borderRadius: Border.br_3xs,
    left: "4.03%",
    bottom: "19.42%",
    right: "78.1%",
    top: "20.39%",
    width: "17.87%",
    height: "60.19%",
    maxWidth: "100%",
    position: "absolute",
  },
  menu2Active: {
    top: 123,
  },
  activeMenu: {
    top: 0,
  },
  menu3NotActiveChild: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xl,
    height: 103,
    width: 347,
    left: 0,
    top: 0,
    position: "absolute",
  },
  price2: {
    color: Color.colorSilver,
  },
  ctaProccessButtonInner: {
    backgroundColor: Color.colorGainsboro,
  },
  notActiveMenu: {
    top: 246,
  },
  menuList: {
    top: 245,
    left: 34,
    height: 472,
    width: 347,
    position: "absolute",
  },
  rectangle1: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f9a84d",
    opacity: 0.1,
    borderRadius: Border.br_mini,
    width: "100%",
  },
  iconSearch: {
    top: 13,
    left: 18,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  searcSample: {
    top: 19,
    left: 61,
    fontFamily: FontFamily.robotoRegular,
    color: "#da6317",
    opacity: 0.4,
  },
  search: {
    width: "71.2%",
    right: "22.13%",
    left: "6.67%",
  },
  filterIcon: {
    width: "13.07%",
    right: "6.67%",
    left: "80.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconNotification: {
    height: "17.86%",
    width: "32.8%",
    top: "6.03%",
    bottom: "76.11%",
    left: "67.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tiiitleText: {
    fontSize: 31,
    lineHeight: 41,
    color: Color.colorGray_200,
      textAlign: "left",
    fontWeight:"bold",
    fontFamily: FontFamily.bentonSansBold,
    left: 0,
    top: 0,
  },
  text: {
    top: 60,
    left: 31,
    height: 82,
  },
  yourOrders: {
    borderRadius: 20,
    backgroundColor: Color.colorGray_101,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default YourOrders;
