/* eslint-disable @typescript-eslint/ban-types */

import { useContext } from "react";
import { ContactContext } from "../../../provides/ContactContext";
import FormUpdateContact from "../../Forms/FormUpdateContact";
import HeaderModal from "../HeaderModal";
import StyledDivModalContact from "./style";

export function ModalContact() {
  const { setShowModalContact } = useContext(ContactContext);

  const handleCloseModal = () => {
    setShowModalContact(false);
  };
  return (
    <StyledDivModalContact className="container-modal-contact">
      <div className="container-form">
        <HeaderModal
          text={"Detalhes do contato"}
          closeModal={handleCloseModal}
        />
        <FormUpdateContact />
      </div>
    </StyledDivModalContact>
  );
}
