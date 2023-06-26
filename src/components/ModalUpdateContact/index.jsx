import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext";
import { updateContactSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ModalUpdateContact = () => {
  const {
    isOpenModalUpdateContact,
    setIsOpenModalUpdateContact,
    loadingAttContact,
    updateContact,
  } = useContext(ContactContext);

  const handleClose = () => {
    setIsOpenModalUpdateContact(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(updateContactSchema),
  });

  const submit = (data) => {
    updateContact(data);
    reset();
  };

  return (
    <Modal isOpen={isOpenModalUpdateContact} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent
        backgroundColor={"white.50"}
        h={"450px"}
        borderRadius={"5px"}
        marginInline={"30px"}
        borderLeft={"5px solid"}
        borderColor={"green.100"}
      >
        <ModalHeader fontSize={"xl"}>Atualizar contato</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <form onSubmit={handleSubmit(submit)}>
            <Box
              h={"100%"}
              flexDir={"column"}
              display={"flex"}
              gap={"20px"}
              justifyContent={"space-around"}
            >
              <FormControl isInvalid={errors.email ? true : false}>
                <FormLabel
                  fontSize={"xl"}
                  fontWeight={"extrabold"}
                  color={"green.200"}
                >
                  Email
                </FormLabel>
                <Input
                  placeholder="Digite seu email..."
                  h={"30px"}
                  backgroundColor={"green.50"}
                  color={"green.100"}
                  fontSize={"xl"}
                  fontWeight={"medium"}
                  {...register("email")}
                />
                <FormErrorMessage fontSize={"lg"}>
                  {errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.phoneNumber ? true : false}>
                <FormLabel
                  fontSize={"xl"}
                  fontWeight={"extrabold"}
                  color={"green.200"}
                >
                  Telefone
                </FormLabel>
                <Input
                  placeholder="Digite sua senha..."
                  h={"30px"}
                  backgroundColor={"green.50"}
                  color={"green.100"}
                  fontSize={"xl"}
                  fontWeight={"medium"}
                  {...register("phoneNumber")}
                />
                <FormErrorMessage fontSize={"lg"}>
                  {errors.phoneNumber?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.name ? true : false}>
                <FormLabel
                  fontSize={"xl"}
                  fontWeight={"extrabold"}
                  color={"green.200"}
                >
                  Nome
                </FormLabel>
                <Input
                  placeholder="Digite sua senha..."
                  h={"30px"}
                  backgroundColor={"green.50"}
                  color={"green.100"}
                  fontSize={"xl"}
                  fontWeight={"medium"}
                  {...register("name")}
                />
                <FormErrorMessage fontSize={"lg"}>
                  {errors.name?.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                h={"30px"}
                fontSize={"xl"}
                backgroundColor={"green.50"}
                color={"green.200"}
                border={"1px solid"}
                borderColor={"green.200"}
                marginTop={"10px"}
                disabled={loadingAttContact}
              >
                {loadingAttContact ? "Atualizando..." : "Atualizar dados"}
              </Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ModalUpdateContact };
