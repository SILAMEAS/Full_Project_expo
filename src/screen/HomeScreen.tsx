import React from "react";
import { View, Text, Button, Heading } from "native-base";

type Props = { navigation: any };

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Heading>Home Screen</Heading>
      <Button onPress={() => navigation.navigate("Redux")}>Go to Redux</Button>
    </View>
  );
};

export default HomeScreen;
