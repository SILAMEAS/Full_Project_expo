import { StyleSheet, Text, View, Button } from "react-native";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import React from "react";
import { HStack, TextArea } from "native-base";

export default function Rsq() {
  const [selectedPrinter, setSelectedPrinter] = React.useState();
  const [text, setText] = React.useState("");
  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
     ${text}
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;
  const print = async () => {
    await Print.printAsync({
      html: html,
    });
  };
  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "Rsqlication/pdf" });
  };

  return (
    <View style={styles.container}>
      {/* <PDFReader source={require("../view-pdf/assets/radius.pdf")} /> */}
      <TextArea
        aria-label="t1"
        numberOfLines={4}
        placeholder="Invalid TextArea"
        width={"100%"}
        value={text}
        onChangeText={(val: string) => {
          setText(val);
        }}
        isInvalid
        _dark={{
          placeholderTextColor: "gray.300",
        }}
        mb="5"
        autoCompleteType={undefined}
      />

      <HStack space={4}>
        <Button title="Add" onPress={printToFile} />
        <Button title="print" onPress={print} />
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
