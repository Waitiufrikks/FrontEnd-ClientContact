import { IClient } from "../../provides/ClientContext/@types";
import StyledDiv from "./style";

const ProfileDivContainer = ({ client }: { client: IClient }) => {
  return (
    <StyledDiv>
      <h2>Olá,{client?.full_name}</h2>
      <div className="detail-profile">
        <span>{client?.email} </span>
        <span>{client?.phone}</span>
      </div>
    </StyledDiv>
  );
};
export default ProfileDivContainer;
