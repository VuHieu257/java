import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View,Image,ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../screen/GlobalStyles";
import ItemHome from './../itemrs/item';
import { GET_ALL,GET_IMD } from "../api/apiService";

// const ExploreRestaurant = ({ navigation }) => {
function ExploreRestaurant() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GET_ALL("products")
      .then((response) => {
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.content)) {
          setRestaurantData(responseData.content);
        } else {
          console.error("Data received from the API is not in a supported format");
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
    <View style={styles.exploreRestaurant}>
      <Image
        style={styles.patternIcon}
        contentFit="cover"
        source={require("../assets/firstpage/pattern1.png")}
      />
      <Image
        style={[styles.iconNotification, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/iconnotification.png")}
      />
      <View style={[styles.text, styles.textPosition]}>
        <Text style={[styles.tiiitleText, styles.tiiitleTextTypo]}>
        Find something you like
        </Text>
        <Text style={[styles.popularRestaurant, styles.tiiitleTextTypo]}>
          Popular Restaurant
        </Text>
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
        style={[styles.filterIcon, styles.searchPosition]}
        contentFit="cover"
        source={require("../assets/firstpage/iconfilter.png")}
      />
      <ScrollView style={styles.scrollview1}>
        <View style={[styles.containerscv, styles.content]}> 
          {isLoading ? (
            <Text>Loading....</Text>
          ) : (
              restaurantData.map((restaurant, index) => (
                <ItemHome key={index}
                  imageSource={GET_IMD("products", restaurant.photo)}
                  textContent={restaurant.title}
                />
              ))
          )}  
          {/* <ItemHome/> */}
          {/* <ItemHome/>
          <ItemHome/>
          <ItemHome/>
          <ItemHome/>
          <ItemHome/>
          <ItemHome/>
          <ItemHome/>
          <ItemHome/>
          <ItemHome/>
          <ItemHome/>
          <ItemHome/> */}
        </View>
      </ScrollView>
     
      <View style={[styles.menuBar, styles.menuLayout]}>
        <View style={[styles.menuBarChild, styles.menuLayout]} />
        <View style={[styles.iconHomeActive, styles.frameLayout]}>
          <LinearGradient
            style={[styles.frame, styles.frameLayout]}
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
          style={[styles.iconlybulkchat, styles.iconCartPosition]}
          contentFit="cover"
          source={require("../assets/firstpage/iconlybulkchat.png")}
        />
        <Image
          style={[styles.menuBarItem, styles.menuBarItemLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/ellipse164.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>7</Text>
        <View style={[styles.iconCart, styles.iconCartPosition]}>
          <Image
            style={[styles.iconlybulkbuy, styles.rectanglePosition]}
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
          style={[styles.iconProfile, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/iconlybulkprofile.png")}
        />
      </View>
      

    </View>
  );
};

const styles = StyleSheet.create({
  scrollview1: {
    top: "30%",
    backgroundColor: "#93a5c2",
    borderRadius:35,
    // borderTopLeftRadius:35,
  },
  containerscv:
  {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 15,
    top:15,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textPosition: {
    left: 31,
    position: "absolute",
  },
  tiiitleTextTypo: {
      textAlign: "left",
      fontWeight:"bold",
    // fontFamily: FontFamily.bentonSansBold,
    color: Color.colorGray,
    left: 0,
    position: "absolute",
  },
  searchPosition: {
    bottom: "74.14%",
    top: "19.7%",
    height: "6.16%",
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  homeTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  restaurantPosition2: {
    left: 30,
    position: "absolute",
  },
  groupChildLayout: {
    height: 194,
    width: 145,
    // position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    // shadowColor:"blue",
    // backgroundColor: 'White',
    borderRadius:30,
    top: 0,
  },
  restoTypo: {
    top:"63%",
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    textAlign: "left",
    // fontFamily: FontFamily.bentonSansBold,
  },
  distanceTypo: {
    top:"65%",
    // fontFamily: FontFamily.bentonSansBook,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    opacity: 0.5,
    color: Color.colorBlack,
    textAlign: "left",
  },
  childLayout: {
    width: 147,
    height: 184,
    left: 0,
    position: "absolute",
  },
  restaurantPosition1: {
    left: 179,
    height: 184,
    width: 145,
    position: "absolute",
  },
  restaurantPosition: {
    left: 2,
    width: 147,
    height: 184,
    position: "absolute",
  },
  menuLayout: {
    height: 74,
    width: 355,
    position: "absolute",
  },
  frameLayout: {
    height: 44,
    width: 105,
    position: "absolute",
  },
  iconCartPosition: {
    bottom: "33.78%",
    position: "absolute",
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
    textAlign: "left",
    // fontFamily: FontFamily.bentonSansBold,
    position: "absolute",
  },
  patternIcon: {
    width: 409,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  iconNotification: {
    height: "17.86%",
    width: "32.8%",
    top: "6.03%",
    bottom: "76.11%",
    left: "67.2%",
    right: "0%",
    position: "absolute",
  },
  tiiitleText: {
    fontSize: 31,
    lineHeight: 41,
    width: 233,
    top: 0,
  },
  popularRestaurant: {
    top: 170,
    fontSize: 19,
    lineHeight: 20,
  },
  text: {
    top: 60,
    height: 190,
    width: 233,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    borderRadius: 15,
    backgroundColor: "#f9a84d",
    opacity: 0.1,
    right: "0%",
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
    letterSpacing: 1,
    // fontFamily: FontFamily.robotoRegular,
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
  groupChild: {
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    borderRadius: Border.br_3xl,
    height: 184,
    width: 145,
    position: "absolute",
    left: 0,
    borderWidth:0.5,
    
    // shadowOpacity: 1,
    // elevation: 50,
    // shadowRadius: 50,
    // shadowOffset: {
    //   width: 12,
    //   height: 26,
    // },
    // borderRadius: Border.br_3xl,
    // top: 0,
    // backgroundColor: Color.colorWhite,
  },
  mcdonaldS151: {
    top: 33,
    left: 43,
    width: 59,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  restoName: {
    left: 21,
  },
  distanceInMinute: {
    left: 50,
    opacity: 0.5,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  restaurantImageIcon: {
    top: 11,
    left: 34,
    width: 82,
    height: 100,
    position: "absolute",
  },
  resaturant6: {
    left: 10,
    top: 5,
    backgroundColor: Color.colorWhite,
    borderRadius: 30,
    borderWidth: 0.4,
    marginHorizontal: 15,
    marginBottom:10,
  },
  restaurant5Child: {
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    borderRadius: Border.br_3xl,
    top: 0,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(90, 108, 234, 0.07)",
  },
  restoName1: {
    left: 25,
  },
  distanceInMinute1: {
    left: 51,
    opacity: 0.5,
  },
  restaurantImageIcon1: {
    top: 11,
    width: 101,
    height: 94,
    left: 21,
    position: "absolute",
  },
  restaurant5: {
    top: 408,
  },
  restaurant4Child: {
    shadowColor: "rgba(90, 108, 234, 0.07)",
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    borderRadius: Border.br_3xl,
    height: 184,
    width: 145,
    position: "absolute",
    left: 0,
  },
  restoName2: {
    left: 24,
  },
  restaurantImageIcon2: {
    top: 21,
    width: 85,
    height: 79,
  },
  restaurant4: {
    top: 204,
  },
  restaurant3Child: {
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    borderRadius: Border.br_3xl,
    top: 0,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(90, 108, 234, 0.07)",
  },
  restoName3: {
    left: 32,
  },
  restaurantImageIcon3: {
    top: 17,
    width: 86,
    height: 88,
  },
  restaurant3: {
    top: 204,
  },
  groupItem: {
    shadowColor: "rgba(90, 108, 234, 0.07)",
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    borderRadius: Border.br_3xl,
    height: 184,
    width: 145,
    position: "absolute",
    left: 0,
  },
  restaurantImageIcon4: {
    top: 8,
    left: 26,
    width: 90,
    height: 98,
    position: "absolute",
  },
  restaurant2: {
    top: 0,
  },
  restaurant1Child: {
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    borderRadius: Border.br_3xl,
    top: 0,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(90, 108, 234, 0.07)",
  },
  resturantImageIcon: {
    top: 26,
    width: 96,
    height: 73,
    left: 21,
    position: "absolute",
  },
  restaurant1: {
    top: 0,
  },
  restaurantList: {
    // top: 270,
    width: 314,
    height: 592,
  },
  menuBarChild: {
    shadowColor: "rgba(90, 108, 234, 0.1)",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    borderRadius: Border.br_3xl,
    top: 0,
    backgroundColor: Color.colorWhite,
    height: 74,
    width: 355,
    left: 0,
  },
  frame: {
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
    position: "absolute",
  },
  home: {
    top: 16,
    left: 53,
    lineHeight: 16,
    // fontFamily: FontFamily.bentonSansMedium,
    color: Color.colorGray,
    fontSize: FontSize.size_xs,
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
    opacity: 0.5,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    opacity: 0.5,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  },
  iconProfile: {
    height: "27.03%",
    width: "4.51%",
    top: "36.49%",
    right: "47.33%",
    bottom: "36.49%",
    left: "48.17%",
    opacity: 0.5,
    position: "absolute",
  },
  menuBar: {
    top: 778,
    left: 30,
  },
  exploreRestaurant: {
    // borderRadius: 20,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
    // backgroundColor:"#f9fafe",
  },
});

export default ExploreRestaurant;
