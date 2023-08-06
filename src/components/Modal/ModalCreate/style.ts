import { styled } from "styled-components";

const StyledDivModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(50, 50, 50, 0.3);
  padding: 10px;
  div.container-form {
    position: fixed;
    width: 80%;
    min-width: 300px;
    max-width: 370px;
    height: auto;
    top: 50%;
    left: 50%;
    border-bottom-left-radius:var(--radius-default);
    border-bottom-right-radius:var(--radius-default);
    background: var(--color-grey-800);
    transform: translate(-50%, -50%);
  }

`;
export default StyledDivModal;
