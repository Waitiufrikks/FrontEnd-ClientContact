import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ClientContext } from "../../provides/ClientContext";
import { IClient } from "../../provides/ClientContext/@types";

import { schema } from "./validator";
import Input from "../Input";
import StyledFormContainerRegister from "./style";

const FormRegister = () => {
  const { registerClient } = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IClient>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<IClient> = (data) => {
    registerClient(data);
    reset();
  };

  return (
    <StyledFormContainerRegister>
      <h2>Crie sua conta</h2>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Name"
          type="text"
          id="name"
          placeholder="Seu nome completo"
          register={register("name")}
          text="Name"
        />
        <span>{errors.name?.message}</span>

        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="Seu Email"
          register={register("email")}
          text="Email"
        />
        <span>{errors.email?.message}</span>

        <Input
          label="Password"
          type="password"
          id="password"
          placeholder="Sua senha"
          register={register("password")}
          text="Senha"
        />
        <span>{errors.password?.message}</span>

        <button type="submit">Cadastrar</button>
      </form>
    </StyledFormContainerRegister>
  );
};

export default FormRegister;
