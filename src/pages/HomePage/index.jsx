import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { useContext, useEffect } from "react";
import { api } from "../../services/api";
import { ContactContext } from "../../providers/ContactContext";
import { ModalUpdateContact } from "../../components/ModalUpdateContact";
import { ModalUpdateUser } from "../../components/ModalUpdateUser";
import { ModalCreateContact } from "../../components/ModalCreateContact";
import { CardUser } from "../../components/CardUser";
import { SearchBar } from "../../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { ListContacts } from "../../components/ListContacts";

const HomePage = () => {
  const {
    contacts,
    setContacts,
    isOpenModalUpdateContact,
    isOpenModalCreateContact,
    contactDeleted,
  } = useContext(ContactContext);

  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  const contactsExists = contacts.length > 0;

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts(response.data);
      } catch (error) {
        if (error.response.status == 401) {
          navigate("/error");
        }
        console.log(error);
      }
    })();
  }, [isOpenModalUpdateContact, isOpenModalCreateContact, contactDeleted]);

  return (
    <>
      <ModalCreateContact />
      <ModalUpdateContact />
      <ModalUpdateUser />
      <Box h={"100%"}>
        <Header />
        <Flex
          h={"100%"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          marginBottom={"20px"}
        >
          <CardUser />
          <SearchBar />
          {contactsExists ? (
            <ListContacts />
          ) : (
            <Box
              backgroundColor="white.50"
              marginInline="none"
              w="100%"
              maxWidth="1200px"
              h={{ base: "150px", md: "150px" }}
              borderRadius="5px"
              padding={"15px"}
              boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
              justify="space-between"
              borderLeft="5px solid"
              borderColor="green.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginTop="40px"
            >
              <Text fontSize="xl" fontWeight="">
                Você ainda não cadastrou nenhum contato
              </Text>
            </Box>
          )}
        </Flex>
      </Box>
    </>
  );
};

export { HomePage };
