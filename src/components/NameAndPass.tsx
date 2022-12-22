import { Icon, Input, Pressable, Stack } from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {};

const NameAndPass = (props: Props) => {
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const showInfo = () => {
    alert(name + " : " + pass);
  };
  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w={{
          base: "95%",
          md: "25%",
        }}
        color="white"
        value={name}
        onChangeText={(val) => setName(val)}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Name"
      />
      <Input
        w={{
          base: "95%",
          md: "25%",
        }}
        value={pass}
        onChangeText={(val) => setPass(val)}
        type={show ? "text" : "password"}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
        color="white"
        placeholder="Password"
      />
    </Stack>
  );
};

export default NameAndPass;
