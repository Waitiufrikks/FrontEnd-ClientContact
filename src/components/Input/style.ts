import styled from "styled-components";

const StyledDivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  label {
    font-size: var(--text-size-small);
  }
  input {
    font-family:var(--font-text-default);
    height: 2rem;
    padding-left: 0.5rem;
    border:none;
    border-radius:var(--radius-default);
    outline:none;
  }
  
`;
export default StyledDivInput;
