import { styled } from "styled-components";

const StyledDivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:15px 0 15px 0;
  h2{
    font-size:var(--text-size-medium);
  }
  button{
    width:30px;
    height:30px;
    font-size:1.75rem;
    text-align:center;
    border:none;
    border-radius:var(--radius-default);
    background:var(--color-grey-300);
  }
`;
export default StyledDivHeader;
