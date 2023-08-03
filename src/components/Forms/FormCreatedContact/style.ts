import { styled } from "styled-components";

const StyledFormContainerContact = styled.div`
  padding: 10px;
  form {
    display:flex;
    flex-direction:column;
    gap:1.25rem;
  }
  button.btn-send {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: var(--radius-default);
    color: var(--color-grey-800);
    font-size: var(--text-size-default);
    font-weight: 600;
    background: var(--color-primary);
  }
`;
export default StyledFormContainerContact;
