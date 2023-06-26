import { createContext, useState } from "react";
import { api } from "../services/api";
import { useToast } from "@chakra-ui/react";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});
  const [contactDeleted, setContactDeleted] = useState(false);
  const toast = useToast();

  const deleteContact = async (contact) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      await api.delete(`/contacts/${contact.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast({
        title: "Contato deletado com sucesso!",
        position: "top-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setContactDeleted(true);
    } catch (error) {
      toast({
        title: "Erro ao deletar contato!",
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }
  };

  const [loadingAttContact, setLoadingAttContact] = useState(false);
  const [isOpenModalUpdateContact, setIsOpenModalUpdateContact] =
    useState(false);

  const updateContact = async (contactData) => {
    const token = localStorage.getItem("@TOKEN");

    for (const key in contactData) {
      if (key in contactData && contactData[key] === "") {
        delete contactData[key];
      }
    }

    try {
      setLoadingAttContact(true);
      await api.patch(`/contacts/${contact.id}`, contactData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast({
        title: "Contato atualizado com sucesso!",
        position: "top-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Erro ao atualizar contato!",
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    } finally {
      setLoadingAttContact(false);
      setIsOpenModalUpdateContact(false);
    }
  };

  const [loadingCreateContact, setLoadingCreateContact] = useState(false);
  const [isOpenModalCreateContact, setIsOpenModalCreateContact] =
    useState(false);

  const createContact = async (contactData) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoadingCreateContact(true);
      await api.post(`/contacts`, contactData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast({
        title: "Contato criado com sucesso!",
        position: "top-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Erro ao criar contato!",
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    } finally {
      setLoadingCreateContact(false);
      setIsOpenModalCreateContact(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        updateContact,
        deleteContact,
        isOpenModalUpdateContact,
        setIsOpenModalUpdateContact,
        loadingAttContact,
        setLoadingAttContact,
        contact,
        setContact,
        loadingCreateContact,
        createContact,
        isOpenModalCreateContact,
        setIsOpenModalCreateContact,
        contactDeleted,
        setContactDeleted,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
