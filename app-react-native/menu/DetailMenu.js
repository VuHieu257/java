import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, Border } from "../screen/GlobalStyles";
import { GET_ID, GET_IMD } from "../api/apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ItemOrder from "../itemrs/item_order";
// import { useCart } from "../order/CartContext";
const ProductDetail = ({ navigation, route }) => {
  const id = route.params.item.id;
  const title = route.params.item.title;
  const photo = route.params.item.photo;
  const price = route.params.item.price;
  const imgUrl = GET_IMD("products", route.params.item.photo);
  const addToCart = async () => {
    // var quantity = 1;
    let formdata = {
      id,
      title,
      photo,
      price,
      // quantity,
    };
    try {
      // Lấy thông tin giỏ hàng từ AsyncStorage
      const existingCart = await AsyncStorage.getItem("cart");

      // Nếu giỏ hàng đã tồn tại
      if (existingCart != null) {
        // Chuyển đổi chuỗi JSON thành đối tượng
        const cart = JSON.parse(existingCart);

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const existingProduct = cart.find((item) => item.id === id);

        if (existingProduct) {
          // Nếu sản phẩm đã tồn tại, tăng số lượng
          existingProduct.quantity += 1;
        } else {
          // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
          // cart.push({ id, title, img, price, quantity: 1 });
          cart.push({ ...formdata, quantity: 1 });
        }
        // Lưu giỏ hàng mới vào AsyncStorage
        await AsyncStorage.setItem("cart", JSON.stringify(cart));
      } else {
        // Nếu giỏ hàng chưa tồn tại, tạo mới giỏ hàng
        const newCart = [{ ...formdata, quantity: 1 }];
        // const newCart = [{ ...product, quantity: 1 }];

        // Lưu giỏ hàng mới vào AsyncStorage
        await AsyncStorage.setItem("cart", JSON.stringify(newCart));
      }
     
      navigation.navigate("Home", { existingCart });
      alert("Sản phẩm đã được thêm vào giỏ hàng.");
      console.log(existingCart);
    } catch (error) {
      alert("Lỗi khi thêm sản phẩm vào giỏ hàng:");
    }
  };

  return (
    <View style={styles.detailMenu}>
      <View style={[styles.photoMenu, styles.photoLayout]}>
        <Image
          style={[styles.photoMenuIcon, styles.iconPosition1]}
          contentFit="cover"
          // source={require("../assets/firstpage/secondpage/photo-menu.png")}
          source={{
            uri: imgUrl,
          }}
          onChangeText={(text) => setPhoto(text)}
          value={imgUrl}
        />
      </View>
      <View style={[styles.frame, styles.frameLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/Rectangle.png")}
        />
        <View style={styles.scroolTool} />
      </View>
      <View style={[styles.popularStatus, styles.rectangleLayout2]}>
        <LinearGradient
          style={[styles.rectangle, styles.rectanglePosition]}
          locations={[0, 1]}
          colors={["#53e88b", "#15be77"]}
        />
        <Text style={[styles.popular, styles.popularTypo]}>Popular</Text>
      </View>
      <View style={[styles.loveIcon, styles.loveIconLayout]}>
        <View style={[styles.loveIconChild, styles.loveIconLayout]} />
        <Image
          style={styles.heartIcon}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/heart.png")}
        />
      </View>
      <Image
        style={[styles.locationIcon, styles.loveIconLayout]}
        contentFit="cover"
        source={require("../assets/firstpage/secondpage/IconLocation.png")}
      />
      <View style={[styles.rating, styles.textPosition]}>
        <Image
          style={styles.iconStar}
          contentFit="cover"
          source={require("../assets/firstpage/secondpage/icon-star.png")}
        />
        <Text style={[styles.rating1, styles.ratingTypo]}>4,8 Rating</Text>
      </View>
      <Text style={[styles.rating2, styles.rating2Position]}>2000+ Order</Text>
      <View style={[styles.text, styles.textPosition]}>
        <Text
          style={[styles.menuName, styles.menuNameTypo]}
          onChangeText={(text) => setTitle(text)}
          value={route.params.item.title}
        >
          {/* {product.title} */}
          {route.params.item.title}
        </Text>
        <Text
          style={{
            left: 235,
            top: 50,
            fontSize: 20,
            color: "#45fc03",
            fontWeight: "bold",
            borderWidth: 1,
            width: 110,
            textAlign: "center",
          }}
          onChangeText={(text) => setPrice(text)}
          value={route.params.item.price}
        >
          {route.params.item.price}đ
        </Text>
        <Text style={[styles.menuDiscription, styles.popularTypo]}>
          {route.params.item.description}
          {`Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum.
        Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.`}
        </Text>
      </View>
      {/* onPress={handleAddToCart} */}
      <TouchableOpacity
        // onPress={() => navigation.navigate("OrderDetails", handleSignUp)}
        onPress={addToCart}
        style={[styles.ctaButton, styles.ctaButtonLayout]}
      >
        <LinearGradient
          style={[styles.rectangle1, styles.ctaButtonLayout]}
          locations={[0, 1]}
          colors={["#53e88b", "#15be77"]}
        />
        <Text style={[styles.checkOut, styles.menuNameTypo]}>Add To Chart</Text>
      </TouchableOpacity>
      <Image
        style={styles.shoppingBag1Icon}
        contentFit="cover"
        source={require("../assets/firstpage/secondpage/shoppingbag-1.png")}
      />
      <TouchableOpacity
        style={[styles.group, styles.textPosition]}
        onPress={() => navigation.goBack()}
      >
        <View style={[styles.rectangle3, styles.rectanglePosition1]} />
        <Image
          style={[styles.vectorIcon, styles.pathIconLayout]}
          contentFit="cover"
          source={require("../assets/firstpage/Path.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    height: "5.54%",
    width: "12%",
    top: "4.68%",
    right: "81.33%",
    bottom: "89.78%",
  },
  textPosition: {
    left: "6.67%",
    position: "absolute",
  },
  rectangle3: {
    backgroundColor: "#f9a84d",
    borderRadius: 20,
  },
  rectanglePosition1: {
    opacity: 0.1,
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
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
  },
  pathIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  photoLayout: {
    height: 442,
    width: 376,
    position: "absolute",
  },
  iconPosition1: {
    left: 1,
    top: 0,
  },
  frameLayout: {
    height: 457,
    width: 412,
    borderRadius: 60,
    position: "absolute",
  },
  rectangleLayout2: {
    height: 34,
    width: 76,
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.linear,
    left: 0,
    top: 0,
  },
  popularTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  loveIconLayout: {
    width: 34,
    height: 34,
    position: "absolute",
  },
  textPosition: {
    left: 33,
    position: "absolute",
  },
  ratingTypo: {
    opacity: 0.3,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  rating2Position: {
    top: "50%",
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
  },
  menuNameTypo: {
    textAlign: "left",
    position: "absolute",
  },
  ctaButtonLayout: {
    height: 57,
    width: 356,
    position: "absolute",
  },
  photoMenuIcon: {
    height: 442,
    width: 412,
    position: "absolute",
  },
  photoMenu: {
    left: -1,
    top: -1,
    height: 442,
    width: 376,
  },
  rectangleIcon: {
    left: 1,
    top: 0,
  },
  scroolTool: {
    top: 19,
    left: 160,
    borderRadius: 12,
    backgroundColor: "#fef6ed",
    width: 58,
    height: 5,
    position: "absolute",
  },
  frame: {
    top: 358,
    left: -1,
  },
  rectangle: {
    opacity: 0.1,
    borderRadius: Border.br_lg_5,
    height: 34,
    width: 76,
    position: "absolute",
  },
  popular: {
    top: 10,
    left: 17,
    lineHeight: 16,
  },
  popularStatus: {
    top: 419,
    left: 30,
  },
  loveIconChild: {
    backgroundColor: "#ff1d1d",
    opacity: 0.1,
    borderRadius: Border.br_lg_5,
    left: 0,
    top: 0,
  },
  heartIcon: {
    top: 9,
    left: 9,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  loveIcon: {
    left: 342,
    top: 418,
    width: 34,
  },
  locationIcon: {
    left: 286,
    top: 418,
    width: 34,
  },
  iconStar: {
    width: 18,
    height: 18,
  },
  rating1: {
    marginLeft: 10,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    opacity: 0.3,
    color: Color.colorDarkslategray,
  },
  rating: {
    top: 563,
    flexDirection: "row",
    alignItems: "center",
  },
  rating2: {
    marginTop: 130,
    left: "44.11%",
    opacity: 0.3,
    color: Color.colorDarkslategray,
    textAlign: "left",
    position: "absolute",
  },
  menuName: {
    fontSize: 27,
    lineHeight: 35,
    color: "#09051c",
    fontWeight: "700",
    width: 296,
    left: 0,
    top: 0,
  },
  menuDiscription: {
    top: 130,
    left: 3,
    lineHeight: 22,
    color: "#000",
    width: 360,
  },
  text: {
    top: 473,
    width: 327,
    height: 394,
  },
  rectangle1: {
    borderRadius: 15,
    shadowColor: "rgba(20, 78, 90, 0.2)",
    shadowOffset: {
      width: 11,
      height: 28,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    backgroundColor: Color.linear,
    left: 0,
    top: 0,
  },
  checkOut: {
    marginTop: -6.5,
    width: "29.23%",
    left: "35.38%",
    color: "#fefeff",
    top: "50%",
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
  },
  ctaButton: {
    top: 738,
    left: 24,
  },
  shoppingBag1Icon: {
    top: 559,
    left: 151,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  detailMenu: {
    left: 0,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ProductDetail;
