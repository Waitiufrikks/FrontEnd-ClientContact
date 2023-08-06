import { useContext } from "react";
import { ClientContext } from "../../provides/ClientContext";
import Cards from "./Cards";
import StyledDivList from "./style";

const ListContactContainer = () => {
  const { contacts } = useContext(ClientContext);

  return (
    <StyledDivList>
      {contacts !== null && contacts.length !== 0 ? (
        <ul>
          {contacts.map((contact) => (
            <Cards key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p className="nothing-message">Voce nao possui nenhum contato</p>
      )}
    </StyledDivList>
  );
};

export default ListContactContainer;