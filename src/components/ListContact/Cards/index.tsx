import { IContact } from "../../../provides/ClientContext/@types";
import StyledCard from "./style";

interface CardsProps {
  contact: IContact;
}

const Cards: React.FC<CardsProps> = ({ contact }) => {
  return (
    <StyledCard>
      <div>
        <h2>{contact.full_name}</h2>
        <span>{contact.email}</span>
      </div>
    </StyledCard>
  );
};

export default Cards;