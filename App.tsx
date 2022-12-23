import React from "react";

import { store } from "./src/app/store";
import { Provider } from "react-redux";
{
  Platform.OS === "web" ? <ViewPDF /> : <Text>df</Text>;
}
import { Button, NativeBaseProvider, Text } from "native-base";
import Rsq from "./src/components/mobile/RPS";
import ViewPDF from "./src/components/web/ViewPDF";
import { Platform } from "react-native";
import ControllScreen from "./src/utils/ControllScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <ControllScreen />
      </Provider>
    </NativeBaseProvider>
  );
}
