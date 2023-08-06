import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactContext } from "../../../provides/ContactContext";
import { IContact } from "../../../provides/ContactContext/@types";
import Input from "../../Input";
import { schema } from "./schema";
import StyledFormUpdatedContact from "./style";

const FormUpdateContact = () => {
  const { contactSelect, deleteContact, contactUpdate } =
    useContext(ContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      full_name: contactSelect?.full_name,
      email: contactSelect?.email,
      phone: contactSelect?.phone,
    },
  });
  const submit: SubmitHandler<IContact> = (data: IContact) => {
    contactUpdate(data);
  };

  const handleSubmitDelete = (id: number | undefined) => {
    deleteContact(id!);
  };

  return (
    <StyledFormUpdatedContact>
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
        
        <div className="container-buttons">
          <button className="btn-update" type="submit">Atualizar contato</button>
          <button className="btn-delete" onClick={() => handleSubmitDelete(contactSelect?.id)}>
            Excluir
          </button>
        </div>
      </form>
    </StyledFormUpdatedContact>
  );
};
export default FormUpdateContact;
