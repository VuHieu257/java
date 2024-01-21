import * as React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../screen/GlobalStyles";

const SignupProcess = ({navigation}) => {
  return (
    <View style={styles.signupProcess}>
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
    <View style={styles.iconBack}>
      <View style={[styles.rectangle, styles.tittlePosition]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/firstpage/vector.png")}
      />
    </View>
    <View style={[styles.ctaButton, styles.ctaLayout]}>
      <LinearGradient
        style={[styles.ctaButtonChild, styles.ctaLayout]}
        locations={[0, 1]}
        colors={["#53e88b", "#15be77"]}
      />
      <Text style={[styles.next, styles.tittleFlexBox]}>Next</Text>
    </View>
    <View style={styles.form}>
      <View style={[styles.firstNameForm, styles.nameLayout]}>
        <View style={styles.nameChildShadowBox} />
        <Text style={[styles.firstName, styles.tittleFlexBox]}>
          First Name
        </Text>
      </View>
      <View style={[styles.lastNameForm, styles.nameLayout]}>
        <View style={styles.nameChildShadowBox} />
        <Text style={[styles.firstName, styles.tittleFlexBox]}>
          Last Name
        </Text>
      </View>
      <View style={[styles.mobileNumberForm, styles.nameLayout]}>
        <View style={styles.nameChildShadowBox} />
        <Text style={[styles.firstName, styles.tittleFlexBox]}>
          Mobile Number
        </Text>
      </View>
      <View style={[styles.addressberForm, styles.nameLayout]}>
          <View style={styles.nameChildShadowBox} />
        {/* <TextInput ></TextInput> */}
          <Text style={[styles.firstName, styles.tittleFlexBox]}>
            Address
          </Text>
        <Image
        style={styles.pinLogoIcon}
        contentFit="cover"
        source={require("../assets/firstpage/PinLogo.png")}
      />
      </View>
      <View style={[styles.paymentberForm, styles.paymentLayout,styles.bankleft]}>
        <View style={styles.paymentChildShadowBox} />
        <Text style={styles.paymenttext}> BANK</Text>
        <Image
        style={styles.paymentIcon}
        contentFit="cover"
        source={require("../assets/firstpage/bank.png")}
      />
      </View>
      <View style={[styles.paymentberForm, styles.paymentLayout,styles.payleft]}>
        <View style={styles.paymentChildShadowBox} />
        <Image
        style={styles.paymentpayIcon}
        contentFit="cover"
        source={require("../assets/firstpage/paypal.png")}
      />
      </View>
      <View style={[styles.paymentberForm, styles.paymentLayout]}>
        <View style={styles.paymentChildShadowBox} />
        <Text style={styles.paymenttext}> MOMO</Text>
        <Image
        style={styles.paymentIcon}
        contentFit="cover"
        source={require("../assets/firstpage/MoMo_Logo.png")}
      />
      </View>
    </View>
    <View style={styles.text}>
      <Text style={[styles.subTittle, styles.tittleFlexBox]}>
        This data will be displayed in your account profile for security
      </Text>
      <Text style={[styles.tittle, styles.tittleFlexBox]}>
        Fill in your bio to get started
      </Text>
    </View>
  </View> 
  );
};

const styles = StyleSheet.create({
  tittlePosition: {
    left: "0%",
    width: "100%",
  },
  ctaLayout: {
    height: 57,
    width: 157,
    position: "absolute",
  },
  tittleFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  nameLayout: {
    height: 61,
    width: 347,
    left: 0,
    position: "absolute",
  },
  paymentLayout: {
   height: 61,
   width: 200,
    left: 0,
   position: "absolute",
 },
  patternIcon: {
    width: 410,
    left: 0,
    top: 0,
    position: "absolute",
    height: 312,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: "#f9a84d",
    opacity: 0.1,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  vectorIcon: {
    height: "70%",
    width: "90%",
    top: "15%",
    right: "40%",
    bottom: "32.52%",
    left: "6%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconBack: {
    height: "5.54%",
    width: "12%",
    top: "4.68%",
    right: "81.33%",
    bottom: "89.78%",
    left: "6.67%",
    position: "absolute",
  },
  ctaButtonChild: {
    backgroundColor: Color.linear,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  next: {
    top: 18,
    left: 60,
    fontSize: 16,
    lineHeight: 21,
    color: Color.colorWhite,
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
  },
  ctaButton: {
    top: 695,
    left: 129,
  },
  nameChildShadowBox: {
    shadowOpacity: 0.5,
    elevation: 5,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xl,
    height: 61,
    width: 347,
    left: 0,
    top: 0,
    position: "absolute",
  },
  paymentChildShadowBox: {
   shadowOpacity: 0.5,
   elevation: 3,
   shadowRadius: 50,
   shadowOffset: {
     width: 0,
     height: 0,
   },
   shadowColor: "rgba(90, 108, 234, 0.07)",
   backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3x2,
    borderWidth:0.4,
   height: 50,
   width: 110,
   left: 0,
   top: 0,
   position: "absolute",
 },
  firstName: {
    top: 24,
    left: 20,
    fontSize: FontSize.size_sm,
    letterSpacing: 1,
    fontFamily: FontFamily.bentonSansRegular,
    color: Color.colorDarkslategray,
    opacity: 0.3,
  },
  paymenttext: {
   top: 15,
   left: 41,
   fontSize: 17,
   fontWeight:"bold",
   color: "#110785",
   letterSpacing: 1,
   opacity: 0.3,
 },
  firstNameForm: {
    top: 0,
  },
  lastNameForm: {
    top: 81,
  },
  mobileNumberForm: {
   top: 162,
  },
  addressberForm: {
    top: 243,
  },
  paymentberForm: {
   top: 324,
  },
  bankleft: {
   left:120  
  },
  payleft: {
   left:240  
  },
  pinLogoIcon: {
   top: 15,
   left: 300,
   width: 33,
   height: 33,
   position: "absolute",
  },
  paymentIcon: {
   top: 10,
   left: 10,
   width: 33,
   height: 33,
   position: "absolute",
  },
  paymentpayIcon: {
   top: 14,
   left: 10,
   width: 94,
   height: 25,
   position: "absolute",
  },

  form: {
    top: 252,
    left: 32,
    height: 223,
    width: 347,
    position: "absolute",
  },
  subTittle: {
    top: 85,
    fontSize: 14,
    lineHeight: 22,
    fontWeight:"500",
    fontFamily: FontFamily.bentonSansBook,
    color: "#000",
    width: 239,
    left: 0,
  },
  tittle: {
    marginTop: -64.5,
    top: "50%",
    fontSize: 29,
    lineHeight: 33,
    color: "#09051c",
    fontWeight:"700",
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    left: "0%",
    width: "100%",
  },
  text: {
    top: 103,
    left: 33,
    width: 264,
    height: 129,
    position: "absolute",
  },
  signupProcess: {
    borderRadius: 20,
    backgroundColor: "#fefeff",
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  
  },
});


export default SignupProcess;



// import * as React from "react";
// import { StyleSheet, View, Text,Image } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";

// const SignupProcess = () => {
//   return (
//     <View style={styles.signupProcess}>
//     <Image
//       style={styles.patternIcon}
//       contentFit="cover"
//       source={require("../assets/firstpage/pattern.png")}
//     />
//      <Image
//       style={styles.patternIcon}
//       contentFit="cover"
//       source={require("../assets/firstpage/Gradient.png")}
//     />
//     <View style={styles.iconBack}>
//       <View style={[styles.rectangle, styles.tittlePosition]} />
//       <Image
//         style={styles.vectorIcon}
//         contentFit="cover"
//         source={require("../assets/firstpage/vector.png")}
//       />
//     </View>
//     <View style={[styles.ctaButton, styles.ctaLayout]}>
//       <LinearGradient
//         style={[styles.ctaButtonChild, styles.ctaLayout]}
//         locations={[0, 1]}
//         colors={["#53e88b", "#15be77"]}
//       />
//       <Text style={[styles.next, styles.tittleFlexBox]}>Next</Text>
//     </View>
//     <View style={styles.form}>
//       <View style={[styles.firstNameForm, styles.nameLayout]}>
//         <View style={styles.nameChildShadowBox} />
//         <Text style={[styles.firstName, styles.tittleFlexBox]}>
//           First Name
//         </Text>
//       </View>
//       <View style={[styles.lastNameForm, styles.nameLayout]}>
//         <View style={styles.nameChildShadowBox} />
//         <Text style={[styles.firstName, styles.tittleFlexBox]}>
//           Last Name
//         </Text>
//       </View>
//       <View style={[styles.mobileNumberForm, styles.nameLayout]}>
//         <View style={styles.nameChildShadowBox} />
//         <Text style={[styles.firstName, styles.tittleFlexBox]}>
//           Mobile Number
//         </Text>
//       </View>
//       <View style={[styles.addressberForm, styles.nameLayout]}>
//           <View style={styles.nameChildShadowBox} />
//         {/* <TextInput ></TextInput> */}
//           <Text style={[styles.firstName, styles.tittleFlexBox]}>
//             Address
//           </Text>
//         <Image
//         style={styles.pinLogoIcon}
//         contentFit="cover"
//         source={require("../assets/firstpage/PinLogo.png")}
//       />
//       </View>
//       <View style={[styles.paymentberForm, styles.paymentLayout,styles.bankleft]}>
//         <View style={styles.paymentChildShadowBox} />
//         <Text style={styles.paymenttext}> BANK</Text>
//         <Image
//         style={styles.paymentIcon}
//         contentFit="cover"
//         source={require("../assets/firstpage/bank.png")}
//       />
//       </View>
//       <View style={[styles.paymentberForm, styles.paymentLayout,styles.payleft]}>
//         <View style={styles.paymentChildShadowBox} />
//         <Image
//         style={styles.paymentpayIcon}
//         contentFit="cover"
//         source={require("../assets/firstpage/paypal.png")}
//       />
//       </View>
//       <View style={[styles.paymentberForm, styles.paymentLayout]}>
//         <View style={styles.paymentChildShadowBox} />
//         <Text style={styles.paymenttext}> MOMO</Text>
//         <Image
//         style={styles.paymentIcon}
//         contentFit="cover"
//         source={require("../assets/firstpage/MoMo_Logo.png")}
//       />
//       </View>
//     </View>
//     <View style={styles.text}>
//       <Text style={[styles.subTittle, styles.tittleFlexBox]}>
//         This data will be displayed in your account profile for security
//       </Text>
//       <Text style={[styles.tittle, styles.tittleFlexBox]}>
//         Fill in your bio to get started
//       </Text>
//     </View>
//   </View> 
//   );
// };

// const styles = StyleSheet.create({
//   tittlePosition: {
//     left: "0%",
//     width: "100%",
//   },
//   ctaLayout: {
//     height: 57,
//     width: 157,
//     position: "absolute",
//   },
//   tittleFlexBox: {
//     textAlign: "left",
//     position: "absolute",
//   },
//   nameLayout: {
//     height: 61,
//     width: 347,
//     left: 0,
//     position: "absolute",
//   },
//   paymentLayout: {
//    height: 61,
//    width: 200,
//     left: 0,
//    position: "absolute",
//  },
//   patternIcon: {
//     width: 410,
//     left: 0,
//     top: 0,
//     position: "absolute",
//     height: 312,
//   },
//   rectangle: {
//     height: "100%",
//     top: "0%",
//     right: "0%",
//     bottom: "0%",
//     backgroundColor: "#f9a84d",
//     opacity: 0.1,
//     borderRadius: Border.br_mini,
//     position: "absolute",
//   },
//   vectorIcon: {
//     height: "70%",
//     width: "90%",
//     top: "15%",
//     right: "40%",
//     bottom: "32.52%",
//     left: "6%",
//     maxWidth: "100%",
//     maxHeight: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   iconBack: {
//     height: "5.54%",
//     width: "12%",
//     top: "4.68%",
//     right: "81.33%",
//     bottom: "89.78%",
//     left: "6.67%",
//     position: "absolute",
//   },
//   ctaButtonChild: {
//     backgroundColor: Color.linear,
//     borderRadius: Border.br_mini,
//     left: 0,
//     top: 0,
//   },
//   next: {
//     top: 18,
//     left: 60,
//     fontSize: 16,
//     lineHeight: 21,
//     color: Color.colorWhite,
//     fontFamily: FontFamily.bentonSansBold,
//     textAlign: "left",
//   },
//   ctaButton: {
//     top: 685,
//     left: 129,
//   },
//   nameChildShadowBox: {
//     shadowOpacity: 0.5,
//     elevation: 5,
//     shadowRadius: 50,
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowColor: "rgba(90, 108, 234, 0.07)",
//     backgroundColor: Color.colorWhite,
//     borderRadius: Border.br_3xl,
//     height: 61,
//     width: 347,
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   paymentChildShadowBox: {
//    shadowOpacity: 0.5,
//    elevation: 3,
//    shadowRadius: 50,
//    shadowOffset: {
//      width: 0,
//      height: 0,
//    },
//    shadowColor: "rgba(90, 108, 234, 0.07)",
//    backgroundColor: Color.colorWhite,
//     borderRadius: Border.br_3x2,
//     borderWidth:0.4,
//    height: 50,
//    width: 110,
//    left: 0,
//    top: 0,
//    position: "absolute",
//  },
//   firstName: {
//     top: 24,
//     left: 20,
//     fontSize: FontSize.size_sm,
//     letterSpacing: 1,
//     fontFamily: FontFamily.bentonSansRegular,
//     color: Color.colorDarkslategray,
//     opacity: 0.3,
//   },
//   paymenttext: {
//    top: 15,
//    left: 41,
//    fontSize: 17,
//    fontWeight:"bold",
//    color: "#110785",
//    letterSpacing: 1,
//    opacity: 0.3,
//  },
//   firstNameForm: {
//     top: 0,
//   },
//   lastNameForm: {
//     top: 81,
//   },
//   mobileNumberForm: {
//    top: 162,
//   },
//   addressberForm: {
//     top: 243,
//   },
//   paymentberForm: {
//    top: 324,
//   },
//   bankleft: {
//    left:120  
//   },
//   payleft: {
//    left:240  
//   },
//   pinLogoIcon: {
//    top: 15,
//    left: 300,
//    width: 33,
//    height: 33,
//    position: "absolute",
//   },
//   paymentIcon: {
//    top: 10,
//    left: 10,
//    width: 33,
//    height: 33,
//    position: "absolute",
//   },
//   paymentpayIcon: {
//    top: 14,
//    left: 10,
//    width: 94,
//    height: 25,
//    position: "absolute",
//   },

//   form: {
//     top: 252,
//     left: 32,
//     height: 223,
//     width: 347,
//     position: "absolute",
//   },
//   subTittle: {
//     top: 85,
//     fontSize: 14,
//     lineHeight: 22,
//     fontWeight:"500",
//     fontFamily: FontFamily.bentonSansBook,
//     color: "#000",
//     width: 239,
//     left: 0,
//   },
//   tittle: {
//     marginTop: -64.5,
//     top: "50%",
//     fontSize: 29,
//     lineHeight: 33,
//     color: "#09051c",
//     fontWeight:"700",
//     fontFamily: FontFamily.bentonSansBold,
//     textAlign: "left",
//     left: "0%",
//     width: "100%",
//   },
//   text: {
//     top: 103,
//     left: 33,
//     width: 264,
//     height: 129,
//     position: "absolute",
//   },
//   signupProcess: {
//     borderRadius: 20,
//     backgroundColor: "#fefeff",
//     flex: 1,
//     overflow: "hidden",
//     height: 812,
//     width: "100%",
  
//   },
// });


// export default SignupProcess;
