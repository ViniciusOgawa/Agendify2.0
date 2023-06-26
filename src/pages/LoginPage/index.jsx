import { Box, Flex } from "@chakra-ui/react";
import { FormLogin } from "../../components/FormLogin";
import { Header } from "../../components/Header";

const LoginPage = () => {
  return (
    <Box h={"100vh"}>
      <Header />
      <Flex
        backgroundColor={"white.100"}
        h={"100%"}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <FormLogin />
      </Flex>
    </Box>
  );
};

export { LoginPage };
