import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Flex,
  Img,
  Text,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { loginSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import imgLogin from "../../img/img.png";
import { UserContext } from "../../providers/UserContext";

const FormLogin = () => {
  const { userLogin, loadingLogin } = useContext(UserContext);
  const isImageVisible = useBreakpointValue({ base: false, md: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submit = (data) => {
    userLogin(data);
    reset();
  };

  return (
    <Flex
      backgroundColor={"white.50"}
      w={{ base: "500px", md: "800px" }}
      h={{ base: "530px", md: "530px" }}
      borderRadius={"5px"}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      justify={"space-between"}
      borderLeft={"5px solid"}
      borderColor={"green.100"}
      margin={"10px"}
    >
      <Flex
        justifyContent={"center"}
        width={"100%"}
        padding={"10"}
        flexDirection={"column"}
      >
        <form onSubmit={handleSubmit(submit)}>
          <Box height={"100%"} flexDir={"column"} gap={"20px"} display={"flex"}>
            <Text fontSize={"2xl"} fontWeight={"extrabold"} color={"green.200"}>
              Login
            </Text>
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
            <FormControl isRequired isInvalid={errors.password ? true : false}>
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
            <Button
              type="submit"
              h={"30px"}
              fontSize={"xl"}
              backgroundColor={"green.50"}
              color={"green.200"}
              border={"1px solid"}
              borderColor={"green.200"}
              marginTop={"10px"}
              disabled={loadingLogin}
            >
              {loadingLogin ? "Entrando..." : "Entrar"}
            </Button>
          </Box>
        </form>
        <Flex gap={"10px"} marginTop={"10px"}>
          <Text fontSize={"lg"}>Não possui conta?</Text>
          <ChakraLink
            as={RouterLink}
            to="/register"
            textDecoration="underline"
            fontSize={"lg"}
          >
            Cadastre-se
          </ChakraLink>
        </Flex>
      </Flex>
      {isImageVisible && <Img src={imgLogin} w={"370px"}></Img>}
    </Flex>
  );
};

export { FormLogin };
