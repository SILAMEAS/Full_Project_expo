import { Icon, Input, Pressable, Stack } from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setName, setPassword } from "../app/counter/counterSlice";

type Props = { navigation: any };

const NameAndPass = ({ navigation }: Props) => {
  const [show, setShow] = React.useState(true);
  const Name = useSelector((state: any) => state.counter.Name);
  const Password = useSelector((state: any) => state.counter.Password);
  const dispatch = useDispatch();

  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w={{
          base: "95%",
          md: "25%",
        }}
        color="white"
        value={Name}
        onChangeText={(val) => dispatch(setName(val))}
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
        value={Password}
        onChangeText={(val) => {
          dispatch(setPassword(val));
        }}
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
