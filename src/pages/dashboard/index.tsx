/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext } from "react";
import HeaderDivListContact from "../../components/HeaderListContact";
import ListContactContainer from "../../components/ListContact";
import Nav from "../../components/NavDashBoard";
import ProfileDivContainer from "../../components/Profile";
import StyledDivDashBoard from "./style";
import { ClientContext } from "../../provides/ClientContext";
import { ModalCreateContact } from "../../components/Modal/ModalCreate";
import { ContactContext } from "../../provides/ContactContext";

const DashBoardPage = () => {
  const { client, logout } = useContext(ClientContext);
  const { showModal} = useContext(ContactContext);

  return (
    <StyledDivDashBoard>
      <Nav logout={logout} />
      <ProfileDivContainer client={client!} />
      <main>
        <HeaderDivListContact />
        <ListContactContainer />
      </main>
      {showModal && <ModalCreateContact />}
    </StyledDivDashBoard>
    
  );
};
export default DashBoardPage;
