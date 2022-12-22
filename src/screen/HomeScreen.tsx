import React from "react";
import { View, Text, Button, Heading } from "native-base";
import Read from "../app/counter/Read";

type Props = { navigation: any };

const HomeScreen = ({ navigation }: Props) => {
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Heading>Home Screen</Heading>
    //   <Button onPress={() => navigation.navigate("Redux")}>Go to Redux</Button>
    // </View>
    <Read />
  );
};

export default HomeScreen;
