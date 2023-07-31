import { FormLogin } from "../../components/Forms/FormLogin";
import StyledDivLogin from "./style";

const LoginPage = () => {
  return (
    <StyledDivLogin className="form__container">
      <h1>Contacts-Client</h1>
      <FormLogin />
    </StyledDivLogin>
  );
};
export default LoginPage;
