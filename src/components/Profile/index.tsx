import StyledDiv from "./style";

const ProfileDivContainer = () => {
  return (
    <StyledDiv>
      <h2>Olá,Nome do usuario</h2>
      <div className="detail-profile">
        <span>email </span>
        <span>telefone</span>
      </div>
    </StyledDiv>
  );
};
export default ProfileDivContainer;
