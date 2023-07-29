import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ClientContext } from "../../provides/ClientContext";
import { IClient } from "../../provides/ClientContext/@types";

import { schema } from "./validator";
import Input from "../Input";

const FormRegister = () => {
  const { registerClient } = useContext(ClientContext);

  const { register, handleSubmit, reset } = useForm<IClient>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<IClient> = (data) => {
    console.log(data)
    registerClient(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
     <Input
        label="Name"
        type="text"
        id="name"
        placeholder="Seu nome completo"
        register={register('name')}
        text="Name"
      />
      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="Seu Email"
        register={register('email')}
        text="Email"
      />
      <Input
        label="Password"
        type="password"
        id="password"
        placeholder="Sua senha"
        register={register('password')}
        text="Senha"
      />
      <div>
        <button type="submit">Entrar</button>
      </div>
    </form>
  );
};

export default FormRegister;
