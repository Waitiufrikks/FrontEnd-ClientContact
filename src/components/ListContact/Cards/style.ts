import { styled } from "styled-components";

const StyledCard = styled.li`
  background: var(--color-grey-800);
  margin: 10px;
  border-radius: var(--radius-default);
  div {
    height: 45px;
    padding: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:20px;
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    }
  }
`;
export default StyledCard;
