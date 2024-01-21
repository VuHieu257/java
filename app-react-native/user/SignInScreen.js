import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Color, FontFamily } from "../screen/GlobalStyles";
import { TouchableOpacity } from "react-native";
import { GET_ALL } from "../api/apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignInScreen = ({ navigation }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    GET_ALL("users")
      .then((response) => {
        const responseData = response.data;
        // console.log(responseData);
        // console.log(responseData.content);
        // if (responseData && Array.isArray(responseData.content))
        // if (responseData != null && Array.isArray(responseData))
        if (responseData && Array.isArray(responseData.content))
          setUserData(responseData);
        else
          console.error(
            "Data received from the API is not in a supported format."
          );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [isPasswordVisible]);
  const onLogin = async () => {
    await AsyncStorage.setItem("token", username);
    await AsyncStorage.setItem("listUser", JSON.stringify(userData));
    const enteredUser = username;
    const enteredPassword = password;
    console.log(userData);
    // userData.forEach((users) => {
    // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (
      (enteredUser === "vuhieu" && enteredPassword === "1") ||
      (enteredUser === "hieu" && enteredPassword === "1")
    ) {
      alert("Đăng nhập thành công.");
      navigation.navigate("Home");
    } else {
      console.log("lỗi");
    }
    // });
  };

  // const tokenLogin = async () => {
  //   const value = await AsyncStorage.getItem("token");
  //   if (value !== null) {
  //     navigation.navigate("Home");
  //   } else {
  //     return null;
  //   }
  // };
  // tokenLogin();
  const goForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  return (
    <View style={styles.signUp}>
      <Image
        style={styles.patternIcon}
        contentFit="cover"
        source={require("../assets/firstpage/Pattern11-black.png")}
      />
      <Image
        style={styles.patternIcon}
        contentFit="cover"
        source={require("../assets/firstpage/Gradient.png")}
      />
      <View style={[styles.logo]}>
        <Image
          style={styles.image44Icon}
          contentFit="cover"
          source={require("../assets/firstpage/logo.png")}
        />
        <View>
          <Text style={[styles.foodninja]}>F&D</Text>
          <Text style={[styles.delieverFavoriteFood]}>
            Deliever Favorite Food
          </Text>
        </View>
      </View>
      <Text style={styles.txtLogin}>Login To Your Account</Text>
      <KeyboardAvoidingView
        style={{
          width: "100%",
          height: 150,
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <TextInput
          onChangeText={(value) => setUsername(value)}
          placeholder="Email or UserName"
          style={{
            borderWidth: 3,
            width: "80%",
            height: "38%",
            borderRadius: 20,
            borderColor: "#1e9ceb",
            marginVertical: 10,
            paddingLeft: 20,
          }}
        ></TextInput>
        <TextInput
          onChangeText={(value) => setPassword(value)}
          placeholder="PassWord"
          style={{
            borderWidth: 3,
            width: "80%",
            height: "38%",
            borderRadius: 20,
            borderColor: "#1e9ceb",
            marginVertical: 10,
            paddingLeft: 20,
          }}
        ></TextInput>
      </KeyboardAvoidingView>
      <View
        onPress={() => navigation.navigate("goForgotPassword")}
        style={{
          margin: 5,
        }}
      >
        <Text
          onPress={() => navigation.navigate("goForgotPassword")}
          style={{
            color: "#28ed70",
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          Forgot Your Password?
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.ctaButton, styles.rectangleShadowBox]}
        onPress={onLogin}
      >
        <Text style={styles.createAccount}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  patternIcon: {
    width: 410,
    left: 0,
    top: 0,
    position: "absolute",
    height: 312,
  },
  signUp: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
    height: 812,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: Color.colorskyblue,
    // backgroundColor:"rgba()",
  },
  logo: {
    // top:-100,
    // backgroundColor: "#676767",
  },
  image44Icon: {
    marginHorizontal: 30,
    width: 200,
  },
  foodninja: {
    marginVertical: 8,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#28ed70",
  },
  delieverFavoriteFood: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  txtLogin: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  ctaButton: {
    top: 50,
    backgroundColor: "#28ed70",
    width: "37.6%",
    height: "7.02%",
    borderRadius: 20,
  },
  createAccount: {
    textAlign: "center",
    // top: 20,
    marginVertical: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  rectangleShadowBox: {
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    shadowColor: "rgba(90, 108, 234, 0.07)",
    shadowOpacity: 50,
    elevation: 8,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
  },
});

export default SignInScreen;
