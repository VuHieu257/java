import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import {  Color, FontSize } from "../screen/GlobalStyles";

const ItemHome = ({ goProduct,imageSource,textContent }) => {
    // console.log('dsadsa', goProduct)
    return (
        // styles.resaturant6, styles.groupChildLayout,styles.groupChildShadowBox
        <TouchableOpacity
            onPress={goProduct}
            style={[styles.resaturant6, styles.groupChildShadowBox]}>
                <View style={styles.groupChildLayout}>
                        <Image
                        source={{
                            uri: imageSource,
                        }}
                        style={[styles.restaurantImageIcon]}
                        contentFit="cover"
                        resizeMode="contain"
                        //   source={require("../assets/firstpage/resturantimage.png")}
                    />
                </View>
            {/* <View style={styles.mcdonaldS151}/> */}
            <Text style={[styles.restoName, styles.restoTypo]}>{textContent}</Text>
            {/* <Text style={[styles.restoName, styles.restoTypo]}>Healthy Food</Text> */}
            <Text style={[styles.distanceInMinute, styles.distanceTypo]}> 8 Mins</Text>
            </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    resaturant6: {
        // left: 10,
        // top: 5,
        // borderRadius: 30,
        borderWidth: 0.4,
        marginHorizontal: 15,
        marginBottom:20,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: Color.colorWhite,
        height: 200,
        width: 135,
        // backgroundColor: "#fff"
        // backgroundColor: "#000",
        
    },
    groupChildLayout: {
        flex:0.85,
        top: -12,
        // backgroundColor: "rgba(156, 181, 178,0.1)",
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        // borderWidth:1,
        width: 135,
        height: 110,
        justifyContent: "center",
        left:-10,
        // paddingVertical:15,
        // position: "absolute",
    },
    groupChildShadowBox: {
        shadowOpacity: 1,
        elevation: 5,
        // shadowColor:"blue",
        // backgroundColor: 'White',
    
        borderRadius:30,
        top: 0,
    },
    restoName: {
        // left: 31,
        // marginHorizontal:30,
    },
    restoTypo: {
        top:"0%",
        color: Color.colorBlack,
        lineHeight: 21,
        fontWeight:"600",
        fontSize: FontSize.size_base,
        // textAlign: "left",
        // fontFamily: FontFamily.bentonSansBold,
    },
    distanceInMinute: {
        opacity: 0.5,
    },
    distanceTypo: {
        top:"2%",
        // fontFamily: FontFamily.bentonSansBook,
        lineHeight: 17,
        fontWeight:"500",
        fontSize: FontSize.size_smi,
        opacity: 0.5,
        color: Color.colorBlack,
        // textAlign: "left",
    },
    restaurantImageIcon: {
        borderTopLeftRadius: 15,
        borderTopRightRadius:15,
        width: 125,
        height: 110,
        marginHorizontal:15,
      },
})
export default ItemHome
