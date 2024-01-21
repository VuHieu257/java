import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../screen/GlobalStyles";
import { GET_ALL, GET_IMD } from "../api/apiService";
import ItemHome from "../itemrs/item";
import ItemProduct from "../itemrs/item_product";

// const Home = ({navigation}) => {
function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GET_ALL("products")
      .then((response) => {
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.content)) {
          setRestaurantData(responseData.content);
        } else {
          console.error(
            "Data received from the API is not in a supported format"
          );
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
    console.log(restaurantData);
  }, []);
  return (
    <View style={styles.home}>
      <ScrollView style={[styles.scrollviewcontainer]}>
        <View style={styles.viewMore}>
          <Text style={[styles.viewMore1, styles.viewTypo]}>View More</Text>
          <Text style={[styles.viewMore2, styles.viewTypo]}>View More</Text>
        </View>
        <Text style={[styles.nearestRestaurant]}>Nearest Restaurant</Text>
        <Text style={[styles.popularMenu]}>Popular Menu</Text>
        <ScrollView style={[styles.scrollviewhome]} horizontal>
          <View style={[styles.scrollview]}>
            {isLoading ? (
              <Text>Loading....</Text>
            ) : (
              restaurantData.map((restaurant, index) => (
                <ItemHome
                 
                  goProduct={() => {
                    navigation.navigate(
                      "ProductDetail",
                      { idProduct: index, item: restaurant }
                      // ,  { productId: index }
                    );
                  }}
                  imageSource={GET_IMD("products", restaurant.photo)}
                  textContent={restaurant.title}
                  // textContent2={restaurant.description}
                  // textContent3={restaurant.price}
                />
              ))
              // <Text style={[{height: 100, width: 100, backgroundColor: "red"}]}>dsadasdasdas</Text>
            )}
            {/* <ItemHome goProduct={() => navigation.navigate('DetailProduct')}
            onPress={() => alert("Pressed - Product!")}/>
              <ItemHome onPress={() => alert("Pressed - Product!")}/>
              <ItemHome onPress={() => alert("Pressed - Product!")}/>
              <ItemHome onPress={() => alert("Pressed - Product!")}/> */}
          </View>
        </ScrollView>

        <ScrollView style={[styles.scrollviewhome_pd]}>
          {isLoading ? (
            <Text>Loading....</Text>
          ) : (
            restaurantData.map((restaurant, index) => (
              <ItemProduct
                // key={index}
                // restaurant={restaurant}
                // onPress={() => navigateToDetail(item)}
                goProduct={() => {
                  navigation.navigate(
                    "ProductDetail",
                    { idProduct: index, item: restaurant }
                    // ,  { productId: index }
                  );
                }}
                imageSource={GET_IMD("products", restaurant.photo)}
                textContent={restaurant.title}
                description={restaurant.description}
                price={restaurant.price}
              />
            ))
          )}
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
        </ScrollView>
      </ScrollView>
      <Image
        style={styles.patternIcon}
        contentFit="cover"
        source={require("../assets/firstpage/pattern.png")}
      />
      <Image
        style={styles.patternIcon}
        contentFit="cover"
        source={require("../assets/firstpage/Gradient.png")}
      />
      <Image
        style={[styles.iconNotification, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/iconnotification.png")}
      />
      <View style={[styles.text, styles.textLayout]}>
        <Text
          onPress={() => navigation.navigate("DetailProduct")}
          style={[styles.tiiitleText, styles.textLayout]}
        >
          Find something you like
        </Text>
      </View>
      <KeyboardAvoidingView style={[styles.search, styles.searchPosition]}>
        {/* <View style={[styles.rectangle, styles.rectanglePosition]} /> */}
        <TextInput style={[styles.rectangle, styles.rectanglePosition]} />
        <Image
          style={styles.iconSearch}
          contentFit="cover"
          source={require("../assets/firstpage/iconsearch.png")}
        />
        <Text style={styles.searcSample}>What do you want to order?</Text>
      </KeyboardAvoidingView>
      {/* <KeyboardAvoidingView> */}
      {/* </KeyboardAvoidingView> */}

      <Image
        style={[styles.filterIcon, styles.searchPosition]}
        contentFit="cover"
        source={require("../assets/firstpage/iconfilter.png")}
      />

      <View style={[styles.promoAdvertising, styles.frameLayout]}>
        <LinearGradient
          style={[styles.frame, styles.framePosition]}
          locations={[0, 1]}
          colors={["#53e88b", "#15be77"]}
        />

        <TouchableOpacity style={[styles.ctaButton, styles.ctaButtonLayout]}>
          {/* <View style={[styles.rectangle1, styles.ctaButtonLayout]} /> */}
          <Text style={[styles.buyNow, styles.buyNowPosition]}>Buy Now</Text>
        </TouchableOpacity>
        <Text style={styles.voucherTittle}>Special Deal For October</Text>
        <Image
          style={[styles.imageIcon, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/image.png")}
        />
      </View>

      {/* tabbar home */}
      <View style={[styles.menuBar, styles.menuLayout]}>
        <View style={[styles.menuBarChild, styles.menuLayout]} />
        <TouchableOpacity style={[styles.iconHomeActive, styles.frame1Layout]}>
          <LinearGradient
            style={[styles.frame1, styles.frame1Layout]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          />
          <Image
            style={[styles.iconlybulkhome, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/firstpage/iconlybulkhome.png")}
          />
          <Text style={styles.home1}>Home</Text>
        </TouchableOpacity>
        <View></View>
        <Image
          onPress={() => navigation.navigate("Message")}
          style={[styles.iconlybulkchat, styles.iconProfileLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/iconlybulkchat.png")}
        />
        <Image
          onPress={() => navigation.navigate("Message")}
          style={[styles.menuBarItem, styles.menuBarItemLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/ellipse164.png")}
        />

        <View style={styles.iconCart}>
          <Image
            style={[styles.iconlybulkbuy, styles.iconProfileLayout]}
            contentFit="cover"
            source={require("../assets/firstpage/iconlybulkbuy.png")}
          />
          <TouchableOpacity onPress={() => navigation.navigate("OrderDetails")}>
            <View style={styles.notificationCart}>
              <Image
                style={[styles.notificationCartChild, styles.menuBarItemLayout]}
                contentFit="cover"
                source={require("../assets/firstpage/ellipse163.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>7</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          style={[styles.iconProfile, styles.iconProfileLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/iconlybulkprofile.png")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollviewcontainer: {
    flex: 1,
    top: 395,
    width: "100%",
    height: "100%",
    // position:'absolute',
    // backgroundColor:"#676767",
    backgroundColor: "rgba(90, 108, 234, 0.06)",
  },
  scrollviewhome_pd: {
    flex: 1,
    width: "100%",
    top: 57,
    //  backgroundColor:"#000",
  },
  scrollviewhome: {
    flex: 1,
    top: 25,
    width: "100%",
    // backgroundColor:"#000",
  },
  scrollview: {
    // width:"100%",
    // height: "100%",
    // backgroundColor:"#000",
    flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
    marginHorizontal: 15,
    top: 15,
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    backgroundColor: Color.colorWhite,
  },

  buyNowPosition: {
    top: 12,
    // position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textLayout: {
    width: 233,
    height: 100,
    position: "absolute",
  },
  searchPosition: {
    bottom: "74.14%",
    top: "18.7%",
    height: "6.16%",
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
  },
  viewTypo: {
    color: Color.colorCoral,
    // // fontFamily: FontFamily.bentonSansBook,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 140,
    width: 260,
    position: "absolute",
  },
  framePosition: {
    backgroundColor: Color.linear,
    left: 0,
    top: 0,
  },
  ctaButtonLayout: {
    // height: 34,
    // width: 85,
    // position: "absolute",
  },
  menuLayout: {
    height: 74,
    width: 357,
    position: "absolute",
  },
  frame1Layout: {
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
    lineHeight: 12,
    fontSize: FontSize.size_4xs,
    color: Color.colorWhite,
    // // fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    position: "absolute",
  },
  restaurantChildLayout: {
    width: 147,
    height: 184,
    top: 0,
    position: "absolute",
  },
  restoTypo: {
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: 116,
    // // fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
  },
  distanceTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    top: 141,
    color: Color.colorBlack,
    opacity: 0.5,
    // // fontFamily: FontFamily.bentonSansBook,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    width: 145,
    height: 184,
    top: 0,
    position: "absolute",
  },
  restoName1Position: {
    left: 21,
    position: "absolute",
  },
  patternIcon: {
    width: 411.3,
    left: 0,
    top: 0,
    position: "absolute",
    height: 397,
  },
  menu1: {
    left: 0,
    top: 0,
  },

  iconNotification: {
    height: "17.86%",
    width: "32.8%",
    top: "6.03%",
    bottom: "76.11%",
    left: "70%",
    right: "0%",
    position: "absolute",
  },
  tiiitleText: {
    fontSize: 31,
    lineHeight: 41,
    fontWeight: "bold",
    // // fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    color: Color.colorGray,
    left: 0,
    top: 0,
  },
  nearestRestaurant: {
    top: 10,
    color: Color.colorGray,
    fontWeight: "700",
    // // fontFamily: FontFamily.bentonSansBold,
    left: 30,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  popularMenu: {
    top: 250,
    color: Color.colorGray,
    fontWeight: "700",
    // // fontFamily: FontFamily.bentonSansBold,
    left: 30,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text: {
    top: 60,
    left: 31,
    height: 609,
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
    color: "#fff",
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
    // // fontFamily: FontFamily.robotoRegular,
    color: "#da6317",
    opacity: 0.4,
    fontSize: FontSize.size_xs,
    letterSpacing: 1,
    textAlign: "left",
    position: "absolute",
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
  viewMore1: {
    top: 0,
  },
  viewMore2: {
    top: 244,
  },
  viewMore: {
    top: 10,
    left: 322,
    width: 77,
    height: 260,
    position: "absolute",
  },
  frame: {
    borderRadius: 16,
    height: 150,
    width: 359,
    position: "absolute",
  },
  rectangle1: {
    borderRadius: 6,
    borderWidth: 0.4,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    shadowRadius: 20,
    elevation: 12,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    backgroundColor: Color.colorWhite,
    height: 32,
    width: 82,
    top: 0,
  },
  buyNow: {
    left: 19,
    fontSize: 13,
    lineHeight: 13,
    color: "#1fcc5b",
    fontWeight: "600",
    // // fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
  },
  ctaButton: {
    top: 88,
    left: 193,
    height: 35,
    width: 85,
    backgroundColor: "#fff",
  },
  voucherTittle: {
    top: 30,
    fontSize: 18,
    lineHeight: 22,
    width: 142,
    color: Color.colorWhite,
    left: 193,
    // // fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    position: "absolute",
  },
  imageIcon: {
    left: 0,
    top: 10,
  },
  promoAdvertising: {
    top: 230,
    left: 25,
  },
  menuBarChild: {
    shadowColor: "rgba(90, 108, 234, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    backgroundColor: Color.colorWhite,
    elevation: 10,
    shadowRadius: 50,
    borderRadius: Border.br_3xl,
    height: 74,
    width: 355,
    top: 0,
  },
  frame1: {
    borderRadius: 12,
    backgroundColor: Color.linear,
    left: 0,
    top: 0,
    opacity: 0.1,
  },
  iconlybulkhome: {
    height: "54.55%",
    width: "22.86%",
    top: "22.73%",
    right: "60.95%",
    bottom: "22.73%",
    left: "16.19%",
    position: "absolute",
  },
  home1: {
    top: 16,
    left: 53,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorGray,
    // // fontFamily: FontFamily.bentonSansMedium,
    position: "absolute",
  },
  iconHomeActive: {
    top: 15,
    left: 20,
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
  restaurant3Child: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    backgroundColor: Color.colorWhite,
    elevation: 10,
    shadowRadius: 50,
    borderRadius: Border.br_3xl,
    shadowColor: "rgba(90, 108, 234, 0.07)",
  },
  restoName: {
    left: 32,
    position: "absolute",
  },
  distanceInMinute: {
    left: 51,
  },
  restaurantImageIcon: {
    top: 462,
    left: 388,
    width: 86,
    height: 88,
    position: "absolute",
  },
  restaurant3: {
    left: 332,
  },
  groupChild: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    backgroundColor: Color.colorWhite,
    elevation: 10,
    shadowRadius: 50,
    borderRadius: Border.br_3xl,
    shadowColor: "rgba(90, 108, 234, 0.07)",
  },
  mcdonaldS151: {
    top: 33,
    left: 43,
    width: 59,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  restoName1: {
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: 116,
    // // fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
  },
  distanceInMinute1: {
    left: 50,
  },
  rectangleParent: {
    left: 0,
  },
  restaurantImageIcon1: {
    top: 8,
    left: 26,
    width: 90,
    height: 98,
    position: "absolute",
  },
  restaurant2: {
    left: 167,
  },
  restaurant1Child: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    backgroundColor: Color.colorWhite,
    elevation: 10,
    shadowRadius: 50,
    borderRadius: Border.br_3xl,
    shadowColor: "rgba(90, 108, 234, 0.07)",
  },
  restoName2: {
    left: 25,
    position: "absolute",
  },
  resturantImageIcon: {
    top: 26,
    width: 96,
    height: 73,
  },
  restaurant1: {
    left: 0,
  },
  restaurantList: {
    top: 445,
    width: 479,
    height: 184,
    left: 25,
    position: "absolute",
  },
  home: {
    borderRadius: 20,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});
export default Home;
