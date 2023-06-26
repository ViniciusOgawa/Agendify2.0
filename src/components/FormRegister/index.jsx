import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { registerSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../providers/UserContext";

const FormRegister = () => {
  const { userRegister, loadingRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit = (data) => {
    userRegister(data);
    reset();
  };

  return (
    <Flex
      backgroundColor={"white.50"}
      w={{ base: "500px", md: "800px" }}
      h={{ base: "700px", md: "500px" }}
      borderRadius={"5px"}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      justify={"space-between"}
      borderLeft={"5px solid"}
      borderColor={"green.100"}
      margin={"10px"}
    >
      <Flex
        justifyContent={"center"}
        w={"100%"}
        h={"100%"}
        padding={"10"}
        flexDirection={"column"}
      >
        <form onSubmit={handleSubmit(submit)}>
          <Box height={"100%"} flexDir={"column"} gap={"30px"} display={"flex"}>
            <Text fontSize={"2xl"} fontWeight={"extrabold"} color={"green.200"}>
              Cadastro
            </Text>
            <Flex
              justifyContent={"space-between"}
              flexDirection={{ base: "column", md: "row" }}
              gap={"30px"}
            >
              <Flex flexDirection={"column"} gap={"20px"}>
                <FormControl isRequired isInvalid={errors.email ? true : false}>
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
                <FormControl
                  isRequired
                  isInvalid={errors.password ? true : false}
                >
                  <FormLabel
                    fontSize={"xl"}
                    fontWeight={"extrabold"}
                    color={"green.200"}
                  >
                    Senha
                  </FormLabel>
                  <Input
                    placeholder="Digite sua senha..."
                    h={"30px"}
                    type="password"
                    backgroundColor={"green.50"}
                    color={"green.100"}
                    fontSize={"xl"}
                    fontWeight={"medium"}
                    {...register("password")}
                  />
                  <FormErrorMessage fontSize={"lg"}>
                    {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
              <Flex flexDirection={"column"} gap={"20px"}>
                <FormControl
                  isRequired
                  isInvalid={errors.phoneNumber ? true : false}
                >
                  <FormLabel
                    fontSize={"xl"}
                    fontWeight={"extrabold"}
                    color={"green.200"}
                  >
                    Telefone
                  </FormLabel>
                  <Input
                    placeholder="Digite seu telefone..."
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
                <FormControl isRequired isInvalid={errors.name ? true : false}>
                  <FormLabel
                    fontSize={"xl"}
                    fontWeight={"extrabold"}
                    color={"green.200"}
                  >
                    Nome
                  </FormLabel>
                  <Input
                    placeholder="Digite seu nome..."
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
              </Flex>
            </Flex>
            <Button
              type="submit"
              h={"30px"}
              fontSize={"xl"}
              backgroundColor={"green.50"}
              color={"green.200"}
              border={"1px solid"}
              borderColor={"green.200"}
              marginTop={"10px"}
              disabled={loadingRegister}
            >
              {loadingRegister ? "Cadastrando..." : "Cadastrar"}
            </Button>
          </Box>
        </form>
        <Flex gap={"10px"} marginTop={"20px"}>
          <Text fontSize={"lg"}>Já possui conta?</Text>
          <ChakraLink
            as={RouterLink}
            to="/login"
            textDecoration="underline"
            fontSize={"lg"}
          >
            Entre
          </ChakraLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { FormRegister };
