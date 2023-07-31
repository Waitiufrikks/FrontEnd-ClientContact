import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Input";
import { ClientContext } from "../../../provides/ClientContext";
import { IClient } from "../../../provides/ClientContext/@types";
import { schema } from "./schema";
import StyledFormContainerLogin from "./style";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  const { loginClient } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClient>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<IClient> = (data) => {
    loginClient(data);
  };
  return (
    <StyledFormContainerLogin>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Email"
          type="text"
          placeholder="Seu Email"
          text="Email"
          id="email"
          register={register("email")}
        />
        <span>{errors.email?.message}</span>
        <Input
          label="Password"
          type="password"
          placeholder="Sua senha"
          text="Senha"
          id="password"
          register={register("password")}
        />
        <span>{errors.password?.message}</span>
        <button type="submit">Entrar</button>
        <span className="span-redirect-register">
          Ainda nao possui uma conta ?
        </span>
        <div className="container-button-signUp">
          {/* POSSIVEL COMPONENTE */}
          <Link to="/register">Cadastrar-se</Link>
        </div>
      </form>
    </StyledFormContainerLogin>
  );
};
