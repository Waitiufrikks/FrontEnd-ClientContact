import { styled } from "styled-components";

const StyledDivList = styled.div`
  background: var(--color-grey-600);
  border-radius: var(--radius-default);
  .nothing-message{
    padding:50px 0 50px 0;
    text-align: center;
    font-size: var(--text-size-large);
  }
  ul {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-800);
    outline: 1px solid var(--color-grey-300);
    border-radius: var(--radius-default);
  }
`;
export default StyledDivList;
