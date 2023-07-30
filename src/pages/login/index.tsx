import { FormLogin } from "../../components/FormLogin";
import StyledDivLogin from "./style";

const LoginPage = () => {
  return (
    <StyledDivLogin className="form__container">
      <h1>Contacts-Client</h1>
      <FormLogin />
    </StyledDivLogin>
  );
};
export default LoginPage