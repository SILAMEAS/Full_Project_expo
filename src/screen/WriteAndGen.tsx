import React from "react";
import { Box, Text, Input, Button } from "native-base";
//=================
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import ViewPDF from "../components/ViewPDF";

type Props = {};

const WriteAndGen = (props: Props) => {
  const [x, setX] = React.useState("");
  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo! ${x}
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;
  let gen_PDF = async () => {
    const file = await Print.printToFileAsync({
      html: html,
      base64: false,
    });
    await shareAsync(file.uri);
    // alert(x);
    // setX("");
  };

  return (
    <>
      <Box>
        <Input
          mx="3"
          placeholder="Input"
          w="100%"
          value={x}
          onChangeText={(val) => setX(val)}
        />
        <Button onPress={gen_PDF}>Generate PDF</Button>
      </Box>
    </>
  );
};

export default WriteAndGen;
