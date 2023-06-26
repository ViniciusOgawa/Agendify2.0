import { Box, Flex, Img, Text, Button } from "@chakra-ui/react";
import imgContact from "../../img/contact.png";
import { EditIcon, PhoneIcon, DeleteIcon } from "@chakra-ui/icons";
import { ContactContext } from "../../providers/ContactContext";
import { useContext } from "react";

const CardContact = ({ contact }) => {
  const { setIsOpenModalUpdateContact, setContact, deleteContact } =
    useContext(ContactContext);

  const handleOpenContact = () => {
    setIsOpenModalUpdateContact(true);
    setContact(contact);
  };

  const handleRedirectToChat = () => {
    const phoneNumber = contact.phoneNumber;

    const url = `https://wa.me/${phoneNumber}`;
    window.location.href = url;
  };

  return (
    <Flex
      backgroundColor={"white.50"}
      margin-inline={"none"}
      w={"100%"}
      maxWidth={"1200px"}
      h={{ base: "330px", md: "150px" }}
      borderRadius={"5px"}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      justify={"space-between"}
      borderLeft={"5px solid"}
      borderColor={"green.100"}
    >
      <Flex
        w={"100%"}
        alignItems={"center"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        gap={"20px"}
      >
        <Img
          src={imgContact}
          borderRadius={"100%"}
          w={"100px"}
          h={"100px"}
          marginLeft={{ base: "0px", md: "50px" }}
        />
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={"20px"}
          justifyContent={{ base: "center", md: "space-between" }}
          w={"100%"}
        >
          <Flex w={"100%"} alignItems={"center"}>
            <Flex flexDirection={"column"} marginLeft={"50px"} gap={"20px"}>
              <Text fontSize={"xl"} fontWeight={"bold"}>
                {contact.name}
              </Text>
              <Flex
                alignItems={{ base: "flex-start", md: "center" }}
                gap={"10px"}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Text fontSize={"xs"} fontWeight={"medium"}>
                  {contact.email}
                </Text>
                <Box
                  backgroundColor={"grey.100"}
                  height={"1px"}
                  width={"20px"}
                ></Box>
                <Text fontSize={"xs"} fontWeight={"medium"}>
                  {contact.phoneNumber}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} paddingRight={"50px"} gap={"10px"}>
            <Flex marginLeft={"50px"}>
              <Button backgroundColor="transparent" onClick={handleOpenContact}>
                <EditIcon />
              </Button>
              <Button
                backgroundColor="transparent"
                onClick={handleRedirectToChat}
              >
                <PhoneIcon />
              </Button>
              <Button
                backgroundColor="transparent"
                onClick={() => deleteContact(contact)}
              >
                <DeleteIcon />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { CardContact };
