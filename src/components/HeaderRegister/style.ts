import { styled } from "styled-components";

const StyledHeaderRegisterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  h1 {
    color: var(--color-primary);
    font-size: var(--title-size-2);
    font-weight: 600;
  }
  .button-redirect-login {
    width: 80px;
    height: 32px;
    display: flex;
    justify-content: center;
    background-color: var(--color-grey-600);
    border-radius: var(--radius-default);
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:var(--text-size-small);
      color: var(--color-grey-0);
    }
  }
`;

export default StyledHeaderRegisterDiv;
