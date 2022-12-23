import React from "react";
import {
  View,
  Text,
  Button,
  Heading,
  Center,
  HStack,
  VStack,
} from "native-base";
import Read from "../components/mobile/Read";

type Props = { navigation: any };

const HomeScreen = ({ navigation }: Props) => {
  return (
    <Center h={"100%"}>
      <Heading mb={12}>Home Screen</Heading>
      <VStack space={2}>
        <Button onPress={() => navigation.navigate("Redux")} size={"sm"}>
          Go to Redux
        </Button>
        <Button onPress={() => navigation.navigate("write")}>
          Go to Write And Add PDF
        </Button>
        <Button onPress={() => navigation.navigate("Read")}>View PDF</Button>
        <Button onPress={() => navigation.navigate("url_web")}>
          View PDF URL on web
        </Button>
      </VStack>
    </Center>
  );
};

export default HomeScreen;
