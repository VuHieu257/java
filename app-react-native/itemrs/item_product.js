import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../screen/GlobalStyles";

const ItemProduct = ({ imageSource, textContent, price, goProduct }) => {
  return (
    <TouchableOpacity onPress={goProduct}>
      <View style={[styles.menuList, styles.menuLayout1]}>
        <View style={[styles.menu1Child]} />
        <Text style={styles.menuName}>{textContent}</Text>
        <Text style={[styles.price, styles.priceTypo]}>{price}đ</Text>
        <Text style={styles.restaurantName}>Noodle Home</Text>
        <Image
          style={[styles.photoMenuIcon, styles.buyNowPosition]}
          contentFit="cover"
          source={{
            uri: imageSource,
          }}
          // source={require("../assets/firstpage/secondpage/menuphoto2.png")}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  menuList: {
    top: 10,
    marginHorizontal: 28,
    // left: 25,
    // justifyContent: "center",
    // alignContent:"center",
  },
  menuLayout1: {
    height: 100,
    width: 353,
    // position: "absolute",
  },
  menu1Child: {
    borderWidth: 0.5,
    borderRadius: Border.br_3xl,
    backgroundColor: "#fff",
    height: 90,
    width: 350,
    position: "absolute",
    top: 0,
  },
  menuName: {
    // marginTop: -18.5,
    // textAlign: "left",
    // // fontFamily: FontFamily.bentonSansMedium,
    left: "29.41%",
    color: Color.colorGray,
    lineHeight: 20,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    top: "20%",
    position: "absolute",
  },
  price: {
    marginTop: -14.5,
    left: "71.73%",
    fontSize: 22,
    lineHeight: 29,
    color: "#fead1d",
    top: "50%",
    // // fontFamily: FontFamily.bentonSansBold,
    position: "absolute",
  },
  priceTypo: {
    // // fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
  },
  restaurantName: {
    marginTop: 5.5,
    fontSize: 14,
    // fontFamily: FontFamily.bentonSansRegular,
    color: "#3b3b3b",
    fontWeight: "500",
    opacity: 0.3,
    letterSpacing: 1,
    // textAlign: "left",
    left: "29.41%",
    top: "40%",
    position: "absolute",
  },
  photoMenuIcon: {
    borderRadius: 10,
    width: 70,
    height: 70,
    left: 10,
  },
  buyNowPosition: {
    top: 11,
    position: "absolute",
  },
});
export default ItemProduct;
