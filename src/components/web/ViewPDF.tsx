import { Box, Center, HStack, Text, View } from "native-base";
import React from "react";
import { Platform, Image } from "react-native";
import WebView from "react-native-webview";
import HomeScreen from "../../screen/HomeScreen";
import LoginScreen from "../../screen/LoginScreen";
import Read from "../mobile/Read";

type Props = {};

const ViewPDF = (props: Props) => {
  return (
    <Box height={"100%"}>
      {Platform.OS === "web" ? (
        <Center h={"100%"} flexDirection="row">
          {" "}
          <Box width={"50%"}></Box>
          <iframe
            src="https://www.africau.edu/images/default/sample.pdf"
            height={"100%"}
            width={"50%"}
          />
        </Center>
      ) : (
        <WebView
          source={{ uri: "https://www.africau.edu/images/default/sample.pdf" }}
        />
      )}
    </Box>
  );
};

export default ViewPDF;
