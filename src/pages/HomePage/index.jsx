import { Box, UnorderedList, ListItem, Flex, Text } from "@chakra-ui/react";
import { CardContact } from "../../components/CardContact";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { api } from "../../services/api";
import { ContactContext } from "../../providers/ContactContext";
import { ModalUpdateContact } from "../../components/ModalUpdateContact";
import { ModalUpdateUser } from "../../components/ModalUpdateUser";
import { ModalCreateContact } from "../../components/ModalCreateContact";
import { UserContext } from "../../providers/UserContext";
import { CardUser } from "../../components/CardUser";

const HomePage = () => {
  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();

  const {
    contacts,
    setContacts,
    isOpenModalUpdateContact,
    isOpenModalCreateContact,
    contactDeleted,
  } = useContext(ContactContext);
  const { user } = useContext(UserContext);

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
        console.log(error);
      }
    })();
  }, [isOpenModalUpdateContact, isOpenModalCreateContact, contactDeleted]);

  useEffect(() => {
    if (user.length == 0) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <ModalCreateContact />
      <ModalUpdateContact />
      <ModalUpdateUser />
      <Box h={"100vh"}>
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
          <UnorderedList
            styleType="none"
            margin={"20px"}
            h={"100%"}
            w={"90%"}
            maxWidth={"1200px"}
          >
            {contactsExists ? (
              contacts.map((element) => (
                <ListItem marginTop="40px" w="100%" key={element.id}>
                  <CardContact contact={element} />
                </ListItem>
              ))
            ) : (
              <ListItem
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
              </ListItem>
            )}
          </UnorderedList>
        </Flex>
      </Box>
    </>
  );
};

export { HomePage };
