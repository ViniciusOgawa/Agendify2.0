import { Box, Flex, Img, Text, Button } from "@chakra-ui/react";
import imgContact from "../../img/contact.png";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const CardUser = () => {
  const { user } = useContext(UserContext);

  return (
    <Flex
      backgroundColor={"white.50"}
      margin-inline={"none"}
      w={{ base: "265px", md: "50%" }}
      h={{ base: "530px", md: "150px" }}
      maxWidth={"500px"}
      borderRadius={"5px"}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      alignItems={"center"}
      flexDirection={{ base: "column", md: "row" }}
      border={"1px solid"}
      borderColor={"green.100"}
      marginTop={{ base: "250px", md: "-20px" }}
      padding={"10px"}
    >
      <Img
        src={imgContact}
        borderRadius={"100%"}
        w={"100px"}
        h={"100px"}
        marginLeft={{ base: "0px", md: "50px" }}
      />
      <Flex w={"100%"} alignItems={"center"}>
        <Flex flexDirection={"column"} marginLeft={"50px"} gap={"20px"}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Bem vindo, {user.name}
          </Text>
          <Flex
            alignItems={{ base: "flex-start", md: "center" }}
            gap={"10px"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Text fontSize={"xs"} fontWeight={"medium"}>
              {user.email}
            </Text>
            <Box
              backgroundColor={"grey.100"}
              height={"1px"}
              width={"20px"}
            ></Box>
            <Text fontSize={"xs"} fontWeight={"medium"}>
              {user.phoneNumber}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { CardUser };
