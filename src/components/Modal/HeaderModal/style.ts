import { styled } from "styled-components";

const StyledDivHeaderModal = styled.div`
    padding:0 5px 0 10px;
    border-top-left-radius:var(--radius-default);
    border-top-right-radius:var(--radius-default);
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 40px;

    background: var(--color-grey-300);

    h2 {
      font-weight: 600;
    }
    button.btn-close {
      border-radius: var(--radius-default);
      background: none;
      border: none;
      color: var(--color-grey-000);
    }
  
`;
export default StyledDivHeaderModal