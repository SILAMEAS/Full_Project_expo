import React from "react";
import { View, Text, Button } from "native-base";

type Props = { navigation: any };

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Login")}>
        Go to Details
      </Button>
    </View>
  );
};

export default HomeScreen;
