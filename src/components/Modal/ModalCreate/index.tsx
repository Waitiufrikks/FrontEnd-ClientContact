import { useContext } from "react";
import StyledDivModal from "./style";
import { ContactContext } from "../../../provides/ContactContext";
import FormCreateContact from "../../Forms/FormCreatedContact";

export function ModalCreateContact() {
  const { setShowModal } = useContext(ContactContext);

  return (
    <StyledDivModal className="container--modal--create">
      <div className="container--form">
        <div className="header--modal">
          <h2>Cadastrar Contato</h2>
          <FormCreateContact />
          <button className="btn--close" onClick={() => setShowModal(false)}>
            X
          </button>
        </div>
      </div>
    </StyledDivModal>
  );
}
