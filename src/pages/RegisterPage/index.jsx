import { FormRegister } from "../../components/FormRegister";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";

const RegisterPage = () => {
  return (
    <Box h={"100vh"}>
      <Header />
      <Flex
        backgroundColor={"white.100"}
        height={"100%"}
        h={{ base: "120%", sm: "100%" }}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <FormRegister />
      </Flex>
    </Box>
  );
};

export { RegisterPage };
