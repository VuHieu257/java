import React, { useState } from "react";
import { StyleSheet, View, Text,Image,TextInput,TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../screen/GlobalStyles";
import { POST_ADD } from "../api/apiService";

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await POST_ADD("users", {
        "fullName": "null",
        "adress": "Ho Chi Minh",
        "phone": "123456789",
        "photoUser": "null",
        "userName": username,
        "password": password
      });

      if (response && response.data) {
        // Xử lý kết quả đăng ký thành công
        alert("Registration successful:", response.data);
        navigation.navigate('SignInScreen');
      } else {
        // Xử lý kết quả đăng ký không thành công
        alert("Registration failed:", response);
      }
    } catch (error) {
      // Xử lý lỗi
      alert("Error during registration:", error);
    }
  };
  return (
    <View style={styles.signIn}>
    <Image
      style={[styles.patternIcon, styles.iconPosition]}
      contentFit="cover"
      source={require("../assets/firstpage/pattern.png")}
      />
      <Image
      style={[styles.patternIcon, styles.iconPosition]}
      contentFit="cover"
      source={require("../assets/firstpage/Gradient.png")}/>
    <TouchableOpacity style={styles.ctaButton} onPress={handleRegister}>
      <LinearGradient
        style={styles.rectangle}
        locations={[0, 1]}
        colors={["#53e88b", "#15be77"]}
      />
      <View style={styles.createAccountWrapper}>
        <Text style={styles.createAccount}>Create Account</Text>
      </View>
    </TouchableOpacity>
      <View style={[styles.viewInput]}>
        <TextInput style={[styles.txtinput, styles.rectangleIconShadowBox]} placeholder="UserName"
        onChangeText={(text) => setUsername(text)} value={username}
        />
        <Image
            style={styles.iconprofile}
            contentFit="cover"
            source={require("../assets/firstpage/iconlybulkprofile.png")}
          />
      </View>
      {/* <View style={[styles.viewInputmg]}>
        <TextInput style={[styles.txtinput1, styles.rectangleIconShadowBox]} placeholder="Email"/>
        <Image
            style={styles.iconprofile}
            contentFit="cover"
            source={require("../assets/firstpage/iconlybulkmessage.png")}
          />
      </View>   */}
      <View style={[styles.viewInputpw]}>
        <TextInput style={[styles.txtinput2, styles.rectangleIconShadowBox]} placeholder="PassWord"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}/>
        <Image
            style={styles.iconprofile}
            contentFit="cover"
            source={require("../assets/firstpage/iconlybulklock.png")}

        />
          <Image
            style={styles.iconlybulkshow}
            contentFit="cover"
            source={require("../assets/firstpage/iconlybulkshow.png")}
          />
      </View>  
      
    <View style={[styles.checkList, styles.formPosition1]}>
      <View style={[styles.keepMySign, styles.keepMySignPosition]}>
        <Text style={[styles.byTappingCreate, styles.tappingTypo]}>
          Keep Me Signed In
        </Text>
        <View style={styles.checkIconPosition}>
          <LinearGradient
            style={[styles.checkListIconChild, styles.checkIconPosition]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          />
          <Image
            style={styles.checkIcon}
            contentFit="cover"
            source={require("../assets/firstpage/check.png")}
          />
        </View>
      </View>
      <View style={[styles.emailMeAboutPricing, styles.keepMySignPosition]}>
        <Text style={[styles.byTappingCreate1, styles.tappingTypo]}>
          Email Me About Special Pricing
        </Text>
        <View style={styles.checkIconPosition}>
          <LinearGradient
            style={[styles.checkListIconItem, styles.checkIconPosition]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          />
          <Image
            style={styles.checkIcon}
            contentFit="cover"
            source={require("../assets/firstpage/check1.png")}
          />
        </View>
      </View>
    </View>
    <View style={styles.text}>
      <Text
        style={[styles.signUpFor, styles.signUpForClr]}
      >{`Sign Up For Free `}</Text>
      <Text style={styles.byTappingCreate2} onPress={() => navigation.navigate('SignInScreen')}>already have an account?</Text>
    </View>
    <View style={[styles.logo, styles.logoLayout]}>
      <Image
        style={[styles.image44Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/firstpage/logo.png")}
      />
      <View style={[styles.foodninjaParent, styles.logoLayout]}>
        <Text style={[styles.foodninja]}>F&D</Text>
        <Text style={[styles.delieverFavoriteFood, styles.signUpForClr]}>
          Deliever Favorite Food
        </Text>
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
    iconPosition: {
      top: 0,
      position: "absolute",
    },
    formPosition1: {
      left: "6.67%",
      position: "absolute",
    },
    formPosition: {
      height: "29.23%",
      left: "0%",
      right: "0%",
      position: "absolute",
      width: "100%",
    },
    rectangleIconShadowBox: {
      borderWidth: 3,
      // borderColor: Color.colorWhitesmoke,
      // borderStyle: "solid",
      // shadowOpacity: 1,
      // elevation: 6,
      // shadowRadius: 50,
      // shadowOffset: {
      //   width: 12,
      //   height: 26,
      // },
      // shadowColor: "rgba(90, 108, 234, 0.07)",
      // borderRadius: Border.br_mini,
      borderRadius: 20,
      borderColor:"#1e9ceb",
  },
    emailFlexBox: {
      letterSpacing: 1,
      textAlign: "center",
      position: "absolute",
    },
    keepMySignPosition: {
      height: 22,
      top: "50%",
      left: "0%",
      position: "absolute",
    },
    tappingTypo: {
      color: Color.colorBlack,
      fontWeight:"600",
      marginTop: -10,
      textAlign: "center",
      lineHeight: 20,
      fontSize: 13,
      opacity: 0.5,
      top: "50%",
      position: "absolute",
    },
    checkIconPosition: {
      width: 22,
      height: 22,
      left: 0,
      top: 0,
      position: "absolute",
    },
    signUpForClr: {
      color: Color.colorGray,
      position: "absolute",
    },
    logoLayout: {
      width: 300,
      position: "absolute",
    },
    patternIcon: {
      width: 410,
      left: 0,
      height: 312,
    },
    rectangle: {
      backgroundColor: "transparent",
      borderRadius: Border.br_mini,
      left: "0%",
      bottom: "0%",
      right: "0%",
      top: "0%",
      height: "100%",
      position: "absolute",
      width: "100%",
    },
    createAccount: {
      fontSize: 16,
      lineHeight: 21,
      color: Color.colorWhite,
      textAlign: "left",
      top: "50%",
      marginTop: -10.5,
      left: "9%",
      position: "absolute",
    },
    createAccountWrapper: {
      width: "69.71%",
      right: "14.86%",
      left: "15.43%",
      height: 21,
      top: "50%",
      marginTop: -10.5,
      position: "absolute",
    },
    ctaButton: {
      height: "7.02%",
      width: "46.67%",
      top: "70.47%",
      right: "26.67%",
      bottom: "7.51%",
      left: "26.67%",
      position: "absolute",
    },
    rectangle1: {
      left: "0%",
      height: "100%",
      borderColor: Color.colorWhitesmoke,
      borderStyle: "solid",
      shadowOpacity: 1,
      elevation: 50,
      shadowRadius: 50,
      shadowOffset: {
        width: 12,
        height: 26,
      },
      shadowColor: "rgba(90, 108, 234, 0.07)",
      bottom: "0%",
      right: "0%",
      top: "0%",
      position: "absolute",
      width: "100%",
      fontSize: 16,
      letterSpacing: 1,
      backgroundColor: Color.colorWhite,
      paddingHorizontal:60,
    },
    email: {
      marginTop: -6.5,
      left: "18.46%",
      fontSize: FontSize.size_sm,
      color: Color.colorDarkslategray,
      opacity: 0.3,
      top: "50%",
      position: "absolute",
  },
  viewInput: {
    top: 350,
  },
  viewInputmg: {
    top:370,
  },
  viewInputpw: {
    top: 370,
    },
  txtinput: {
    width: "87%",
    height:60,
    fontSize: 15,
    backgroundColor: "#fff",
    borderRadius: 40,
    marginHorizontal:25,
    paddingHorizontal: 60,
   
  },
  txtinput1: {
    width: "87%",
    height:60,
    fontSize: 15,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginHorizontal:25,
    paddingHorizontal: 60,
  },
  txtinput2: {
    width: "87%",
    height:60,
    fontSize: 15,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginHorizontal:25,
    paddingHorizontal: 60,
  },
    iconlybulkprofile: {
      right: "86.46%",
      left: "6.15%",
      opacity: 0.8,
      maxHeight: "100%",
      maxWidth: "100%",
      bottom: "28.07%",
      top: "29.82%",
      width: "6.38%",
      height: "53%",
      position: "absolute",
      overflow: "hidden",
  },
  iconprofile: {
    right: "86.46%",
    left: "11.15%",
    opacity: 0.8,
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "28.07%",
    // top: 414,
    width: "6.38%",
    height: "53%",
    position: "absolute",
    overflow: "hidden",
  },
    nameForm: {
      bottom: "70.77%",
      top: "0%",
      height: "29.23%",
    },
    rectangle2: {
      left: "0%",
      height: "100%",
      borderColor: Color.colorWhitesmoke,
      borderStyle: "solid",
      shadowOpacity: 1,
      elevation: 50,
      shadowRadius: 50,
      shadowOffset: {
        width: 12,
        height: 26,
      },
      shadowColor: "rgba(90, 108, 234, 0.07)",
      bottom: "0%",
      right: "0%",
      top: "0%",
      position: "absolute",
      width: "100%",
      fontSize: 16,
      letterSpacing: 1,
      backgroundColor: Color.colorWhite,
      paddingHorizontal:60,
    },
    emailForm: {
      top: "40%",
      bottom: "35.38%",
    },
    rectangle3: {
      left: "0%",
      height: "100%",
      borderColor: Color.colorWhitesmoke,
      borderStyle: "solid",
      shadowOpacity: 1,
      elevation: 50,
      shadowRadius: 50,
      shadowOffset: {
        width: 12,
        height: 26,
      },
      shadowColor: "rgba(90, 108, 234, 0.07)",
      bottom: "0%",
      right: "0%",
      top: "0%",
      position: "absolute",
      width: "100%",
      fontSize: 16,
      letterSpacing: 1,
      backgroundColor: Color.colorWhite,
      paddingHorizontal:60,
    },
    iconlybulkshow: {
      right: "6.15%",
      left: "80.46%",
      maxHeight: "100%",
      maxWidth: "100%",
      bottom: "28.07%",
      top: "29.82%",
      width: "8.38%",
      height: "45.11%",
      position: "absolute",
      overflow: "hidden",
    },
    passwordForm: {
      top: "80%",
      bottom: "0%",
      height: "29.23%",
    },
    form: {
      height: 196,
      width: "86.67%",
      top: "37.92%",
      right: "6.67%",
      bottom: "29.06%",
    },
    byTappingCreate: {
      left: "22.73%",
      textAlign: "center",
    },
    checkListIconChild: {
      borderWidth: 1,
      borderColor: Color.colorWhitesmoke,
      borderStyle: "solid",
      shadowOpacity: 1,
      elevation: 50,
      shadowRadius: 50,
      shadowOffset: {
        width: 12,
        height: 26,
      },
      shadowColor: "rgba(90, 108, 234, 0.07)",
      borderRadius: Border.br_mini,
      backgroundColor: "transparent",
    },
    checkIcon: {
      top: 5,
      left: 5,
      width: 12,
      height: 12,
      position: "absolute",
      overflow: "hidden",
    },
    keepMySign: {
      marginTop: -28,
      width: "66%",
      right: "34%",
    },
    byTappingCreate1: {
      left: "15%",
      textAlign: "center",
    },
    checkListIconItem: {
      borderWidth: 1,
      borderColor: Color.colorWhitesmoke,
      borderStyle: "solid",
      shadowOpacity: 1,
      elevation: 50,
      shadowRadius: 50,
      shadowOffset: {
        width: 12,
        height: 26,
      },
      shadowColor: "rgba(90, 108, 234, 0.07)",
      borderRadius: Border.br_mini,
      backgroundColor: "transparent",
    },
    emailMeAboutPricing: {
      marginTop: 6,
      right: "0%",
      height: 22,
      width: "100%",
    },
    checkList: {
      marginTop: 159,
      width: "53.33%",
      right: "40%",
      height: 56,
      top: "40%",
      
    },
    signUpFor: {
      fontSize: 24,
      lineHeight: 26,
      textAlign: "center",
      fontWeight:"bold",
      color: Color.colorGray,
      left: 7,
      top: -10,
    },
    byTappingCreate2: {
      top: "40%",
      left: "14%",
      fontSize: 14,
      lineHeight: 20,
      marginTop: 200,
      color:"#28ed70",
      textAlign: "center",
      textDecorationLine: 'underline',
      position: "absolute",
    },
    text: {
      top: 300,
      left: 107,
      width: 181,
      height: 476,
      position: "absolute",
      
    },
    image44Icon: {
      left: 10,
      width: 175,
      height: 139,
    },
    foodninja: {
      fontSize: 40,
      fontWeight:'bold',
      color:'#28ed70',
      left: 55,
      top: 0,
    },
    delieverFavoriteFood: {
      top: 48,
      left: -15,
      fontSize: 25,
      fontWeight: "700",
      color: Color.colorGray,
    },
    foodninjaParent: {
      top: 139,
      height: 64,
      // left: 10,
    },
    logo: {
      top: 49,
      left: 100,
      height: 201,
    },
    signIn: {
      borderRadius: 20,
      flex: 1,
      overflow: "hidden",
      height: 812,
      width: "100%",
      backgroundColor: Color.colorWhite,
      // backgroundColor: Color.colorskyblue,

    },
  });

export default SignUp;
