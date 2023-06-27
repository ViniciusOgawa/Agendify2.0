import { Box, Button, Flex, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <>
      <Box h={"100vh"}>
        <Flex
          h={"100%"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          marginBottom={"20px"}
        >
          <Text fontSize={"2xl"}>Token inválido !</Text>
          <Button
            backgroundColor={"green.100"}
            onClick={() =>
              (window.location.href = "http://localhost:3000/template")
            }
          >
            Retorne a tela inicial!
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export { ErrorPage };
