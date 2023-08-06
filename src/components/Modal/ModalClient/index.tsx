/* eslint-disable @typescript-eslint/ban-types */

import { useContext } from "react";
import { ClientContext } from "../../../provides/ClientContext";
import HeaderModal from "../HeaderModal";
import StyledDivModalClient from "./style";
import FormUpdateClient from "../../Forms/FormUpdateClient";

export function ModalClient() {
  const { setShowModalClient } = useContext(ClientContext);

  const handleCloseModal = () => {
    setShowModalClient(false);
  };
  return (
    <StyledDivModalClient className="container-modal-client">
      <div className="container-form">
        <HeaderModal
          text={"Informacoes do client"}
          closeModal={handleCloseModal}
        />
        <FormUpdateClient />
      </div>
    </StyledDivModalClient>
  );
}
