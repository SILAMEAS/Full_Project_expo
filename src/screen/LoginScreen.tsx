import React from "react";
import {
  View,
  Text,
  Button,
  Box,
  Image,
  Heading,
  VStack,
  Center,
  NativeBaseProvider,
} from "native-base";
import FormLogin from "../components/container/FormLogin";

type Props = {};

const LoginScreen = ({ navigation }: any) => {
  return (
    <NativeBaseProvider>
      <Box safeArea>
        <FormLogin navigation={navigation} />
      </Box>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
