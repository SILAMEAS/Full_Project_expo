import { Icon, Input, Pressable, Stack } from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../app/counter/counterSlice";

type Props = {};

const Emall = (props: Props) => {
  const Email = useSelector((state: any) => state.counter.Email);
  const dispatch = useDispatch();
  return (
    <Stack space={4} w="100%" alignItems="center" mt={3}>
      <Input
        w={{
          base: "95%",
          md: "25%",
        }}
        color="white"
        value={Email}
        onChangeText={(val) => {
          dispatch(setEmail(val));
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="email" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Email"
      />
    </Stack>
  );
};

export default Emall;
