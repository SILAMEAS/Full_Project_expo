import React, { useEffect } from "react";
import { View, Text, Center, HStack, VStack, Box } from "native-base";
import Example from "../components/Card";

type Props = {};

const GetUsers = (props: Props) => {
  console.log("dsf");
  const [datas, setDatas] = React.useState([]);
  const getAll = async () => {
    const res = await fetch("http://localhost:3001/user");
    const data = await res.json();
    console.log(data);
    setDatas(data);
    // console.log(datas);
    console.log("first");
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
      {datas.map((i: any) => {
        return (
          <Center mx={"auto"}>
            <Example name={i.name} email={i.email} id={i.id} />
          </Center>
        );
      })}
    </HStack>
  );
};

export default GetUsers;
