/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useEffect } from "react";
import HeaderDivListContact from "../../components/HeaderListContact";
import ListContactContainer from "../../components/ListContact";
import Nav from "../../components/NavDashBoard";
import ProfileDivContainer from "../../components/Profile";
import StyledDivDashBoard from "./style";
import { ClientContext } from "../../provides/ClientContext";
import { ModalCreateContact } from "../../components/Modal/ModalCreate";
import { ContactContext } from "../../provides/ContactContext";
import api from "../../service/api";

const DashBoardPage = () => {
  const { client, logout,} = useContext(ClientContext);
  const { showModal,} = useContext(ContactContext);
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
      {showModal && <ModalCreateContact />}
    </>
  );
};
export default DashBoardPage;
