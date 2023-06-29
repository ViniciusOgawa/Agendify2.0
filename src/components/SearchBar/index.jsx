import { Button, Flex, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { ContactContext } from "../../providers/ContactContext";

const SearchBar = () => {
  const { setContactsFiltered, contacts } = useContext(ContactContext);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const filteredContacts = contacts.filter((element) => {
      return (
        element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.phone_number.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setContactsFiltered(filteredContacts);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "1200px" }}>
      <Flex
        backgroundColor={"white.50"}
        margin-inline={"none"}
        w={"200%px"}
        maxWidth={"1200px"}
        h={"100px"}
        borderRadius={"5px"}
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
        justify={"space-between"}
        borderLeft={"5px solid"}
        borderColor={"green.100"}
        marginTop={"50px"}
        alignItems={"center"}
      >
        <Input
          border={"none"}
          h={"100%"}
          placeholder="Digite sua pesquisa"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        ></Input>
        <Button backgroundColor={"transparent"} type={"submit"}>
          <SearchIcon />
        </Button>
      </Flex>
    </form>
  );
};

export { SearchBar };
