import React, { useEffect } from "react";
import { View, Text, Center, HStack, VStack, Box } from "native-base";
import Example from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { setDATA } from "../app/counter/counterSlice";

type Props = {};

const GetUsers = (props: Props) => {
  const { DATA } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  const getAll = async () => {
    const res = await fetch("http://localhost:3001/user");
    const data = await res.json();
    dispatch(setDATA(data));
    console.log("Get data");
    console.log(DATA);
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <HStack
      justifyContent={"space-between"}
      flexWrap="wrap"
      space={1}
      bg={"amber.900"}
    >
      {/* {datas.map((i: any, inex) => {
        return (
          <Center mx={"auto"} key={index}>
            <Example name={i.name} email={i.email} id={i.id} />
          </Center>
        );
      })} */}
      {/* {datas.map((i: any) => (
        <Text>i.name</Text>
      ))} */}
      <Text>hl</Text>
    </HStack>
  );
};

export default GetUsers;
