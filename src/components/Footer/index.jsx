import { Button, Flex, Text } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import imgHeader from "../../img/header.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Flex
      as={"footer"}
      overflow={"hidden"}
      backgroundImage={imgHeader}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position={"fixed"}
      bottom={0}
      left={0}
      right={0}
      alignItems={"center"}
      justifyContent={"center"}
      h={"80px"}
      padding={"20px"}
    >
      <Flex
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "row" }}
        paddingInline={{ base: "16px", md: "16px" }}
        w={"100%"}
        h={"100%"}
        maxW={"1600px"}
        alignItems={"center"}
      >
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Agendify
        </Text>
        <Text fontSize={"body.2"} color={"whiteFixed"} fontWeight={"normal"}>
          © 2022 - Todos os direitos reservados.
        </Text>
        <Button bg={"grey.2"} onClick={scrollToTop}>
          <ChevronUpIcon color={"whiteFixed"} />
        </Button>
      </Flex>
    </Flex>
  );
};
