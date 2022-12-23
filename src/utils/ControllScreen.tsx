import { StatusBar } from "expo-status-bar";
import {
  Box,
  Center,
  NativeBaseProvider,
  Text,
  Image,
  View,
  Button,
} from "native-base";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen";
import HomeScreen from "../screen/HomeScreen";
import RegisterScreen from "../screen/RegisterScreen";
import { Counter } from "../app/counter/Counter";
import Read from "../components/mobile/Read";
import Rsq from "../components/mobile/RPS";
import GetUsers from "../router/GetUsers";
import ViewPDF from "../components/web/ViewPDF";
const Stack = createNativeStackNavigator();
export default function ControllScreen() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Redux" component={Counter} />
          <Stack.Screen name="Read" component={Read} />
          <Stack.Screen name="write" component={Rsq} />
          <Stack.Screen name="getusers" component={GetUsers} />
          <Stack.Screen name="url_web" component={ViewPDF} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
