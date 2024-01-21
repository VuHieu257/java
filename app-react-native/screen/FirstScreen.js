import * as React from "react";
// import { Image } from "expo-image";
import { StyleSheet, Text, View,Image } from "react-native";
// import { FontFamily } from "../GlobalStyles";


const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.onboarding}>
    <Image
      style={[styles.patternIcon, styles.iconPosition]}
      contentFit="cover"
      source={require("../assets/firstpage/pattern.png")}
    />
      <Image
      style={[styles.patternIcon, styles.iconPosition]}
      contentFit="cover"
      
    />
    <View style={[styles.logo, styles.logoLayout]}>
      <Image
        style={[styles.logoIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/firstpage/logo.png")}
      />
      <View style={[styles.appName, styles.logoLayout]}>
        <Text style={[styles.foodninja, styles.foodninjaFlexBox]}>
          F&D
        </Text>
        <Text style={[styles.delieverFavoriteFood, styles.foodninjaFlexBox]}>
            Deliever Favorite Food and Drinks
            {/* Cung Cấp món ăn và đồ uống yêu thích      */}
        </Text>
      </View>
    </View>
  </View>
  );
};
const styles = StyleSheet.create({
    iconPosition: {
      position: "absolute",
      top: 0,
    },
    logoLayout: {
      width: 300,
      position: "absolute",
    },
    foodninjaFlexBox: {
      textAlign: "left",
      letterSpacing: 1,
      position: "absolute",
    },
    patternIcon: {
      width: 450,
      left: 0,
      top: 0,
      height: 350,
    },
    logoIcon: {
      left: 25,
      width: 195,
      height: 139,
      top: 0,
    },
    foodninja: {
      fontSize: 37,
      fontWeight: 'bold',
      // fontFamily: FontFamily.vigaRegular,
      left: 60,
      color:'#28ed70',
    },
    delieverFavoriteFood: {
      top: 48,
      right:70,
      fontSize: 15,
      fontWeight: "bold",
      // fontFamily: FontFamily.interSemiBold,
      color: "#09051c",
    },
    appName: {
      top: 139,
      height: 64,
      left: 30,
    },
    logo: {
      top: 304,
      left: 83,
      height: 203,
     
    },
    onboarding: {
      borderRadius: 20,
      backgroundColor: "#fff",
      flex: 1,
      width: "100%",
      overflow: "hidden",
    },
  });

export default FirstScreen;



// <SafeAreaView style={{ flex: 1 }}>
// <View style={{ flex: 1}}>
// <ImageBackground style={{flex:1}}
//     source={require('../assets/Rectangle2.jpg')}>
      
// </ImageBackground>

//  </View>
// {/* <View style={{ flex: 1, padding: 16 }}>
//   <View
//     style={{
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}>
//     <Text
//       style={{
//         fontSize: 25,
//         textAlign: 'center',
//         marginBottom: 16
//       }}>
//       This is Third Page of the App {'\n'} {route.params.someParam}
//     </Text>
//     { route.params.someParam != 'reset' ?
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       :null
//     }
//     <Button
//       onPress={() => navigation.navigate('SecondPage')}
//       title="Go to Second Page"
//     />
//     <Button
//       title="Reset navigator to First Page"
//       onPress={() =>
//         navigation.reset({
//           index: 0,
//           routes: [
//             {
//               name: 'FirstPage',
//               params: { someParam: 'reset' },
//             },
//           ],
//         })
//       }
//     />
//   </View>
//   <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
//     Navigate Between Screens using{'\n'}React Navigation
//   </Text>
//   <Text
//     style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
//     www.aboutreact.com
//   </Text>
// </View> */}
// </SafeAreaView>