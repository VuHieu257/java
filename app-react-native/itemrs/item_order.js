import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize } from "../screen/GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
const ItemOrder = ({
  // goProduct,
  imageSource,
  textContent,
  price,
  quantity,
  id,
}) => {
  const [orderData, setOrderData] = useState([]);
  const [quantitysp, setQuantitysp] = useState("");
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    const getOrderData = async () => {
      try {
        const cartData = await AsyncStorage.getItem("cart");
        const products = JSON.parse(cartData);
        setQuantitysp(quantity);
        setOrderData(products);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu đơn đặt hàng:", error);
      }
    };
    // Gọi hàm để lấy dữ liệu khi màn hình được tạo
    getOrderData();
  }, []);
  const increaseQuantity = (productId) => {
    // Tăng số lượng sản phẩm
    const existingProduct = orderData.find((item) => item.id === productId);
    existingProduct.quantity += 1;
    // console.log(existingProduct.quantity);
    // console.log(orderData);
    setQuantitysp(existingProduct.quantity);
    AsyncStorage.setItem("cart", JSON.stringify(orderData));
    setLoad(Date.now());
  };

  const decreaseQuantity = (productId) => {
    // Giảm số lượng sản phẩm, không thể giảm dưới 1
    const existingProduct = orderData.find((item) => item.id === productId);
    if (existingProduct.quantity > 1) {
      existingProduct.quantity -= 1;
      // console.log(existingProduct.quantity);
      // console.log(orderData);
      setQuantitysp(existingProduct.quantity);
      AsyncStorage.setItem("cart", JSON.stringify(orderData));
      setLoad(Date.now());
    } else {
      alert("không thể giảm nữa");
    }
  };

  return (
    <View style={[styles.menu1, styles.menuLayout]}>
      <View style={[styles.frame2, styles.frameShadowBox]} />
      <Text style={styles.menuName}>{textContent}</Text>
      <Text style={[styles.restaurantName, styles.amountPosition]}>
        Waroenk kita
      </Text>
      <Text style={[styles.price, styles.priceTypo]}>{price}đ</Text>
      <Image
        style={styles.menuPhotoIcon}
        contentFit="cover"
        // source={require("../assets/firstpage/secondpage/menuphoto3.png")}
        source={{
          uri: imageSource,
        }}
      />
      <View style={styles.amountSetting}>
        <TouchableOpacity onPress={() => decreaseQuantity(id)}>
          <View style={styles.iconMinus}>
            <LinearGradient
              style={[styles.rectangle, styles.rectanglePosition]}
              locations={[0, 1]}
              colors={["#53e88b", "#15be77"]}
            />
            <Image
              // style={[styles.pathIcon, styles.pathIconLayout]}
              contentFit="cover"
              source={require("../assets/firstpage/secondpage/iconminus.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => increaseQuantity(id)}>
          <View style={[styles.iconPlus, styles.iconPlusPosition]}>
            <LinearGradient
              style={[styles.rectangleCopy, styles.rectangleLayout]}
              locations={[0, 1]}
              colors={["#53e88b", "#15be77"]}
            />
            <Image
              // style={[styles.pathIcon1, styles.pathIconLayout]}
              contentFit="cover"
              source={require("../assets/firstpage/secondpage/iconplus.png")}
            />
          </View>
        </TouchableOpacity>
        <Text style={[styles.amount, styles.amountPosition]}>{quantitysp}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  patternIconPosition: {
    left: 0,
    top: 0,
  },
  textPosition: {
    left: "6.67%",
    position: "absolute",
  },
  priceTypo: {
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  menuListLayout: {
    width: 347,
    left: 34,
  },
  menuLayout: {
    height: 103,
    width: 347,
    left: 4,
    marginVertical: 10,
  },
  frameShadowBox: {
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    width: 347,
    left: 0,
    top: 0,
  },
  amountPosition: {
    letterSpacing: 1,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    opacity: 0.1,
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  pathIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPlusPosition: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent",
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
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  deliveryPosition: {
    marginTop: -26.5,
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  subPosition: {
    marginTop: -47.5,
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
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
    top: "50%",
    position: "absolute",
  },
  rectangle4Layout: {
    height: 57,
    width: 325,
    position: "absolute",
  },
  patternIcon: {
    width: 375,
    position: "absolute",
    height: 812,
  },
  tiitle: {
    marginTop: -16.5,
    fontSize: 27,
    lineHeight: 33,
    fontWeight: "bold",
    color: Color.colorGray_300,
    textAlign: "left",
    left: "0%",
  },
  text: {
    marginTop: -304,
    width: "42.67%",
    right: "50.67%",
    height: 33,
    top: "50%",
  },
  frame: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    height: 103,
    position: "absolute",
  },
  menuName: {
    marginTop: -33.5,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    left: "26.93%",
    textAlign: "left",
    color: Color.colorGray_300,
    top: "50%",
    position: "absolute",
  },
  restaurantName: {
    marginTop: -9.5,
    color: Color.colorDarkslategray,
    opacity: 0.3,
    fontSize: FontSize.size_sm,
    letterSpacing: 1,
    left: "26.93%",
  },
  price: {
    marginTop: 12.5,
    left: "27.06%",
    fontSize: FontSize.size_lgi,
    lineHeight: 25,
  },
  menuPhotoIcon: {
    top: 14,
    left: 11,
    borderRadius: Border.br_base,
    width: 75,
    height: 75,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: "transparent",
    borderRadius: Border.br_5xs,
  },
  pathIcon: {
    height: "5.49%",
    top: "47.92%",
    bottom: "46.59%",
    left: "31.25%",
    right: "30.29%",
    width: "38.46%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconMinus: {
    right: "71.74%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "28.26%",
    left: "0%",
    position: "absolute",
  },
  rectangleCopy: {
    backgroundColor: "transparent",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  pathIcon1: {
    height: "38.46%",
    top: "30.77%",
    bottom: "30.77%",
    left: "31.25%",
    right: "30.29%",
    width: "38.46%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconPlus: {
    left: "71.74%",
    width: "28.26%",
    right: "0%",
  },
  amount: {
    marginTop: -11,
    left: "45.65%",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.colorGray_200,
    opacity: 0.7,
  },
  amountSetting: {
    top: 46,
    left: 244,
    width: 92,
    height: 26,
    position: "absolute",
    overflow: "hidden",
  },
  menu3: {
    top: 246,
  },
  frame1: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    height: 103,
    position: "absolute",
  },
  menu2: {
    top: 123,
  },
  frame2: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    height: 103,
    position: "absolute",
  },
  menu1: {
    top: 0,
    height: 103,
  },
  menuList: {
    top: 175,
    height: 349,
    position: "absolute",
  },
  rectangle3: {
    backgroundColor: "#f9a84d",
    borderRadius: Border.br_mini,
  },
  vectorIcon: {
    height: "36.36%",
    width: "22.22%",
    top: "31.11%",
    right: "40%",
    bottom: "32.52%",
    left: "37.78%",
  },
  group: {
    height: "5.54%",
    width: "12%",
    top: "4.68%",
    right: "81.33%",
    bottom: "89.78%",
  },
  priceInfoChild: {
    backgroundColor: "transparent",
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_3xl,
    width: 347,
    left: 20,
    top: 0,
    height: 206,
  },
  patternIcon1: {
    width: 346,
    left: 20,
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
  text1: {
    marginTop: -83,
    width: "85.01%",
    right: "6.63%",
    left: "13.36%",
    height: 95,
    top: "50%",
    position: "absolute",
  },
  rectangle4: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    backgroundColor: Color.colorskyblue,
  },
  checkOut: {
    marginTop: -6.5,
    left: "32.62%",
    fontSize: FontSize.size_sm,
    letterSpacing: 1,
  },
  ctaPlaceOrderButton: {
    top: 137,
    left: 32,
  },
  priceInfo: {
    top: 640,
    width: 347,
    left: 14,
  },
  orderDetails: {
    borderRadius: 20,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});
export default ItemOrder;
