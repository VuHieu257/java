import * as React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../screen/GlobalStyles";

const ExploreMenu = ({navigation}) => {
  return (
    <View style={styles.exploreMenu}>
    <Image
      style={[styles.patternIcon, styles.frame2Position]}
      contentFit="cover"
      source={require("../assets/firstpage/Pattern11.png")}
    />
    <View style={styles.menuList}>
      <View style={[styles.menu3, styles.menuLayout3]}>
        <View style={[styles.menu3Child, styles.frameChildShadowBox]} />
        <Text style={[styles.menuName, styles.namePosition]}>
          Green Noddle
        </Text>
        <Text style={[styles.price, styles.priceTypo]}>$15</Text>
        <Text style={[styles.restaurantName, styles.namePosition]}>
          Noodle Home
        </Text>
        <Image
          style={styles.photoMenuIcon}
          contentFit="cover"
          source={require("../assets/firstpage/photomenu.png")}
        />
      </View>
      <View style={[styles.menu2, styles.menuLayout3]}>
        <View style={[styles.frame, styles.frameChildShadowBox]} />
        <Text style={[styles.menuName, styles.namePosition]}>
          Fruit Salad
        </Text>
        <Text style={[styles.price1, styles.priceTypo]}>$5</Text>
        <Text style={[styles.restaurantName, styles.namePosition]}>
          Wijie Resto
        </Text>
        <Image
          style={styles.photoMenuIcon}
          contentFit="cover"
          source={require("../assets/firstpage/photomenu1.png")}
        />
      </View>
      <View style={[styles.menu1, styles.menuLayout3]}>
        <View style={[styles.frame1, styles.frameChildShadowBox]} />
        <Text style={[styles.menuName, styles.namePosition]}>
          Herbal Pancake
        </Text>
        <Text style={[styles.price2, styles.priceTypo]}>$7</Text>
        <Text style={[styles.restaurantName, styles.namePosition]}>
          Warung Herbal
        </Text>
        <Image
          style={styles.photoMenuIcon}
          contentFit="cover"
          source={require("../assets/firstpage/photomenu2.png")}
        />
      </View>
    </View>
    <View style={[styles.search, styles.searchPosition]}>
      <View style={[styles.rectangle, styles.rectanglePosition]} />
      <Image
        style={styles.iconSearch}
        contentFit="cover"
        source={require("../assets/firstpage/iconsearch.png")}
      />
      <Text style={[styles.searcSample, styles.homeTypo]}>
        What do you want to order?
      </Text>
    </View>
    <Image
      style={[styles.filterIcon, styles.iconLayout]}
      contentFit="cover"
      source={require("../assets/firstpage/iconfilter.png")}
    />
    <Image
      style={[styles.iconNotification, styles.iconLayout]}
      contentFit="cover"
      source={require("../assets/firstpage/iconnotification.png")}
    />
    <View style={[styles.text, styles.textLayout]}>
      <Text style={[styles.tiiitleText, styles.textLayout]}>
      Find something you like
      </Text>
      <Text style={[styles.popularMenu, styles.tiiitleTextTypo]}>
        Popular Menu
      </Text>
    </View>
    <View style={[styles.menuBar, styles.menuLayout]}>
      <View style={[styles.menuBarChild, styles.menuLayout]} />
      <View style={[styles.iconHomeActive, styles.frame2Layout]}>
        <LinearGradient
          style={[styles.frame2, styles.frame2Layout]}
          locations={[0, 1]}
          colors={["#53e88b", "#15be77"]}
        />
        <Image
          style={[styles.iconlybulkhome, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/iconlybulkhome.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      </View>
      <Image
        style={[styles.iconlybulkchat, styles.iconProfileLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/iconlybulkchat.png")}
      />
      <Image
        style={[styles.menuBarItem, styles.menuBarItemLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/ellipse164.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>7</Text>
      <View style={styles.iconCart}>
        <Image
          style={[styles.iconlybulkbuy, styles.iconProfileLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/iconlybulkbuy.png")}
        />
        <View style={styles.notificationCart}>
          <Image
            style={[styles.notificationCartChild, styles.menuBarItemLayout]}
            contentFit="cover"
            source={require("../assets/firstpage/ellipse163.png")}
          />
          <Text style={[styles.text2, styles.textTypo]}>7</Text>
        </View>
      </View>
      <Image
        style={[styles.iconProfile, styles.iconProfileLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/iconlybulkprofile.png")}
      />
    </View>
  </View>
  );
};
const styles = StyleSheet.create({
  frame2Position: {
    left: 0,
    top: 0,
  },
  menuLayout3: {
    height: 87,
    width: 323,
    left: 0,
    position: "absolute",
  },
  frameChildShadowBox: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  namePosition: {
    textAlign: "left",
    left: "29.41%",
    top: "50%",
    position: "absolute",
  },
  priceTypo: {
    color: Color.colorOrange,
    lineHeight: 29,
    fontSize: FontSize.size_3xl,
    marginTop: -14.5,
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  searchPosition: {
    bottom: "74.14%",
    top: "19.7%",
    height: "6.16%",
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
  },
  homeTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textLayout: {
    width: 233,
    position: "absolute",
  },
  tiiitleTextTypo: {
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    color: Color.colorGray,
    left: 0,
  },
  menuLayout: {
    height: 74,
    width: 355,
    position: "absolute",
  },
  frame2Layout: {
    height: 44,
    width: 105,
    position: "absolute",
  },
  iconProfileLayout: {
    opacity: 0.5,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  menuBarItemLayout: {
    height: 13,
    width: 13,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    lineHeight: 12,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    position: "absolute",
  },
  patternIcon: {
    width: 408,
    position: "absolute",
    height: 452,
  },
  menu3Child: {
    shadowColor: "rgba(90, 108, 234, 0.07)",
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: Border.br_3xl,
    height: 87,
    width: 333,
    position: "absolute",
  },
  menuName: {
    marginTop: -18.5,
    color: Color.colorGray,
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
  },
  price: {
    left: "81.73%",
  },
  restaurantName: {
    marginTop: 5.5,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansRegular,
    color: Color.colorDarkslategray,
    opacity: 0.3,
    letterSpacing: 1,
  },
  photoMenuIcon: {
    top: 11,
    borderRadius: Border.br_3xs,
    width: 64,
    height: 64,
    left: 10,
    position: "absolute",
  },
  menu3: {
    top: 214,
  },
  frame: {
    shadowColor: "rgba(90, 108, 234, 0.07)",
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: Border.br_3xl,
    height: 87,
    width: 333,
    position: "absolute",
  },
  price1: {
    left: "84.83%",
  },
  menu2: {
    top: 107,
  },
  frame1: {
    shadowColor: "rgba(90, 108, 234, 0.07)",
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: Border.br_3xl,
    height: 87,
    width: 333,
    position: "absolute",
  },
  price2: {
    left: "85.45%",
  },
  menu1: {
    top: 0,
  },
  menuList: {
    top: 270,
    height: 301,
    width: 323,
    left: 30,
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    top: "0%",
    borderRadius: 15,
    backgroundColor: "#f9a84d",
    opacity: 0.1,
    right: "0%",
    position: "absolute",
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
    letterSpacing: 1,
  },
  search: {
    width: "71.2%",
    right: "22.13%",
    left: "6.67%",
    position: "absolute",
  },
  filterIcon: {
    width: "13.07%",
    right: "6.67%",
    left: "80.27%",
    bottom: "74.14%",
    top: "19.7%",
    height: "6.16%",
  },
  iconNotification: {
    height: "17.86%",
    width: "32.8%",
    top: "6.03%",
    bottom: "76.11%",
    left: "67.2%",
    right: "0%",
  },
  tiiitleText: {
    fontSize: 31,
    lineHeight: 41,
    fontWeight:"bold",
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    color: Color.colorGray,
    left: 0,
    top: 0,
  },
  popularMenu: {
    top: 170,
    lineHeight: 20,
    fontWeight:"800",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text: {
    top: 60,
    left: 31,
    height: 190,
  },
  menuBarChild: {
    shadowColor: "rgba(90, 108, 234, 0.1)",
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    height: 74,
    width: 355,
  },
  frame2: {
    borderRadius: 12,
    backgroundColor: Color.linear,
    opacity: 0.1,
    left: 0,
    top: 0,
  },
  iconlybulkhome: {
    height: "54.55%",
    width: "22.86%",
    top: "22.73%",
    right: "60.95%",
    bottom: "22.73%",
    left: "16.19%",
  },
  home: {
    top: 16,
    left: 53,
    lineHeight: 16,
    color: Color.colorGray,
    fontFamily: FontFamily.bentonSansMedium,
  },
  iconHomeActive: {
    top: 15,
    left: 20,
    width: 105,
  },
  iconlybulkchat: {
    height: "32.43%",
    width: "6.76%",
    top: "33.78%",
    right: "10.7%",
    left: "82.54%",
    bottom: "33.78%",
  },
  menuBarItem: {
    top: 23,
    left: 308,
  },
  text1: {
    top: 25,
    left: 247,
  },
  iconlybulkbuy: {
    height: "92.31%",
    width: "85.71%",
    top: "7.69%",
    right: "14.29%",
    left: "0%",
    bottom: "0%",
  },
  notificationCartChild: {
    left: 0,
    top: 0,
  },
  text2: {
    top: 2,
    left: 4,
  },
  notificationCart: {
    left: 15,
    height: 14,
    width: 13,
    top: 0,
    position: "absolute",
  },
  iconCart: {
    height: "35.14%",
    width: "7.89%",
    top: "31.08%",
    right: "29.01%",
    left: "63.1%",
    bottom: "33.78%",
    position: "absolute",
  },
  iconProfile: {
    height: "27.03%",
    width: "4.51%",
    top: "36.49%",
    right: "47.33%",
    bottom: "36.49%",
    left: "48.17%",
  },
  menuBar: {
    top: 778,
    left: 25,
  },
  exploreMenu: {
    borderRadius: 20,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorskyblue,
  },
});
export default ExploreMenu;
