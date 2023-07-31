import { styled } from "styled-components";

const StyledFormContainerLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-600);
  gap: 1.4rem;
  border-radius: var(--radius-default);
  h2 {
    font-size: var(--title-size-3);
    font-weight: 700;
    padding: 40px 0 20px 0;
    text-align: center;
  }

  form {
    display: grid;
    gap: 1.5rem;
    padding: 0px 18px 18px 18px;
    span {
      color: var(--color-negative);
      font-size: var(--text-size-smallest);
    }
    button {
      height: 2.5rem;
      width: 100%;
      justify-self: center;

      border: none;
      border-radius: var(--radius-default);

      font-size: var(--title-size-3);

      color: var(--color-grey-600);
      background: var(--color-primary);
    }
    .span-redirect-register {
      text-align: center;
      font-weight: 600;
      color: var(--color-grey-100);
    }
    .container-button-signUp {
      height: 40px;

      display: flex;
      justify-content: center;
      background-color: var(--color-primary);
      padding: 0 20px 0 20px;
      border-radius: var(--radius-default);
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--text-size-medium);
        color: var(--color-grey-800);
      }
    }
    button:hover{
      background:var(--color-primary-hover);
    }
    .container-button-signUp:hover{
      background:var(--color-primary-hover);
    }
  }
`;
export default StyledFormContainerLogin;
