import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  Image,
  AspectRatio,
  HStack,
  Button,
} from "native-base";
import Emall from "./Emaill";
interface type {
  name: string;
  email: string;
  id: string;
}
const Example = ({ name, email, id }: type) => {
  const Handle_delete = async () => {
    const res = await fetch("http://localhost:3001/user/delete/" + id, {
      method: "DELETE",
    });
    const data = res.json();
    await fetch("http://localhost:3001/user");
  };
  return (
    <Center bg={"red.600"}>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={9 / 9}>
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            T..
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {name}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {email}
            </Text>
          </Stack>
          <Text fontWeight="400">{id}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Button
                bg={"red.500"}
                onPress={() => {
                  Handle_delete(id);
                }}
              >
                Delete
              </Button>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
};
export default Example;
