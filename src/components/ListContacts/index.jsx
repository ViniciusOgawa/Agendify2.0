import {
  Box,
  Flex,
  Text,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useContext } from "react";
import { CardContact } from "../CardContact";
import { ContactContext } from "../../providers/ContactContext";

export const ListContacts = () => {
  const { contacts, contactsFiltered } = useContext(ContactContext);

  const totalItems =
    contactsFiltered.length > 0 ? contactsFiltered.length : contacts.length;
  const itemsPerPage = 3;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems =
    contactsFiltered.length > 0
      ? contactsFiltered.slice(startIndex, endIndex)
      : contacts.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <UnorderedList
        overflowY={"auto"}
        w={"100%"}
        flexDirection={"column"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        marginTop={"30px"}
      >
        {currentItems.map((element, index) => (
          // eslint-disable-next-line react/jsx-key
          <ListItem padding={"10px"} marginBottom={"20px"}>
            <CardContact contact={element} key={index} />
          </ListItem>
        ))}
      </UnorderedList>

      <Flex
        mt={4}
        marginBottom={"60px"}
        marginTop={"60px"}
        alignItems={"center"}
        gap={"30px"}
      >
        <Text color={"grey.4"} fontSize={"heading.6"}>
          {currentPage} de {totalPages}
        </Text>
        <Box>
          {currentPage > 1 && (
            <Button
              variant={"ghost"}
              mr={2}
              onClick={handlePreviousPage}
              leftIcon={<ChevronLeftIcon />}
              color={"brand.1"}
              fontSize={"heading.6"}
            >
              Anterior
            </Button>
          )}
          {currentPage < totalPages && (
            <Button
              variant={"ghost"}
              onClick={handleNextPage}
              rightIcon={<ChevronRightIcon />}
              color={"brand.1"}
              fontSize={"heading.6"}
            >
              Seguinte
            </Button>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};
