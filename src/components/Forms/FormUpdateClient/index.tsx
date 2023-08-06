/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ClientContext } from "../../../provides/ClientContext";
import { IClient } from "../../../provides/ClientContext/@types";
import Input from "../../Input";
import StyledFormUpdatedClient from "./style";
import { schema } from "./schema";

const FormUpdateClient = () => {
  const { clientSelect, deleteClient, updateClient } =
    useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClient>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      full_name: clientSelect?.full_name,
      email: clientSelect?.email,
      phone: clientSelect?.phone,
    },
  });
  const submit: SubmitHandler<IClient> = (data: IClient) => {
    updateClient(data);
  };

  const handleSubmitDelete = (id: number | undefined) => {
    deleteClient(id!);
  };

  return (
    <StyledFormUpdatedClient>
      <form action="" onSubmit={handleSubmit(submit)}>
        <Input
          label="Nome"
          type="text"
          placeholder="Seu nome"
          text="Nome"
          id="name"
          register={register("full_name")}
        />
        <span>{errors.full_name?.message}</span>
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
          label="Telefone"
          type="text"
          placeholder="Seu Telefone"
          text="Telefone"
          id="telefone"
          register={register("phone")}
        />
        <span>{errors.phone?.message}</span>
        <Input
          label="Password"
          type="password"
          placeholder="Sua senha"
          text="Senha"
          id="password"
          register={register("password")}
        />
        <span>{errors.password?.message}</span>
        <div className="container-buttons">
          <button className="btn-update-client" type="submit">Atualizar client</button>
          <button className="btn-delete" onClick={() => handleSubmitDelete(clientSelect?.id)}>
            Excluir
          </button>
        </div>
      </form>
    </StyledFormUpdatedClient>
  );
};
export default FormUpdateClient;
