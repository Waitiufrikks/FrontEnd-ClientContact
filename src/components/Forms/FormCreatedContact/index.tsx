import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactContext } from "../../../provides/ContactContext";
import { useContext } from "react";
import { schema } from "./schema";
import { IContact } from "../../../provides/ContactContext/@types";
import StyledFormContainerContact from "./style";

const FormCreateContact = () => {
  const { createContactClient } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<IContact> = (data: IContact) => {
    createContactClient(data);
  };
  return (
    <StyledFormContainerContact>
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

        <button className="btn-send" type="submit">
          Cadastrar
        </button>
      </form>
    </StyledFormContainerContact>
  );
};
export default FormCreateContact;
