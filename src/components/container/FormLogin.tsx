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
import { Platform } from "react-native";

import { TextInput } from "react-native";
import NameAndPass from "../NameAndPass";
import { useDispatch, useSelector } from "react-redux";
import { setName, setPassword } from "../../app/counter/counterSlice";

type Props = {};

const FormLogin = ({ navigation }: any) => {
  const Name = useSelector((state: any) => state.counter.Name);
  const Password = useSelector((state: any) => state.counter.Password);
  const dispatch = useDispatch();

  const showLogin = () => {
    if (Name === "sila" && Password === "123") {
      alert("Success Login");
      navigation.navigate("Home");
    } else if (Name === "" || Password === "") {
      alert("All field blank");
    } else if (Name === "sila" || Password !== "123") {
      alert("Invalid Password");
    } else if (Name !== "sila" || Password === "123") {
      alert("Invalid Name");
    } else {
      alert(" Invalid");
      dispatch(setName(""));
      dispatch(setPassword(""));
    }
  };
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
        width={Platform.OS === "web" ? "50%" : "90%"}
        height={"300"}
      >
        <VStack space={5}>
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
            <NameAndPass navigation={navigation} />
            <Center>
              <Button.Group
                space={2}
                mt="5"
                width={Platform.OS === "web" ? "50%" : "full"}
                justifyContent={"space-around"}
              >
                <Button
                  _pressed={{ bg: "amber.300" }}
                  bg="green.400"
                  onPress={() => navigation.navigate("Register")}
                >
                  Register
                </Button>
                <Button
                  onPress={() => {
                    showLogin();
                  }}
                >
                  Login
                </Button>
              </Button.Group>
            </Center>
          </Box>
        </VStack>
      </VStack>
    </Center>
  );
};

export default FormLogin;
