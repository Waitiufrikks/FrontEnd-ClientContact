import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import { ClientContext } from "../../provides/ClientContext";
import { IClient } from "../../provides/ClientContext/@types";
import { schema } from "./schema";

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
    console.log(data)
    loginClient(data)
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        type="text"
        placeholder="Seu Email"
        text="Email Address"
        id="email"
        register={register("email")}
      />
      <p>{errors.email?.message}</p>
      <Input
        label="Password"
        type="password"
        placeholder="Password"
        text="Password"
        id="password"
        register={register("password")}
      />
      <p>{errors.password?.message}</p>
      <button type="submit">Sign in</button>
    </form>
  );
};
