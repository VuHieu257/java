// Example: Switch from One Screen to another using React Navigation //
// https://aboutreact.com/react-native-stack-navigation //
import "react-native-gesture-handler";

import * as React from "react";
import { Button, View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import FirstPage from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';
// import ThirdPage from './pages/ThirdPage';
import StartScreen1 from "./user/StartScreen1";
import SignUp from "./user/SignUp";
import SignInScreen from "./user/SignInScreen";
import Home from "./menu/Home";
import ExploreMenu from "./menu/ExploreMenu";
import ViaMethod from "./user/ViaMethod";
import SignIn from "./user/SignInScreen";
import SignupSuccess from "./user/SignupSuccessNotification";
import OrderDetails from "./order/OrderDetail";
import DetailProduct from "./order/ProductCateDetail";
import ProductDetail from "./menu/DetailMenu";
import ResetPassword from "./user/ResetPassword";
import SignupProcess from "./user/SignInProcessScreen";
import VerificationCode from "./user/VerificationCode";
import ExploreRestaurant from "./menu/ExporeRestaurant";
import Filter from "./menu/Filter";
import Message from "./menu/Message";
import ChatDetails from "./menu/ChatDetail";
import Payments from "./order/Payment";
import EditPayments from "./order/EditPayment";
import EditLocation from "./order/EditLocation";
import YourOrders from "./order/YourOrder";
import SetLocation from "./order/SetLocation";
// import test from './screen/test';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen1"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen
          name="test"
          component={test}
        /> */}
        <Stack.Screen name="StartScreen1" component={StartScreen1} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignupSuccess" component={SignupSuccess} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ExploreMenu" component={ExploreMenu} />
        <Stack.Screen name="ExploreRestaurant" component={ExploreRestaurant} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="ChatDetails" component={ChatDetails} />
        <Stack.Screen name="ViaMethod" component={ViaMethod} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="EditPayments" component={EditPayments} />
        <Stack.Screen name="EditLocation" component={EditLocation} />
        <Stack.Screen name="SetLocation" component={SetLocation} />
        <Stack.Screen name="YourOrders" component={YourOrders} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="SignupProcess" component={SignupProcess} />
      </Stack.Navigator>
      {/* <CartProvider>
          <RootNavigator />
        </CartProvider> */}
    </NavigationContainer>
  );
}

export default App;
