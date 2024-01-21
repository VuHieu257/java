import * as React from "react";
import { StyleSheet, View, Text,Image,TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../screen/GlobalStyles";


const test = ({ navigation }) => {
    return (
        <View style={[styles.form, styles.formPosition1]}>
        <View style={[styles.nameForm, styles.formPosition]}>
            <TextInput style={[styles.rectangle1, styles.rectangleIconShadowBox]}/>
            {/* <TextInput style={[styles.txtinput]} placeholder="UserName" /> */}
          <Text style={[styles.email, styles.emailFlexBox]}>Name . . |</Text>
          {/* <TextInput style={[styles.email, styles.emailFlexBox]}>Name . . |</TextInput> */}
          <Image
            style={styles.iconlybulkprofile}
            contentFit="cover"
            source={require("../assets/firstpage/iconlybulkprofile.png")}
          />
        </View>
        <View style={[styles.emailForm, styles.formPosition]}>
          <TextInput style={[styles.rectangle2, styles.rectangleIconShadowBox]} />
          <Text style={[styles.email, styles.emailFlexBox]}>Email</Text>
          <Image
            style={styles.iconlybulkprofile}
            contentFit="cover"
            source={require("../assets/firstpage/iconlybulkmessage.png")}
          />
        </View>
        <View style={[styles.passwordForm, styles.formPosition]}>
          <TextInput style={[styles.rectangle3, styles.rectangleIconShadowBox]} />
          <Text style={[styles.email, styles.emailFlexBox]}>Password</Text>
          <Image
            style={styles.iconlybulkprofile}
            contentFit="cover"
            source={require("../assets/firstpage/iconlybulklock.png")}
          />
          <Image
            style={styles.iconlybulkshow}
            contentFit="cover"
            source={require("../assets/firstpage/iconlybulkshow.png")}
          />
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
})
export default test;
