import { styled } from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items:center;
  justify-content: space-between;
  min-width: 300px;
  max-width: 770px;
  margin: 0 auto;
  padding:20px 10px 20px 10px;
  h1 {
    color:var(--color-primary);
    font-weight:600;
    font-size:var(--title-size-3);
  }
  button {
    height:2rem;
    width: 4.5rem;
    border: none;

    color:var(--color-grey-0);
    font-size:var(--text-size-default);
    border-radius: var(--radius-default);
    background: var(--color-grey-300);
  }
`;

export default StyledNav;
