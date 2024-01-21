import * as React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Color, Border, FontFamily, FontSize } from "../screen/GlobalStyles";

const Filter = ({ navigation }) => {
  return (
    <View style={styles.filter}>
      <Image
        style={styles.patternIcon}
        contentFit="cover"
        source={require("../assets/firstpage/pattern1.png")}
      />
      <View style={[styles.typeFilteButton, styles.buttonPosition]}>
        <View style={[styles.restaurantFilterButton, styles.filterFlexBox]}>
          <Text style={styles.breakfast}>Restaurant</Text>
        </View>
        <View style={[styles.menuFilterButton, styles.filterFlexBox]}>
          <Text style={styles.breakfast}>Menu</Text>
        </View>
      </View>
      <View style={[styles.locationFilterButton, styles.buttonPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectangleLayout]} />
          <Text style={[styles.breakfast2, styles.drinkPosition]}>1 Km</Text>
        </View>
        <View style={[styles.filterButton, styles.filterLayout]}>
          <View style={[styles.rectangle1, styles.filterLayout]} />
          <Text style={[styles.drink, styles.drinkPosition]}>{`<10 Km`}</Text>
        </View>
        <View style={[styles.filterButton1, styles.filterLayout]}>
          <View style={[styles.rectangle1, styles.filterLayout]} />
          <Text style={[styles.drink, styles.drinkPosition]}>{`>10 Km`}</Text>
        </View>
      </View>
      <View style={styles.foodFilterButton}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectangleLayout]} />
          <Text style={[styles.breakfast2, styles.drinkPosition]}>Cake</Text>
        </View>
        <View style={[styles.appetizerFilterButton, styles.rectangle4Layout]}>
          <View style={[styles.rectangle4, styles.rectangle4Layout]} />
          <Text style={[styles.breakfast4, styles.drinkPosition]}>
            Appetizer
          </Text>
        </View>
        <View style={[styles.dessertFilterButton, styles.rectangle5Layout]}>
          <View style={[styles.rectangle5, styles.rectangle5Layout]} />
          <Text style={[styles.breakfast5, styles.drinkPosition]}>Dessert</Text>
        </View>
        <View style={[styles.mainCourseFilterButton, styles.rectangle6Layout]}>
          <View style={[styles.rectangle6, styles.rectangle6Layout]} />
          <Text style={[styles.drink2, styles.drinkPosition]}>Main Course</Text>
        </View>
        <View style={[styles.soupFilterButton, styles.rectangle7Layout]}>
          <View style={[styles.rectangle7, styles.rectangle7Layout]} />
          <Text style={[styles.drink3, styles.drinkPosition]}>Soup</Text>
        </View>
      </View>
      <View style={[styles.ctaSearchButton, styles.rectangle8Layout]}>
        <LinearGradient
          style={[styles.rectangle8, styles.rectangle8Layout]}
          locations={[0, 1]}
          colors={["#53e88b", "#15be77"]}
        />
        <Text style={styles.checkOut}>Search</Text>
      </View>
      <View style={styles.search}>
        <View style={[styles.rectangle9, styles.rectangle9Position]} />
        <Image
          style={styles.iconSearch}
          contentFit="cover"
          source={require("../assets/firstpage/iconsearch.png")}
        />
        <Text style={styles.searcSample}>What do you want to order?</Text>
      </View>
      <Image
        style={[styles.iconNotification, styles.rectangle9Position]}
        contentFit="cover"
        source={require("../assets/firstpage/iconnotification.png")}
      />
      <View style={styles.text}>
        <Text style={[styles.location, styles.typeTypo]}>Location</Text>
        <Text style={[styles.type, styles.typeTypo]}>Type</Text>
        <Text style={[styles.food, styles.typeTypo]}>Food</Text>
        <Text style={[styles.tiiitleText, styles.typeTypo]}>
        Find something you like
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    height: 44,
    left: 35,
    position: "absolute",
  },
  filterFlexBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorOrange_200,
    borderRadius: Border.br_mini,
    height: 44,
    top: 0,
    position: "absolute",
  },
  rectangleLayout: {
    opacity: 0.1,
    borderRadius: Border.br_mini,
  },
  drinkPosition: {
    top: "50%",
    marginTop: -7,
    textAlign: "left",
    color: Color.colorChocolate,
    fontFamily: FontFamily.bentonSansMedium,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  filterLayout: {
    width: 86,
    height: 44,
    top: 0,
    position: "absolute",
  },
  rectangle4Layout: {
    width: 99,
    height: 44,
    left: 0,
    position: "absolute",
  },
  rectangle5Layout: {
    width: 87,
    height: 44,
    position: "absolute",
  },
  rectangle6Layout: {
    width: 120,
    height: 44,
    top: 0,
    position: "absolute",
  },
  rectangle7Layout: {
    width: 71,
    height: 44,
    top: 0,
    position: "absolute",
  },
  rectangle8Layout: {
    height: 57,
    width: 325,
    position: "absolute",
  },
  rectangle9Position: {
    right: "0%",
    position: "absolute",
  },
  typeTypo: {
      color: Color.colorGray_100,
    fontWeight:"bold",
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    position: "absolute",
  },
  patternIcon: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  breakfast: {
    textAlign: "left",
    color: Color.colorChocolate,
    fontFamily: FontFamily.bentonSansMedium,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  restaurantFilterButton: {
    left: 0,
  },
  menuFilterButton: {
    left: 128,
  },
  typeFilteButton: {
    top: 270,
    width: 202,
  },
  rectangle: {
    backgroundColor: Color.colorOrange_100,
    opacity: 0.1,
    width: 70,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  breakfast2: {
    left: "28.57%",
  },
  rectanglePosition: {
    width: 70,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangle1: {
    opacity: 0.1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorOrange_100,
    left: 0,
  },
  drink: {
    left: "23.26%",
  },
  filterButton: {
    left: 176,
  },
  filterButton1: {
    left: 80,
  },
  locationFilterButton: {
    top: 374,
    width: 262,
  },
  rectangle4: {
    opacity: 0.1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorOrange_100,
    top: 0,
  },
  breakfast4: {
    left: "20.2%",
  },
  appetizerFilterButton: {
    top: 64,
  },
  rectangle5: {
    opacity: 0.1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorOrange_100,
    left: 0,
    top: 0,
  },
  breakfast5: {
    left: "22.99%",
  },
  dessertFilterButton: {
    left: 119,
    top: 64,
  },
  rectangle6: {
    opacity: 0.1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorOrange_100,
    left: 0,
  },
  drink2: {
    left: "18.33%",
  },
  mainCourseFilterButton: {
    left: 161,
  },
  rectangle7: {
    opacity: 0.1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorOrange_100,
    left: 0,
  },
  drink3: {
    left: "28.17%",
  },
  soupFilterButton: {
    left: 80,
  },
  foodFilterButton: {
    top: 478,
    width: 281,
    height: 108,
    left: 35,
    position: "absolute",
  },
  rectangle8: {
    backgroundColor: Color.linear,
    borderRadius: Border.br_mini,
    width: 325,
    left: 0,
    top: 0,
  },
  checkOut: {
    marginTop: -6.5,
    left: "42.15%",
    fontSize: 14,
    color: "#fefeff",
    fontFamily: FontFamily.bentonSansBold,
    letterSpacing: 1,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  ctaSearchButton: {
    top: 724,
    left: 45,
  },
  rectangle9: {
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
    opacity: 0.4,
    letterSpacing: 1,
    textAlign: "left",
    color: Color.colorChocolate,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  search: {
    height: "6.16%",
    width: "86.67%",
    top: "19.7%",
    right: "6.67%",
    bottom: "74.14%",
    left: "6.67%",
    position: "absolute",
  },
  iconNotification: {
    height: "17.86%",
    width: "32.8%",
    top: "6.03%",
    bottom: "76.11%",
    left: "67.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  location: {
    top: 274,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    left: 0,
  },
  type: {
    top: 170,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    left: 0,
  },
  food: {
    top: 378,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    left: 0,
  },
  tiiitleText: {
    left: 6,
    fontSize: 31,
    lineHeight: 41,
    width: 233,
    top: 0,
  },
  text: {
    top: 60,
    width: 239,
    height: 398,
      left: 25,
    position: "absolute",
  },
  filter: {
    borderRadius: 20,
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Filter;
