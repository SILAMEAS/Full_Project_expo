import React from "react";
import { View, Text, Button, Heading } from "native-base";
import FormRegister from "../components/container/FormRegister";

type Props = {};

const RegisterScreen = ({ navigation }: any) => {
  //  return <FormRegister navigation={navigation} />
  return <FormRegister navigation={navigation} />;
};

export default RegisterScreen;
