import StyledDivModal from "./style";
import FormCreateContact from "../../Forms/FormCreatedContact";
import HeaderModal from "../HeaderModal";
import { useContext } from "react";
import { ContactContext } from "../../../provides/ContactContext";

export function ModalCreateContact() {
  const { setShowModal } = useContext(ContactContext);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <StyledDivModal className="container-modal-create">
      <div className="container-form">
        <HeaderModal text={"Cadastrar Contato"} closeModal={handleCloseModal} />
        <FormCreateContact />
      </div>
    </StyledDivModal>
  );
}
