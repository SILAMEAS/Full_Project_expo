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
import Emall from "../Emaill";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setName, setPassword } from "../../app/counter/counterSlice";

type Props = {};

const FormRegister = ({ navigation }: any) => {
  const Isweb = Platform.OS === "web";
  const dispatch = useDispatch();
  const Name = useSelector((state: any) => state.counter.Name);
  const Password = useSelector((state: any) => state.counter.Password);
  const Email = useSelector((state: any) => state.counter.Email);
  const Empty = () => {
    if (Name === "" || Password === "" || Email === "") {
      alert("Field can't blank");
    } else {
      dispatch(setEmail(""));
      alert("Register Success");
      navigation.navigate("Login");
    }
  };
  return (
    <Center height={"100%"} bg="blue.300">
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
        height={"350"}
      >
        <VStack space={5}>
          <Heading
            color={"white"}
            fontWeight="bold"
            size={"xl"}
            textDecorationLine="underline"
            textAlign={"center"}
          >
            Register
          </Heading>
          <Box
            borderWidth={2}
            px="4"
            py="4"
            borderColor={"white"}
            borderRadius="lg"
          >
            <NameAndPass navigation={navigation} />
            <Emall />
            <Center>
              <Button.Group
                space={2}
                mt="5"
                width={Platform.OS === "web" ? "50%" : "full"}
                justifyContent={"space-around"}
              >
                <Button
                  onPress={() => navigation.navigate("Login")}
                  bg={"red.700"}
                >
                  Back to Login
                </Button>
                <Button
                  _pressed={{ bg: "amber.300" }}
                  bg="blue.600"
                  onPress={Empty}
                >
                  Register
                </Button>
              </Button.Group>
            </Center>
          </Box>
        </VStack>
      </VStack>
    </Center>
  );
};

export default FormRegister;
