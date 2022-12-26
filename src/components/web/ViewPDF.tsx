import { Box, Center, HStack, Text, View } from "native-base";
import React from "react";
import { Platform, Image } from "react-native";
import WebView from "react-native-webview";
import HomeScreen from "../../screen/HomeScreen";
import LoginScreen from "../../screen/LoginScreen";
import Read from "../mobile/Read";

type Props = {};
function Dont_want() {
  return Platform.OS === "web" ? (
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
  );
}
function Want() {
  const [numPage, setNumPage] = React.useState(null);
  const [PageNumber, setPageNumber] = React.useState(1);
  function Suc() {
    setNumPage(numPage);
    setPageNumber(1);
  }
  const [Option, setOption] = React.useState(false);
  return (
    <Center h={"100%"} flexDirection="row">
      <Box width={"50%"}></Box>

      {/* <Document
        file="https://www.africau.edu/images/default/sample.pdf"
        onLoadSuccess={Suc}
      >
        <Page height={600} />
      </Document> */}

      <embed
        src="https://www.africau.edu/images/default/sample.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />

      {/* <PdfViewerComponent document={"./k.pdf"} /> */}
    </Center>
  );
}

const ViewPDF = (props: Props) => {
  return (
    <Box height={"100%"}>
      <Want />
    </Box>
  );
};

export default ViewPDF;
