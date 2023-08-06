import { useContext } from "react";
import { ClientContext } from "../../provides/ClientContext";
import { IClient } from "../../provides/ClientContext/@types";
import StyledDiv from "./style";

const ProfileDivContainer = ({ client }: { client: IClient }) => {
  const { modalClientOpen } = useContext(ClientContext);

  return (
    <StyledDiv>
      <div className="intro-config-perfil">
        <h2>Olá,{client?.full_name}</h2>
        <button onClick={() => modalClientOpen(client)}>
          Atualizar perfil
        </button>
      </div>
      <div className="detail-profile">
        <span>{client?.email} </span>
        <span>{client?.phone}</span>
      </div>
    </StyledDiv>
  );
};
export default ProfileDivContainer;
