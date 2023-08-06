/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, } from "react";
import HeaderDivListContact from "../../components/HeaderListContact";
import ListContactContainer from "../../components/ListContact";
import Nav from "../../components/NavDashBoard";
import ProfileDivContainer from "../../components/Profile";
import StyledDivDashBoard from "./style";
import { ClientContext } from "../../provides/ClientContext";
import { ModalCreateContact } from "../../components/Modal/ModalCreate";
import { ContactContext } from "../../provides/ContactContext";
import { ModalContact } from "../../components/Modal/ModalContact";
import { ModalClient } from "../../components/Modal/ModalClient";

const DashBoardPage = () => {
  const { client, logout,showModalClient} = useContext(ClientContext);
  const { showModal,showModalContact} = useContext(ContactContext);
  return (
    <>
      <StyledDivDashBoard>
        <Nav logout={logout} />
        <ProfileDivContainer client={client!} />
        <main>
          <HeaderDivListContact />
          <ListContactContainer />
        </main>
      </StyledDivDashBoard>
      {}
      {showModal && <ModalCreateContact />}
      {showModalContact && <ModalContact />}
      {showModalClient && <ModalClient />}
    </>
  );
};
export default DashBoardPage;
