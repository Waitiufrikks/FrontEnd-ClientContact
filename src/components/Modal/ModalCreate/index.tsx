import StyledDivModal from "./style";
import FormCreateContact from "../../Forms/FormCreatedContact";
import HeaderModal from "../HeaderModal";

export function ModalCreateContact() {
  return (
    <StyledDivModal className="container-modal-create">
      <div className="container-form">
        <HeaderModal text={"Cadastrar Contato"} />
        <FormCreateContact />
      </div>
    </StyledDivModal>
  );
}
