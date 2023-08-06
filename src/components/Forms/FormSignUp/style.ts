import { styled } from "styled-components";

const StyledFormContainerRegister = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-600);
  gap: 1.4rem;
  border-radius:var(--radius-default);
  form {
    display: grid;
    gap: 1.5rem;
    padding: 0px 18px 18px 18px;
    span{
      color:var(--color-negative);
      font-size:var(--text-size-smallest);
    }
    button {
      height:2.5rem;
      width:100%;
      justify-self: center;

      border: none;
      border-radius:var(--radius-default);
      
      font-size:var(--title-size-2);

      color: var(--color-grey-600);
      background: var(--color-primary);
    }
  }
`;

export default StyledFormContainerRegister;
