import { useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "../services/api";
import { useToast } from "@chakra-ui/react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const toast = useToast();
  const [isOpenModalUser, setIsOpenModalUser] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    (async () => {
      if (token) {
        try {
          const response = await api.get("/users/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (err) {
          window.localStorage.clear();
        }
      }
    })();
  }, []);

  const [loadingAttUser, setLoadingAttUser] = useState(false);

  const updateContact = async (userData) => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    for (const key in userData) {
      if (key in userData && userData[key] === "") {
        delete userData[key];
      }
    }

    try {
      setLoadingAttUser(true);
      const response = await api.patch(`/users/${user.id}`, userData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast({
        title: "Conta atualizada com sucesso!",
        position: "top-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setUser(response.data);
    } catch (error) {
      toast({
        title: "Erro ao atualizar!",
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    } finally {
      setLoadingAttUser(false);
      setIsOpenModalUser(false);
    }
  };

  const deleteUser = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    try {
      await api.delete(`/users/${user.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isOpenModalUser,
        setIsOpenModalUser,
        loadingAttUser,
        updateContact,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
