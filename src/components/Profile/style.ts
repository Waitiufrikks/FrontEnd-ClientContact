import { styled } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 300px;
  max-width: 770px;
  margin: 0 auto;
  gap: 1rem;
  padding: 30px 10px 30px 10px;
  div.detail-profile {
    display:flex;
    gap:2rem;
    span {
      color: var(--color-grey-100);
    }
  }
`;
export default StyledDiv;
