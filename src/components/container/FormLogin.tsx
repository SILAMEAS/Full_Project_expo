import React from "react";
import {
  NativeBaseProvider,
  Box,
  Center,
  Image,
  Text,
  Heading,
  VStack,
  HStack,
  Button,
  Input,
  Stack,
  Pressable,
  Icon,
} from "native-base";
import { TextInput } from "react-native";
import NameAndPass from "../NameAndPass";
type Props = {};

const FormLogin = (props: Props) => {
  return (
    <Center height={"100%"} bg="red.300">
      <Image
        source={require("../../../assets/game.jpg")}
        height="100%"
        position={"absolute"}
        top="0"
        opacity={"1"}
        alt="background"
      />
      <VStack
        bg={"cyan.700"}
        px="8"
        borderRadius={"lg"}
        py="2"
        width={"80%"}
        height={"300"}
      >
        <VStack space={2}>
          <Heading
            color={"white"}
            fontWeight="bold"
            size={"xl"}
            textDecorationLine="underline"
            textAlign={"center"}
          >
            Login
          </Heading>
          <Box
            borderWidth={2}
            px="4"
            py="4"
            borderColor={"white"}
            borderRadius="lg"
          >
            <NameAndPass />
            <Center>
              {" "}
              <Button.Group
                space={2}
                width="full"
                justifyContent={"space-around"}
              >
                <Button _pressed={{ bg: "amber.300" }}>Login</Button>
                <Button>Register</Button>
              </Button.Group>
            </Center>
          </Box>
        </VStack>
      </VStack>
    </Center>
  );
};

export default FormLogin;
