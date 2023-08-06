import { useContext } from "react";
import { ContactContext } from "../../provides/ContactContext";
import StyledDivHeader from "./style";

const HeaderDivListContact = () => {
  const { modalOpen} = useContext(ContactContext);
  return (
    <StyledDivHeader>
      <h2>Seus contatos</h2>
      <button onClick={modalOpen}>+</button>
    </StyledDivHeader>
  );
};

export default HeaderDivListContact;
