import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  EditIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import imgHeader from "../../img/header.png";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { ContactContext } from "../../providers/ContactContext";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLargerScreen] = useMediaQuery("(min-width: 768px)");

  const { setIsOpenModalUser, setUser } = useContext(UserContext);
  const { setIsOpenModalCreateContact } = useContext(ContactContext);

  const logout = () => {
    window.location.href = "http://localhost:3000/template";
    setUser([]);
  };

  const handleOpenUser = () => {
    setIsOpenModalUser(true);
  };

  const handleOpenContact = () => {
    setIsOpenModalCreateContact(true);
  };

  useEffect(() => {
    setIsMobile(!isLargerScreen);
  }, [isLargerScreen]);

  return (
    <Flex
      overflow={"hidden"}
      backgroundImage={imgHeader}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      w={"100%"}
      h={"100px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        width={"90%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxWidth={"1200px"}
      >
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Agendify
        </Text>
        {isMobile ? (
          <Menu>
            <MenuButton as={Button} backgroundColor={"transparent"}>
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => logout()}>Logout</MenuItem>
              <MenuItem onClick={handleOpenUser}>
                Atualizar informações
              </MenuItem>
              <MenuItem onClick={handleOpenContact}>Adicionar contato</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Flex gap="10px">
            <Button backgroundColor="transparent" onClick={handleOpenContact}>
              <AddIcon />
            </Button>
            <Button backgroundColor="transparent" onClick={handleOpenUser}>
              <EditIcon />
            </Button>
            <Button backgroundColor="transparent" onClick={() => logout()}>
              <ArrowForwardIcon />
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export { Header };
