import * as React from "react";
import { useState, useEffect } from "react"; 
import { StyleSheet, View, Text,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontSize, Color, FontFamily } from "../screen/GlobalStyles";

const DetailProduct = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);
  // const { key,content} = route.params;
  useEffect(() => {
    const productId = route.params.productId;
    // Gọi hàm GET_ID để lấy dữ liệu của sản phẩm theo id
    GET_ID('products', productId)
      .then(response => {
        // Lưu trữ dữ liệu sản phẩm vào state
        setProduct(response.data);
      })
      .catch(error => {
        // Xử lý lỗi nếu có
        console.error('Error fetching product data:', error);
      });
  }, [route.params.productId]);
  return (
    <View style={styles.detailProduct}>
    <Image
      style={styles.photoRestaurantIcon}
      contentFit="cover"
      source={require("../assets/firstpage/secondpage/photo-restaurant.png")}
    />
    <View style={[styles.frame, styles.frameLayout]}>
      <Image
        style={[styles.frameChild, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/secondpage/rectangle-29.png")}
      />
      <View style={styles.scroollTools} />
    </View>
    <View style={[styles.popularStatus, styles.rectangleLayout]}>
      <LinearGradient
        style={[styles.rectangle, styles.rectanglePosition]}
        locations={[0, 1]}
        colors={["#53e88b", "#15be77"]}
      />
        <Text style={styles.popular}>Popular </Text>
    </View>
    <View style={[styles.iconLove, styles.iconLayout4]}>
      <View style={[styles.iconLoveChild, styles.iconLayout4]} />
      <Image
        style={[styles.heartIcon, styles.viewAllLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/secondpage/heart.png")}
      />
    </View>
    <Image
      style={[styles.iconLocation, styles.iconLayout4]}
      contentFit="cover"
      source={require("../assets/firstpage/secondpage/IconLocation.png")}
    />
    <View style={styles.text}>
      <Text style={styles.restaurantName}>Wijie Bar and Resto</Text>
      <Text style={[styles.popularMenu, styles.sampleNameTypo]}>
        Popular Menu
      </Text>
      <Text style={[styles.testimonials, styles.sampleNameTypo]}>
        Testimonials
      </Text>
      <Text style={[styles.description, styles.descriptionTypo]}>
        Most whole Alaskan Red King Crabs get broken down into legs, claws,
        and lump meat. We offer all of these options as well in our online
        shop, but there is nothing like getting the whole . . . .
      </Text>
    </View>
    <View style={styles.testimonialList}>
      <View style={[styles.testimonialFrame, styles.testimonialFrameLayout]}>
        <View
          style={[styles.testimonialFrameChild, styles.childFrameShadowBox]}
        />
        <Text style={[styles.sampleName, styles.calendarPosition]}>
          Dianne Russell
        </Text>
        <Text style={[styles.calendar, styles.ratingClr]}>12 April 2021</Text>
        <Image
          style={[styles.photoProfileIcon, styles.photoIconLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/photo-profile.png")}
        />
        <Text
          style={[styles.sampleTestimonial, styles.descriptionTypo]}
        >{`This Is great, So delicious! You Must Here, With Your family . . `}</Text>
        <View style={[styles.iconStar, styles.iconLayout3]}>
          <LinearGradient
            style={[styles.iconStarChild, styles.iconLayout3]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text1, styles.text1Typo]}>5</Text>
            <Image
              style={styles.iconStar1}
              contentFit="cover"
              source={require("../assets/firstpage/secondpage/icon-star.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.testimonialFrame1, styles.testimonialFrameLayout]}>
        <View
          style={[styles.testimonialFrameItem, styles.childFrameShadowBox]}
        />
        <Text style={[styles.sampleName, styles.calendarPosition]}>
          Dianne Russell
        </Text>
        <Text style={[styles.calendar, styles.ratingClr]}>12 April 2021</Text>
        <Image
          style={[styles.photoProfileIcon1, styles.parentPosition]}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/photo-profile1.png")}
        />
        <Text
          style={[styles.sampleTestimonial, styles.descriptionTypo]}
        >{`This Is great, So delicious! You Must Here, With Your family . . `}</Text>
        <View style={[styles.iconStar, styles.iconLayout3]}>
          <LinearGradient
            style={[styles.iconStarChild, styles.iconLayout3]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text1, styles.text1Typo]}>5</Text>
            <Image
              style={styles.iconStar1}
              contentFit="cover"
              source={require("../assets/firstpage/secondpage/icon-star1.png")}
            />
          </View>
        </View>
      </View>
    </View>
    <View style={styles.menuList}>
      <View style={styles.menu1Position}>
        <View style={[styles.menu1Child, styles.menu1Position]} />
        <Text style={[styles.spacyFreshCrab, styles.spacyTypo]}>
          Spacy fresh crab
        </Text>
        <Text style={[styles.text3, styles.textTypo]}>12 $</Text>
        <Image
          style={styles.image35Icon}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/image-35.png")}
        />
        <Image
          style={[styles.image34Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/image-34.png")}
        />
      </View>
      <View style={[styles.menu2, styles.menuChildLayout]}>
        <View style={[styles.menu2Child, styles.menuChildLayout]} />
        <Text style={[styles.spacyFreshCrab1, styles.spacyTypo]}>
          Spacy fresh crab
        </Text>
        <Text style={[styles.text4, styles.textTypo]}>16$</Text>
        <Image
          style={styles.image35Icon}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/image-33.png")}
        />
        <Image
          style={[styles.image32Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/image-32.png")}
        />
      </View>
      <View style={[styles.menu3, styles.menuChildLayout]}>
        <View style={[styles.menu3Child, styles.menuChildLayout]} />
        <Text style={[styles.spacyFreshCrab1, styles.spacyTypo]}>
          Spacy fresh crab
        </Text>
        <Text style={[styles.text4, styles.textTypo]}>16$</Text>
        {/* <Image
          style={[styles.image33Icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/image-331.png")}
        /> */}
        {/* <Image
          style={[styles.image32Icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/image-321.png")}
        /> */}
      </View>
    </View>
    <View style={[styles.viewAll, styles.viewAllLayout]}>
      <Text style={styles.viewAll1}>View All</Text>
    </View>
    <View style={[styles.waysInKm, styles.rating1FlexBox]}>
       <Image
        style={[styles.iconMapPin, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/secondpage/icon-map-pin.png")}
      />
      <Text style={[styles.rating, styles.ratingClr]}>19 Km</Text>
    </View>
    <View style={[styles.rating1, styles.rating1FlexBox]}>
      <Image
        style={styles.iconLayout}
        contentFit="cover"
        source={require("../assets/firstpage/secondpage/icon-star.png")}
      />
      <Text style={[styles.rating, styles.ratingClr]}>4,8 Rating</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 839,
    width: 411,
    left: 0,
    position: "absolute",
    borderRadius:60,
  },
  rectangleLayout: {
    height: 34,
    width: 76,
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: "transparent",
    opacity: 0.1,
    borderRadius: Border.br_lg_5,
    left: 0,
    top: 0,
  },
  iconLayout4: {
    width: 34,
    height: 34,
    position: "absolute",
  },
  viewAllLayout: {
    height: 16,
    position: "absolute",
  },
  sampleNameTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    fontWeight:"700",
    color: Color.colorGray,
    textAlign: "left",
  },
  descriptionTypo: {
    color: Color.colorBlack,
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  testimonialFrameLayout: {
    height: 128,
    width: 336,
    left: 0,
    position: "absolute",
  },
  childFrameShadowBox: {
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhite,
  },
  calendarPosition: {
    left: "28.27%",
    top: "50%",
    position: "absolute",
  },
  ratingClr: {
    opacity: 0.3,
    color: Color.colorDarkslategray,
    letterSpacing: 1,
    textAlign: "left",
  },
  photoIconLayout: {
    height: 64,
    width: 64,
    borderRadius: Border.br_3xs,
  },
  iconLayout3: {
    height: 33,
    width: 53,
    position: "absolute",
  },
  parentPosition: {
    left: 10,
    position: "absolute",
  },
  text1Typo: {
    position: "absolute",
  },
  menu1Position: {
    width: 147,
    height: 171,
    left: 0,
    top: 0,
    position: "absolute",
  },
  spacyTypo: {
    top: 112,
    lineHeight: 20,
    fontWeight:"bold",
    fontSize: FontSize.size_base,
    color: Color.colorGray,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    top: 140,
    opacity: 0.5,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: 71,
    width: 71,
    position: "absolute",
  },
  menuChildLayout: {
    width: 145,
    height: 171,
    top: 0,
    position: "absolute",
  },
  rating1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
    top: 440,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  photoRestaurantIcon: {
    height: 442,
    width: 412,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    top: 0,
  },
  scroollTools: {
    top: 19,
    left: 160,
    borderRadius: 20,
    backgroundColor: "#fef6ed",
    width: 58,
    height: 5,
    position: "absolute",
  },
  frame: {
    top: 287,
  },
  rectangle: {
    height: 34,
    width: 76,
    position: "absolute",
  },
  popular: {
    top: 10,
    left: 17,
    textAlign: "left",
    fontWeight:"600",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  popularStatus: {
    top: 332,
    left: 30,
  },
  iconLoveChild: {
    backgroundColor: "#ff1d1d",
    width: 34,
    opacity: 0.1,
    borderRadius: Border.br_lg_5,
    left: 0,
    top: 0,
  },
  heartIcon: {
    top: 9,
    left: 9,
    width: 16,
    overflow: "hidden",
  },
  iconLove: {
    left: 312,
    top: 331,
    width: 34,
  },
  iconLocation: {
    left: 268,
    top: 331,
    width: 34,
  },
  restaurantName: {
    fontSize: 27,
    lineHeight: 35,
    color: Color.colorGray,
    fontWeight:"bold",
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  popularMenu: {
    top: 203,
    position: "absolute",
    left: 0,
  },
  testimonials: {
    top: 434,
    position: "absolute",
    left: 0,
  },
  description: {
    top: 95,
    width: 313,
    left: 0,
  },
  text: {
    top: 385,
    left: 33,
    height: 454,
    width: 313,
    position: "absolute",
  },
  testimonialFrameChild: {
    height: 128,
    width: 336,
    left: 0,
    position: "absolute",
    top: 0,
  },
  sampleName: {
    marginTop: -53,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    color: Color.colorGray,
    textAlign: "left",
  },
  calendar: {
    marginTop: -33,
    left: "28.27%",
    top: "50%",
    position: "absolute",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray,
    letterSpacing: 1,
  },
  photoProfileIcon: {
    top: 870,
    left: 30,
    position: "absolute",
  },
  sampleTestimonial: {
    top: 65,
    left: 95,
    width: 213,
  },
  iconStarChild: {
    backgroundColor: "transparent",
    opacity: 0.1,
    borderRadius: Border.br_lg_5,
    left: 0,
    top: 0,
  },
  text1: {
    left: 23,
    fontSize: FontSize.size_base,
    lineHeight: 29,
    textAlign: "left",
    top: 0,
  },
  iconStar1: {
    height: "54.66%",
    width: "50.51%",
    top: "17.24%",
    right: "49.49%",
    bottom: "28.1%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parent: {
    top: 2,
    width: 33,
    height: 29,
  },
  iconStar: {
    top: 15,
    left: 259,
  },
  testimonialFrame: {
    top: 0,
  },
  testimonialFrameItem: {
    height: 128,
    width: 336,
    left: 0,
    position: "absolute",
    top: 0,
  },
  photoProfileIcon1: {
    top: 11,
    height: 64,
    width: 64,
    borderRadius: Border.br_3xs,
  },
  testimonialFrame1: {
    top: 148,
  },
  testimonialList: {
    top: 859,
    height: 276,
    width: 336,
    left: 20,
    position: "absolute",
  },
  menu1Child: {
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhite,
  },
  spacyFreshCrab: {
    left: 14,
  },
  text3: {
    left: 61,
    opacity: 0.5,
  },
  image35Icon: {
    top: 21,
    left: 32,
    width: 91,
    height: 91,
    opacity: 0.5,
    position: "absolute",
  },
  image34Icon: {
    left: 38,
    top: 25,
    height: 71,
    width: 71,
  },
  menu2Child: {
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  spacyFreshCrab1: {
    left: 13,
  },
  text4: {
    left: 62,
    opacity: 0.5,
  },
  image32Icon: {
    left: 37,
    top: 25,
    height: 71,
    width: 71,
  },
  menu2: {
    left: 167,
  },
  menu3Child: {
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  image33Icon1: {
    top: 659,
    left: 394,
    opacity: 0.5,
  },
  image32Icon1: {
    top: 653,
    left: 389,
  },
  menu3: {
    left: 332,
  },
  menuList: {
    top: 612,
    width: 477,
    height: 171,
    left: 20,
    position: "absolute",
  },
  viewAll1: {
    color: "#ff7c32",
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  viewAll: {
    top: 591,
    left: 301,
    width: 53,
  },
  iconMapPin: {
    overflow: "hidden",
  },
  rating: {
    fontSize: FontSize.size_sm,
    marginLeft: 10,
  },
  waysInKm: {
    left: 30,
  },
  rating1: {
    left: 123,
  },
  detailProduct: {
    borderRadius: 20,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default DetailProduct;
