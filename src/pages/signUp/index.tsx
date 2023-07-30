import FormRegister from "../../components/FormSignUp";
import HeaderRegister from "../../components/HeaderRegister";
import StyledRegisterPageDiv from "./style";

const SignUpPage = () => (
  <StyledRegisterPageDiv>
    <HeaderRegister />

    <FormRegister />
  </StyledRegisterPageDiv>
);

export default SignUpPage;
