import { Link } from "react-router-dom";
import StyledHeaderRegisterDiv from "./style";

const HeaderRegister = () => (
  <StyledHeaderRegisterDiv className="header-register">
    <h1>Client Contact</h1>
    <div className="button-redirect-login">
      <Link to={"/"}>Voltar</Link>
    </div>
  </StyledHeaderRegisterDiv>
);

export default HeaderRegister;
