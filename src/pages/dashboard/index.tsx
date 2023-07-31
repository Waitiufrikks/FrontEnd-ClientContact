import HeaderDivListContact from "../../components/HeaderListContact";
import ListContactContainer from "../../components/ListContact";
import Nav from "../../components/NavDashBoard";
import ProfileDivContainer from "../../components/Profile";
import StyledDivDashBoard from "./style";

const DashBoardPage = () => {
  return (
    <StyledDivDashBoard>
      <Nav />
      <ProfileDivContainer />
      <main>
        <HeaderDivListContact />
        <ListContactContainer />
      </main>
    </StyledDivDashBoard>
  );
};
export default DashBoardPage;
