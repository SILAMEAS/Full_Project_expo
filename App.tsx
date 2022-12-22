import React from "react";
import ControllScreen from "./src/utility/ControllScreen";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <ControllScreen />
      </Provider>
    </NativeBaseProvider>
  );
}
