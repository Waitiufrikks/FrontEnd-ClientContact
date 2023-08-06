import { IContact } from "../../../provides/ContactContext/@types";
import StyledCard from "./style";
import { ContactContext } from "../../../provides/ContactContext";
import { useContext } from "react";

interface CardsProps {
  contact: IContact;
}

const Cards: React.FC<CardsProps> = ({ contact }) => {
  const { modalContactOpen } = useContext(ContactContext);

  return (
    <StyledCard onClick={() => modalContactOpen(contact)}>
      <div>
        <h2>{contact.full_name}</h2>
        <span>{contact.email}</span>
      </div>
    </StyledCard>
  );
};

export default Cards;
