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
    <Center flex={1}>
      {" "}
      <FormLogin navigation={navigation} />
      <Button
        position={"absolute"}
        bottom="0"
        right={0}
        onPress={() => navigation.navigate("getusers")}
      >
        Config data
      </Button>
    </Center>
  );
};

export default LoginScreen;
